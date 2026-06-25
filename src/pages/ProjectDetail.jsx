import { useParams, Link } from "react-router-dom";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";
import CTABand from "../components/CTABand";
import NotFound from "./NotFound";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const images = project.images;
  const videos = project.videos || [];

  return (
    <div style={{ "--accent": project.accent }}>
      <section className="container detail-hero">
        <p className="label detail-hero__kicker">
          {project.role} · {project.year}
        </p>
        <h1 className="detail-hero__title">{project.name}</h1>
        <p className="detail-hero__sub">{project.result}</p>
        <ScrollReveal className="detail-cover">
          <SmartImage src={project.thumbnail} alt={`${project.name} cover`} eager />
        </ScrollReveal>
      </section>

      <section className="section">
        <div className="container detail-intro">
          <ScrollReveal>
            <div>
              <p className="label" style={{ marginBottom: 12 }}>
                The brief
              </p>
              <p className="brief__statement">{project.brief}</p>
              <p className="brief__body">{project.description}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <aside className="metacard">
              <div className="mrow">
                <span className="mrow__k">Client</span>
                <span className="mrow__v">{project.name}</span>
              </div>
              <div className="mrow">
                <span className="mrow__k">Year</span>
                <span className="mrow__v">{project.year}</span>
              </div>
              <div className="mrow">
                <span className="mrow__k">Role</span>
                <span className="mrow__v">{project.role}</span>
              </div>
              <div className="mrow">
                <span className="mrow__k">Disciplines</span>
                <span className="mrow__v">{project.tags.join(", ")}</span>
              </div>
              <div className="mrow">
                <span className="mrow__k">Result</span>
                <span className="mrow__v accent" style={{ fontWeight: 700 }}>
                  {project.metric}
                </span>
              </div>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="pill pill--accent">
                  {project.liveLabel || "Visit ↗"}
                </a>
              )}
              {project.guidelinesUrl && (
                <a href={project.guidelinesUrl} target="_blank" rel="noreferrer" className="arrow-link" style={{ marginTop: 14, display: "inline-flex" }}>
                  Brand guidelines ↗
                </a>
              )}
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {videos.length > 0 && (
        <section className="container" style={{ paddingBottom: "var(--space-8)" }}>
          <p className="label" style={{ marginBottom: 18 }}>
            {videos.length > 1 ? "Motion & campaign work" : "Motion"}
          </p>
          <div className={`videogrid${videos.length === 1 ? " videogrid--single" : ""}`}>
            {videos.map((v, i) => (
              <ScrollReveal key={v.src} className="videocard" delay={(i % 2) * 60}>
                <video
                  src={v.src}
                  poster={v.poster}
                  controls={!v.loop}
                  autoPlay={v.loop}
                  loop={v.loop}
                  muted={v.loop}
                  playsInline
                  preload={v.loop ? "auto" : "metadata"}
                  style={{ aspectRatio: v.ar || "16 / 9" }}
                />
                {v.title && <p className="videocard__cap">{v.title}</p>}
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {images.length > 0 && (
        <section className="container" style={{ paddingBottom: "var(--space-8)" }}>
          <div className="gallery">
            {images.map((src, i) => (
              <ScrollReveal key={src} className="gallery__item" delay={(i % 2) * 60}>
                <SmartImage src={src} alt={`${project.name} — image ${i + 1}`} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      <section className="container" style={{ paddingBottom: "var(--space-8)" }}>
        <div className="prevnext">
          <Link
            to={`/portfolio/${prev.slug}`}
            className="prevnext__card prevnext__card--prev"
            style={{ "--accent": prev.accent }}
            aria-label={`Previous project: ${prev.name}`}
          >
            <span className="wcard__arrow" style={{ width: 44, height: 44, background: prev.accent }}>
              ←
            </span>
            <div>
              <p className="label" style={{ marginBottom: 6 }}>
                Previous
              </p>
              <span className="prevnext__name">{prev.name}</span>
            </div>
          </Link>
          <Link
            to={`/portfolio/${next.slug}`}
            className="prevnext__card prevnext__card--next"
            style={{ "--accent": next.accent }}
            aria-label={`Next project: ${next.name}`}
          >
            <div>
              <p className="label" style={{ marginBottom: 6 }}>
                Next up
              </p>
              <span className="prevnext__name">{next.name}</span>
            </div>
            <span className="wcard__arrow" style={{ width: 44, height: 44, background: next.accent }}>
              →
            </span>
          </Link>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
