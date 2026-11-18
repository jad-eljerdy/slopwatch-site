import { createHmac } from "node:crypto";
import { origin } from "../../../site";

const events = new Map([
  ["visit", "$pageview"],
  ["download", "download_clicked"],
]);

export async function POST(request, { params }) {
  const event = events.get((await params).event);
  if (!event) return new Response(null, { status: 404 });
  const headers = request.headers;
  if (headers.get("origin") !== new URL(request.url).origin) {
    return new Response(null, { status: 403 });
  }
  if (headers.get("sec-gpc") === "1" || headers.get("dnt") === "1") {
    return new Response(null, { status: 204 });
  }
  const token = process.env.POSTHOG_PROJECT_TOKEN;
  const host = process.env.POSTHOG_HOST;
  const secret = process.env.METRICS_HASH_KEY;
  const ip = headers.get("x-vercel-forwarded-for");
  if (!token || !host || !secret || !ip)
    return new Response(null, { status: 503 });

  const day = new Date().toISOString().slice(0, 10);
  const id = createHmac("sha256", secret)
    .update(JSON.stringify([day, ip, headers.get("user-agent")]))
    .digest("hex");
  try {
    const result = await fetch(new URL("/i/v0/e/", host), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: token,
        event,
        properties: {
          distinct_id: id,
          $process_person_profile: false,
          $geoip_disable: true,
          $current_url: origin + "/",
          $host: new URL(origin).host,
          $pathname: "/",
        },
      }),
      signal: AbortSignal.timeout(4000),
    });
    return new Response(null, { status: result.ok ? 204 : 502 });
  } catch {
    return new Response(null, { status: 502 });
  }
}
