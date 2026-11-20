import { ArrowUpRight, Timer } from "lucide-react";
import { repository } from "../site";

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Slopwatch home">
      <span><Timer size={22} strokeWidth={2.3} /></span>
      Slopwatch
    </a>
  );
}

export function Header({ changelog = false }) {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="wrap nav">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="/#details">Features</a>
          <a href="/changelog" aria-current={changelog ? "page" : undefined}>Changelog</a>
          <a className="faq-link" href="/#questions">FAQ</a>
          <a className="source" href={repository}>GitHub <ArrowUpRight size={15} /></a>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Brand />
        <a href="/changelog">Changelog</a>
        <a href="https://jad.sh">Made by Jad <ArrowUpRight size={14} /></a>
      </div>
    </footer>
  );
}
