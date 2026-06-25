import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

/** Warm rounded call-to-action before the footer. */
export default function CTABand() {
  return (
    <section className="cta">
      <ScrollReveal className="cta__inner">
        <div
          className="blob blob--1"
          aria-hidden="true"
          style={{ width: 180, height: 180, background: "#fff", opacity: 0.14, top: -50, right: -30 }}
        />
        <h2 className="cta__title">Got a project in mind?</h2>
        <p className="cta__sub">
          A rebrand, a campaign, or something you haven&rsquo;t named yet — let&rsquo;s
          build it together.
        </p>
        <Link to="/contact" className="pill pill--ink" style={{ marginTop: 22, position: "relative", zIndex: 2 }}>
          Let&rsquo;s talk →
        </Link>
      </ScrollReveal>
    </section>
  );
}
