import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";
import CTABand from "../components/CTABand";
import { projects, filters } from "../data/projects";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    const f = filters.find((x) => x.label === active);
    if (!f || !f.match) return projects;
    return projects.filter((p) => p.tags.some((t) => f.match.includes(t)));
  }, [active]);

  return (
    <>
      <section className="container page-head">
        <p className="label" style={{ marginBottom: 12 }}>
          The whole gallery
        </p>
        <h1 className="page-head__title">
          My work<span className="accent">.</span>
        </h1>
        <p className="page-head__sub">
          Eight brands across four industries — branding, packaging, web, and campaigns.
          Here&rsquo;s a closer look at the work.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: "var(--space-10)" }}>
        <div className="filters" style={{ justifyContent: "center" }}>
          {filters.map((f) => (
            <button
              key={f.label}
              className={`filter-btn ${active === f.label ? "is-active" : ""}`}
              onClick={() => setActive(f.label)}
            >
              {f.label === "All" ? `All (${projects.length})` : f.label}
            </button>
          ))}
        </div>
        <div className="workgrid">
          {visible.map((p, i) => (
            <ScrollReveal key={p.slug} delay={(i % 3) * 60}>
              <ProjectCard project={p} />
            </ScrollReveal>
          ))}
        </div>
        {visible.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--ink-60)", marginTop: 24 }}>
            Nothing here yet — try another filter.
          </p>
        )}
      </section>

      <CTABand />
    </>
  );
}
