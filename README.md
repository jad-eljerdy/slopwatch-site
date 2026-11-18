# Slopwatch landing page

The one-page site for the Slopwatch macOS app lives at [slopwatch.jad.sh](https://slopwatch.jad.sh). The native app and its releases live in [jad-eljerdy/slopwatch](https://github.com/jad-eljerdy/slopwatch).

## Development

Use Node.js 22.23 or later. Run `npm ci` and `npm run dev`. Use `npm run build` to check the production build.

The home page is static HTML with a small interactive preview. All preview values are examples. The site serves its own fonts and images. It uses no analytics or tracking scripts.

The download route checks GitHub's public latest release for the versioned DMG. If the release lookup fails, the route opens the GitHub release page. The copy, preview data, and search metadata are in `app/`. Vercel deploys the production branch to the custom domain.
