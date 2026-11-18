import { repository } from "../site";

// Read public release metadata only. A new app release needs no website deployment.
export async function GET() {
  let destination = repository + "/releases/latest";
  try {
    const response = await fetch(
      "https://api.github.com/repos/jad-eljerdy/slopwatch/releases/latest",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 900 },
        signal: AbortSignal.timeout(4000),
      },
    );
    if (response.ok) {
      const release = await response.json();
      const version = release.tag_name?.match(/^v(\d+(?:\.\d+)+)$/)?.[1];
      const name = "Slopwatch-" + version + ".dmg";
      if (
        version &&
        release.assets?.some(
          (asset) => asset.name === name && asset.state === "uploaded",
        )
      ) {
        destination =
          repository + "/releases/download/v" + version + "/" + name;
      }
    }
  } catch {
    /* The GitHub release page also provides the installer. */
  }
  return new Response(null, {
    status: 307,
    headers: {
      Location: destination,
      "Cache-Control": "public, max-age=60",
      "X-Robots-Tag": "noindex",
    },
  });
}
