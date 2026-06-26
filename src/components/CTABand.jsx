import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

/** Typographic closing line on the dark bg — no card, no box. */
export default function CTABand() {
  return (
    <section className="section">
      <div className="wrap">
        <ScrollReveal className="close">
          <span className="ln">
            Got a brand that&rsquo;s ready for what&rsquo;s next? Let&rsquo;s get
            into it.
          </span>
          <div style={{ marginTop: 28 }}>
            <Link to="/contact" className="link">
              Start a project →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
