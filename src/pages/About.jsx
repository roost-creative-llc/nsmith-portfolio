import { Link } from "react-router-dom";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";
import CTABand from "../components/CTABand";
import { roles, education } from "../data/experience";

const HEADSHOT = "/images/nick.webp";
const RESUME_URL =
  "https://www.nsmithadve.com/s/Nicholas-Smith_Creative-Director-Art-jjlk.pdf";

const STATS = [
  { n: "15", l: "years art-directing" },
  { n: "30+", l: "ADDY awards" },
  { n: "Brewery to NASCAR", l: "range", sm: true },
  { n: "0 → 32K", l: "Grizzly reach" },
];

export default function About() {
  return (
    <>
      {/* PROFILE HEADER */}
      <section className="container" style={{ paddingTop: 64, paddingBottom: 72 }}>
        <ScrollReveal>
          <div
            className="profile__avatar"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              overflow: "hidden",
              background: "var(--ph)",
              marginBottom: 32,
            }}
          >
            <SmartImage src={HEADSHOT} alt="Portrait of Nick Smith" eager />
          </div>

          <h1 className="sf hero-h" style={{ marginTop: 0, marginBottom: 14 }}>
            Nick Smith
          </h1>
          <p className="sub" style={{ marginTop: 0, marginBottom: 6 }}>
            Senior Art Director · Memphis, TN
          </p>
          <p style={{ color: "var(--muted)", marginBottom: 28 }}>
            Open to select projects.
          </p>
          <p className="sub" style={{ maxWidth: 720, marginTop: 0, marginBottom: 40 }}>
            I&rsquo;m Nick — an art director in Memphis who likes making brands look
            good and feel like themselves.
          </p>

          <div className="stats" style={{ marginBottom: 40 }}>
            {STATS.map((s) => (
              <div className="stat" key={s.l}>
                <span className={s.sm ? "n sm" : "n"}>{s.n}</span>
                <span className="l">{s.l}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              flexWrap: "wrap",
            }}
          >
            <Link to="/contact" className="btn">
              Get in touch →
            </Link>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="link">
              Download résumé ↓
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* THE SHORT VERSION */}
      <section className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <ScrollReveal>
          <div className="lab">The short version</div>
          <p className="sub" style={{ maxWidth: 720, margin: "18px 0 0" }}>
            Fifteen years across branding, packaging, web, and campaigns — for
            breweries, NASCAR, healthcare, and real estate. I care about strategy,
            craft, and the small details that make a brand feel considered. Good
            design should look effortless; getting there isn&rsquo;t.
          </p>
        </ScrollReveal>
      </section>

      {/* WHERE I'VE BEEN */}
      <section className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <ScrollReveal>
          <div className="lab" style={{ marginBottom: 36 }}>
            Where I&rsquo;ve been
          </div>
        </ScrollReveal>

        {roles.map((role, i) => (
          <ScrollReveal key={role.company} delay={i * 50}>
            <div
              className="role-row"
              style={{
                padding: "32px 0",
                borderTop: "1px solid var(--line)",
                borderBottom:
                  i === roles.length - 1 ? "1px solid var(--line)" : undefined,
              }}
            >
              <div style={{ color: "var(--muted)" }}>{role.period}</div>
              <div>
                <div className="sf" style={{ fontSize: 22, marginBottom: 14 }}>
                  {role.title} — {role.company}
                </div>
                {role.bullets.slice(0, 2).map((bullet, b) => (
                  <div
                    key={b}
                    style={{
                      color: "var(--muted)",
                      lineHeight: 1.6,
                      marginBottom: b === 0 ? 8 : 0,
                    }}
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* RECOGNITION + EDUCATION */}
      <section className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <ScrollReveal>
          <div className="grid2">
            <div>
              <div className="lab">Recognition</div>
              <p className="sub" style={{ margin: "18px 0 0" }}>
                30+ ADDY Awards · Wiley design winner
              </p>
            </div>
            <div>
              <div className="lab">Education</div>
              <p className="sub" style={{ margin: "18px 0 0" }}>
                {education.degree} — {education.school}, {education.year}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <CTABand />
    </>
  );
}
