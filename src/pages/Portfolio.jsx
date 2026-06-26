import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";
import CTABand from "../components/CTABand";
import { projects, filters, filterCount } from "../data/projects";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
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
          {filters.map((label) => (
            <button
              key={label}
              className={`filter-btn ${active === label ? "is-active" : ""}`}
              onClick={() => setActive(label)}
            >
              {`${label} (${filterCount(label)})`}
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
