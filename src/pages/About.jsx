import { Link } from "react-router-dom";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";
import CTABand from "../components/CTABand";
import { roles, education } from "../data/experience";

const HEADSHOT = "/images/nick.webp";
const RESUME_URL =
  "https://www.nsmithadve.com/s/Nicholas-Smith_Creative-Director-Art-jjlk.pdf";

const STATS = [
  { num: "15", lab: "Years" },
  { num: "30+", lab: "ADDYs" },
  { num: "4", lab: "Industries" },
  { num: "8", lab: "Projects" },
];

export default function About() {
  return (
    <>
      {/* PROFILE HEADER */}
      <section className="container profile">
        <ScrollReveal>
          <div className="profile__avatarwrap">
            <div className="profile__avatar">
              <SmartImage src={HEADSHOT} alt="Portrait of Nick Smith" eager />
            </div>
            <span className="profile__status" title="Available for work" aria-label="Available for work" />
          </div>
          <h1 className="profile__name">Nick Smith</h1>
          <p className="profile__handle">Senior Art Director · Memphis, TN</p>
          <p className="profile__bio">
            Branding, packaging, and websites for brands that want to stand out — and stay
            that way.
          </p>

          <div className="profile__stats">
            {STATS.map((s) => (
              <div className="profile__stat" key={s.lab}>
                <b>{s.num}</b>
                <span>{s.lab}</span>
              </div>
            ))}
          </div>

          <div className="profile__actions">
            <Link to="/contact" className="pill pill--accent">
              Get in touch →
            </Link>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="pill pill--ghost">
              Download résumé ↓
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* DETAIL */}
      <section className="about-detail">
        <ScrollReveal>
          <p className="label" style={{ marginBottom: 12 }}>
            A bit more
          </p>
          <p className="about-bio" style={{ marginTop: 0 }}>
            Fifteen years across branding, packaging, web, and campaigns — for breweries,
            NASCAR, healthcare, and real estate. I care about strategy, craft, and the
            small details that make a brand feel considered. Good design should look
            effortless; getting there usually isn&rsquo;t.
          </p>
        </ScrollReveal>

        <p className="label" style={{ margin: "34px 0 4px" }}>
          Where I&rsquo;ve been
        </p>
        {roles.map((role, i) => (
          <ScrollReveal key={role.company} delay={i * 50}>
            <div className="role">
              <span className="role__yr">{role.period}</span>
              <div>
                <div className="role__title">{role.title}</div>
                <div className="role__co">{role.company}</div>
              </div>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 30,
            }}
          >
            <div>
              <p className="label" style={{ marginBottom: 8 }}>
                Recognition
              </p>
              <p style={{ fontSize: 14, color: "var(--ink-70)", lineHeight: 1.7 }}>
                30+ Gold &amp; Silver ADDY Awards
                <br />
                Wiley Student Advertising Winner
              </p>
            </div>
            <div>
              <p className="label" style={{ marginBottom: 8 }}>
                School
              </p>
              <p style={{ fontSize: 14, color: "var(--ink-70)", lineHeight: 1.7 }}>
                {education.degree}
                <br />
                {education.school}, {education.year}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <CTABand />
    </>
  );
}
