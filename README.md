# Slopwatch landing page

The one-page site for the Slopwatch macOS app lives at [slopwatch.jad.sh](https://slopwatch.jad.sh). The native app and its releases live in [jad-eljerdy/slopwatch](https://github.com/jad-eljerdy/slopwatch).

## Development

Use Node.js 22.23 or later. Run `npm ci` and `npm run dev`. Use `npm run build` to check the production build.

The home page is static HTML with a small interactive preview. All preview values are examples. The site serves its own fonts and images. Website analytics use PostHog in the Slopwatch organization's Default project. Set `POSTHOG_PROJECT_TOKEN`, `POSTHOG_HOST`, and a random server-only `METRICS_HASH_KEY` in production. The site sends `$pageview` and `download_clicked`. A keyed hash of the UTC date, IP address, and browser user agent estimates daily unique visitors. Raw addresses and user agents stay out of the analytics payload. The site honors Global Privacy Control and Do Not Track. GitHub asset counts also include direct downloads and app updates.

The download route checks GitHub's public latest release for the versioned DMG. If the release lookup fails, the route opens the GitHub release page. The copy, preview data, and search metadata are in `app/`. Vercel deploys the production branch to the custom domain.
