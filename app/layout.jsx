import { origin, title, description } from "./site";
import "@fontsource-variable/dm-sans";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "./style.css";

export const metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: origin,
    siteName: "Slopwatch",
    title,
    description,
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 630,
        alt: "Slopwatch for macOS. Claude Code and Codex usage in your menu bar.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/social.png"],
  },
  icons: { icon: "/icon.png" },
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
