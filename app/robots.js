import { origin } from "./site";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/download" },
    sitemap: origin + "/sitemap.xml",
  };
}
