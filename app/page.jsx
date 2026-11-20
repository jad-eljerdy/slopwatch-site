import {
  PanelTop,
  Settings2,
  RefreshCw,
  Timer,
  ChartNoAxesColumnIncreasing,
  Fingerprint,
  Plus,
} from "lucide-react";
import DownloadLink from "./components/DownloadLink";
import { Header, Footer } from "./components/SiteNav";
import Preview from "./components/Preview";
import { origin, repository, description } from "./site";

const faqs = [
  [
    "How do I connect Claude Code or Codex?",
    "Sign in to the provider’s CLI on your Mac. Open Slopwatch and it detects the session. You can use either provider on its own.",
  ],
  [
    "Which subscription limits can I see?",
    "Slopwatch shows the five-hour and weekly windows that each provider reports. The panel shows how much is left by default. You can switch to percentage used in General settings. Reset times appear when the provider reports them.",
  ],
  [
    "How does Slopwatch estimate API cost?",
    "It reads token counts from local session logs and applies published API prices for each model. The estimate shows what that usage would cost at API rates. Your subscription fee is separate. A plus sign marks an estimate with unpriced tokens.",
  ],
  [
    "Does my usage history leave my Mac?",
    "Slopwatch keeps usage history on your Mac and collects no telemetry. The signed-in Claude CLI can contact Anthropic for current limits. Slopwatch checks GitHub for app updates.",
  ],
  [
    "What does this website count?",
    "The website counts page views and clicks on Download for Mac. It estimates daily visitors without cookies. It respects Global Privacy Control and Do Not Track. The Mac app collects no telemetry.",
  ],
  [
    "How do I install it?",
    <>
      Download the DMG, drag Slopwatch into Applications, eject the disk image,
      and open the installed app. It supports Apple silicon and Intel on macOS
      26 or later. The current release uses ad hoc signing. If macOS shows a
      first-launch alert, see{" "}
      <a href="https://support.apple.com/en-us/102445">Apple’s guide</a>.
    </>,
  ],
];
export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Slopwatch",
    url: origin,
    downloadUrl: origin + "/download",
    operatingSystem: "macOS 26 or later",
    applicationCategory: "DeveloperApplication",
    description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    sameAs: repository,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main id="main">
        <section className="wrap hero">
          <div className="pitch">
            <div className="eyebrow">
              <span className="signal" /> MACOS MENU BAR APP
            </div>
            <h1>
              Know your
              <br />
              <em>limits.</em>
            </h1>
            <p>
              See how much Codex and Claude Code usage you have left beside the
              clock on your Mac. Open the panel for reset times, token counts, and
              the value of your usage at API prices.
            </p>
            <DownloadLink />
            <div className="compat">
              Free · macOS 26+ · Apple silicon &amp; Intel
            </div>
          </div>
          <Preview />
        </section>
        <section id="details" className="details">
          <div className="wrap">
            <div className="section-head">
              <h2>Inside <em>Slopwatch.</em></h2>
            </div>
            <div className="features">
              {[
                [
                  PanelTop, "Quota beside the clock",
                  "Show Codex, Claude, or both in your menu bar. Each icon shows the lowest percentage left across that provider’s current limits. Hover to see which limit it is.",
                ],
                [
                  Timer, "Five-hour and weekly limits",
                  "Open the panel to see how much each window has left and when it resets. A dash in the menu bar means the provider has no current reading.",
                ],
                [
                  ChartNoAxesColumnIncreasing, "Tokens and API value",
                  "Compare the last 12 hours, 24 hours, 7 days, or 30 days. View both providers together or select one. Slopwatch includes compressed Codex history and applies model-specific API prices.",
                ],
                [
                  Settings2, "Checks on your schedule",
                  "Check subscription limits every 1, 3, 5, 10, 30, or 60 minutes. The default is 5 minutes. Refresh on demand, switch between used and remaining, or hide disconnected subscriptions.",
                ],
                [
                  Fingerprint, "Local usage history",
                  "Sign in with the CLI you already use. Slopwatch reads session logs on your Mac and collects no app telemetry. You can use either subscription on its own.",
                ],
                [
                  RefreshCw, "Signed app updates",
                  "Slopwatch checks daily when automatic updates are on. If your Mac was asleep or offline, it checks at the next opportunity. You can also check for updates from the panel.",
                ],
              ].map(([Icon, name, copy]) => (
                <article key={name}>
                  <Icon aria-hidden="true" size={25} />
                  <h3>{name}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="wrap reset-feature" aria-labelledby="banked-title">
          <div>
            <h2 id="banked-title">Before a banked reset <em>expires.</em></h2>
            <p>Some subscriptions include extra resets you can save for later. Open provider details to see how many you have and when each one expires. Follow the review link to use a reset on the provider’s website.</p>
            <a className="text-link" href="/changelog#v1.1.6">Read the v1.1.6 release notes</a>
          </div>
          <div className="reminder-info">
            <h3>Expiry reminders</h3>
            <dl>
              <div><dt>Default notice</dt><dd>24 hours before expiry</dd></div>
              <div><dt>Other options</dt><dd>1, 6, 12, or 48 hours</dd></div>
              <div><dt>Set it in</dt><dd>Settings → Notifications</dd></div>
            </dl>
            <p>Reminders need a reported expiry date. If Claude Code omits the balance, you can import the count from the Claude usage page.</p>
          </div>
        </section>
        <section id="questions" className="wrap faq">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2>
              A few <em>details.</em>
            </h2>
          </div>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={17} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
