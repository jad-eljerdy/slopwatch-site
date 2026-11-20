import { origin } from "./site";
export default function sitemap() {
  return [{ url: origin + "/" }, { url: origin + "/changelog" }];
}
