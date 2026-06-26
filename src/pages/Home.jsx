import { Link } from "react-router-dom";
import HeroReel from "../components/HeroReel";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";
import LogoMarquee from "../components/LogoMarquee";
import { projects } from "../data/projects";

const STATS = [
  { num: "15", lab: "Years art-directing" },
  { num: "30+", lab: "ADDY awards" },
  { num: "Brewery to NASCAR", lab: "Range of work", sm: true },
  { num: "0 → 32K", lab: "Grizzly reach" },
];

// Grizzly is the hero reel, so the grid shows the other six brands.
const grid = projects
  .filter((p) => p.slug !== "grizzly-smokeless-tobacco")
  .slice(0, 6);

export default function Home() {
  return (
    <>
      <HeroReel />

      {/* SELECTED WORK — six brands + a way through to the rest */}
      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <p className="lab">Selected work</p>
              <Link to="/portfolio" className="link">
                See all work →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid3" style={{ marginTop: 44 }}>
            {grid.map((p, i) => (
              <ScrollReveal key={p.slug} delay={(i % 3) * 70}>
                <ProjectCard project={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — the shape of it */}
      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <p className="lab" style={{ marginBottom: 28 }}>
              The shape of it
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="stats">
              {STATS.map((s) => (
                <div className="stat" key={s.lab}>
                  <span className={`n${s.sm ? " sm" : ""}`}>{s.num}</span>
                  <span className="l">{s.lab}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CLIENTS — slow seamless logo carousel */}
      <LogoMarquee />

      {/* CLOSE — typographic closing line */}
      <section className="section">
        <div className="wrap">
          <ScrollReveal className="close">
            <span className="ln">
              Got a brand that&rsquo;s ready for what&rsquo;s next? Let&rsquo;s
              get into it.
            </span>
          </ScrollReveal>
          <ScrollReveal style={{ marginTop: 32 }}>
            <Link to="/contact" className="link">
              Let&rsquo;s talk →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
