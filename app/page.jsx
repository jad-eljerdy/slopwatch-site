import {
  ArrowDownToLine,
  ArrowUpRight,
  Timer,
  ChartNoAxesColumnIncreasing,
  Fingerprint,
  Plus,
} from "lucide-react";
import Preview from "./components/Preview";
import { origin, repository, description } from "./site";

const faqs = [
  [
    "How do I connect Claude Code or Codex?",
    "Sign in to the provider’s CLI on your Mac. Open Slopwatch and it detects the session. You can use either provider on its own.",
  ],
  [
    "Which subscription limits can I see?",
    "Slopwatch shows the five-hour and weekly windows that each provider reports. Each reading includes the percentage used and its reset time when available.",
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
function Brand() {
  return (
    <a className="brand" href="/" aria-label="Slopwatch home">
      <span>
        <Timer size={22} strokeWidth={2.3} />
      </span>
      Slopwatch
    </a>
  );
}
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
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="wrap nav">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#details">Features</a>
          <a href="#questions">FAQ</a>
          <a className="source" href={repository}>
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
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
              See Claude Code and Codex usage in your Mac menu bar. Check your
              next reset, count your tokens, and see their value at API prices.
            </p>
            <a className="download" href="/download">
              <ArrowDownToLine size={19} />
              Download for Mac
            </a>
            <div className="compat">
              Free · macOS 26+ · Apple silicon &amp; Intel
            </div>
          </div>
          <Preview />
        </section>
        <section id="details" className="details">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">INSIDE THE APP</span>
              <h2>What the stopwatch shows.</h2>
            </div>
            <div className="features">
              {[
                [
                  Timer,
                  "Time until reset",
                  "See your reported five-hour and weekly limits before you start another task.",
                ],
                [
                  ChartNoAxesColumnIncreasing,
                  "Tokens and API value",
                  "Compare the last 24 hours, 7 days, or 30 days. View both providers together or select one.",
                ],
                [
                  Fingerprint,
                  "Local usage history",
                  "Slopwatch reads the CLI sessions on your Mac. It needs no Slopwatch account and collects no telemetry.",
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
      <footer>
        <div className="wrap">
          <Brand />
          <a href="https://jad.sh">
            Made by Jad <ArrowUpRight size={14} />
          </a>
          <a href={repository + "/releases"}>
            Release notes <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}
