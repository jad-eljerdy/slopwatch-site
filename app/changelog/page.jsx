import DownloadLink from "../components/DownloadLink";
import { Header, Footer } from "../components/SiteNav";
import { repository } from "../site";
import { releases } from "./releases";

const title = "Slopwatch changelog — Mac app release notes";
const description = "See the features and fixes in every public Slopwatch release, from the first Codex and Claude usage tracker to menu bar percentages and banked reset reminders.";
export const metadata = {
  title, description,
  alternates: { canonical: "/changelog" },
  openGraph: { title, description, url: "/changelog", siteName: "Slopwatch", type: "website", images: ["/social.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/social.png"] },
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short", day: "numeric", year: "numeric", timeZone: "UTC",
});

export default function Changelog() {
  return (
    <>
      <Header changelog />
      <main className="wrap log-page" id="main">
        <div className="log-intro">
          <div>
            <h1>Change<em>log.</em></h1>
            <p>Features and fixes in every public release of Slopwatch for Mac.</p>
          </div>
          <DownloadLink />
        </div>
        <div className="log-layout">
          <nav className="release-index" aria-label="Jump to a release">
            <strong>Jump to a release</strong>
            <div>{releases.map(({ tag }) => <a key={tag} href={"#" + tag}>{tag}</a>)}</div>
          </nav>
          <div className="release-list">
            {releases.map(({ tag, date, title, changes }) => (
              <article className="release" key={tag} id={tag} aria-labelledby={tag + "-title"}>
                <div className="release-meta">
                  <a href={repository + "/releases/tag/" + tag} aria-label={tag + " on GitHub"}>{tag}</a>
                  <time dateTime={date}>{dateFormat.format(new Date(date + "T00:00:00Z"))}</time>
                </div>
                <h2 id={tag + "-title"}>{title}</h2>
                <ul>{changes.map(change => <li key={change}>{change}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
