import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";
import SmartImage from "../components/SmartImage";
import { projects, filters, filterCount, getProject } from "../data/projects";

const GRIZZLY_SLUG = "grizzly-smokeless-tobacco";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  // Grizzly anchors the index as the hero feature; the rest fall into the grid.
  const grizzly = getProject(GRIZZLY_SLUG);
  const grizzlyVisible = visible.some((p) => p.slug === GRIZZLY_SLUG);
  const rest = visible.filter((p) => p.slug !== GRIZZLY_SLUG);

  return (
    <>
      {/* head */}
      <section className="wrap">
        <div style={{ padding: "120px 0 64px" }}>
          <p className="kick">Everything</p>
          <h1 className="sf hero-h" style={{ fontWeight: 500, margin: "18px 0 0" }}>
            My work.
          </h1>
          <p className="sub" style={{ margin: "24px 0 0" }}>
            Branding, packaging, web, and campaigns. Eight brands, four industries.
          </p>

          <div className="filters" style={{ margin: "48px 0 0" }}>
            {filters.map((label) => (
              <button
                key={label}
                type="button"
                className={`chip ${active === label ? "active" : ""}`}
                aria-pressed={active === label}
                onClick={() => setActive(label)}
              >
                {`${label} (${filterCount(label)})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* the index */}
      {grizzlyVisible && grizzly && (
        <section className="wrap">
          <ScrollReveal>
            <Link
              to={`/portfolio/${grizzly.slug}`}
              className="feature"
              style={{ display: "block", margin: "24px 0 0", "--accent": grizzly.accent }}
              aria-label={`${grizzly.name} — open project`}
            >
              <SmartImage
                src={grizzly.thumbnail}
                alt={`${grizzly.name} project`}
                fallback={grizzly.name}
                eager
              />
              {grizzly.metric && <span className="badge">{grizzly.metric}</span>}
            </Link>
          </ScrollReveal>
          <div className="cap" style={{ margin: "28px 0 96px" }}>
            <span className="nm">{grizzly.name}</span>
            <span className="ou">{grizzly.outcome ?? grizzly.result}</span>
            <Link to={`/portfolio/${grizzly.slug}`} className="link">
              View project →
            </Link>
          </div>
        </section>
      )}

      <section className="wrap">
        {rest.length > 0 && (
          <div className="grid3" style={{ margin: "0 0 96px" }}>
            {rest.map((p, i) => (
              <ScrollReveal key={p.slug} delay={(i % 3) * 60}>
                <ProjectCard project={p} />
              </ScrollReveal>
            ))}
          </div>
        )}

        {visible.length === 0 && (
          <p
            className="sub"
            style={{ textAlign: "center", margin: "0 auto 96px", maxWidth: "40ch" }}
          >
            Nothing here yet — try another filter.
          </p>
        )}
      </section>

      {/* typographic close */}
      <section className="wrap">
        <div className="close" style={{ padding: "80px 0" }}>
          <span className="ln">
            Got a brand that&rsquo;s ready for what&rsquo;s next? Let&rsquo;s get into it.
          </span>
          <div style={{ marginTop: 32 }}>
            <Link to="/contact" className="link">
              Let&rsquo;s talk →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
