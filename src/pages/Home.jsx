import { Link } from "react-router-dom";
import HeroReel from "../components/HeroReel";
import LogoMarquee from "../components/LogoMarquee";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";
import CTABand from "../components/CTABand";
import { projects } from "../data/projects";

const STATS = [
  { num: "0→32K", lab: "Followers, from zero", bg: "var(--yellow)" },
  { num: "30+", lab: "ADDY Awards", bg: "var(--peach)" },
  { num: "15", lab: "Years at it", bg: "var(--lavender)" },
  { num: "4", lab: "Industries", bg: "var(--mint)" },
];

export default function Home() {
  const favorites = projects.slice(0, 6);

  return (
    <>
      <HeroReel />

      {/* SELECTED WORK */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <div className="sec-head">
              <h2 className="sec-head__title">A few favorites</h2>
              <Link to="/portfolio" className="arrow-link">
                All 8 projects →
              </Link>
            </div>
          </ScrollReveal>
          <div className="workgrid">
            {favorites.map((p, i) => (
              <ScrollReveal key={p.slug} delay={(i % 3) * 70}>
                <ProjectCard project={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* STATS */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <p className="label" style={{ textAlign: "center", marginBottom: 8 }}>
              By the numbers
            </p>
            <h2 className="sec-head__title" style={{ textAlign: "center", marginBottom: 28 }}>
              A few results worth sharing.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="statgrid">
              {STATS.map((s) => (
                <div className="statcard" key={s.num} style={{ background: s.bg }}>
                  <div className="statcard__num">{s.num}</div>
                  <div className="statcard__lab">{s.lab}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section section--paper">
        <div className="container" style={{ textAlign: "center", maxWidth: 760 }}>
          <ScrollReveal>
            <p className="label" style={{ marginBottom: 12 }}>
              Hi, I&rsquo;m Nick
            </p>
            <h2 className="display" style={{ fontSize: "var(--fs-h2)" }}>
              A senior art director who sweats the{" "}
              <span className="accent">details.</span>
            </h2>
            <p style={{ color: "var(--ink-60)", margin: "16px auto 0", maxWidth: "52ch", lineHeight: 1.7 }}>
              Breweries, NASCAR, healthcare, real estate — fifteen years of building
              brands that punch above their budgets. I care about strategy, craft, and the
              details that make the difference.
            </p>
            <Link to="/about" className="arrow-link" style={{ marginTop: 22 }}>
              More about me →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
