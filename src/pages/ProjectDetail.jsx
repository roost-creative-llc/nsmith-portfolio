import { useParams, Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";
import CTABand from "../components/CTABand";
import NotFound from "./NotFound";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const reduce = useReducedMotion();
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const images = project.images || [];
  const videos = project.videos || [];

  // Cover = flagship reel (first video) when the project has motion, else a
  // 16:9 SmartImage. The reel/feature wrappers carry the per-project accent wash.
  const flagship = videos[0];
  // Remaining videos populate the motion grid (flagship already lives in the cover).
  const motionVideos = videos.slice(1);

  return (
    <div className="detail-page" style={{ "--accent": project.accent }}>
      {/* ---- HERO ---- */}
      <section className="container" style={{ paddingTop: "var(--space-6)" }}>
        <ScrollReveal>
          <p className="kick">
            {project.role} · {project.year}
          </p>
          <h1 className="sf hero-h" style={{ marginTop: 16 }}>
            {project.name}
          </h1>
          {project.result && (
            <p className="sub" style={{ marginTop: 18, maxWidth: "54ch" }}>
              {project.result}
            </p>
          )}
        </ScrollReveal>

        {/* ---- COVER ---- */}
        {flagship ? (
          <>
            <ScrollReveal className="reel" delay={80} style={{ marginTop: 48 }}>
              <span className="tag">
                <span className="dot" />
                Featured film
              </span>
              <video
                src={flagship.src}
                poster={flagship.poster}
                controls={!flagship.loop || reduce}
                autoPlay={flagship.loop && !reduce}
                loop={flagship.loop && !reduce}
                muted={flagship.loop}
                playsInline
                preload={flagship.loop && !reduce ? "auto" : "metadata"}
                aria-label={`${project.name} — featured film`}
              />
            </ScrollReveal>
            <div className="cap">
              <div>
                <span className="nm">{project.name}</span>
                {project.result && <p className="ou">{project.result}</p>}
              </div>
              {project.liveUrl && (
                <a
                  className="link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.liveLabel || "Visit ↗"}
                </a>
              )}
            </div>
          </>
        ) : (
          <ScrollReveal
            delay={80}
            style={{ marginTop: 48 }}
          >
            <div className="feature">
              <SmartImage
                src={project.thumbnail}
                alt={`${project.name} cover`}
                fallback={project.name}
                eager
              />
            </div>
          </ScrollReveal>
        )}
      </section>

      {/* ---- INTRO: brief + metacard ---- */}
      <section className="container" style={{ paddingTop: "var(--space-block)" }}>
        <div
          className="grid2 detail-intro"
          style={{ gridTemplateColumns: "1.5fr 1fr", alignItems: "start" }}
        >
          <ScrollReveal>
            <div className="lab">The brief</div>
            <p
              className="sf"
              style={{
                marginTop: 18,
                fontWeight: 500,
                fontSize: 26,
                lineHeight: 1.35,
                maxWidth: "30ch",
              }}
            >
              {project.brief}
            </p>
            <p
              style={{
                marginTop: 22,
                color: "var(--muted)",
                maxWidth: "60ch",
                lineHeight: 1.7,
              }}
            >
              {project.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <aside className="metacard">
              <div className="mrow">
                <span className="k">Client</span>
                <span>{project.name}</span>
              </div>
              <div className="mrow">
                <span className="k">Year</span>
                <span>{project.year}</span>
              </div>
              <div className="mrow">
                <span className="k">Role</span>
                <span>{project.role}</span>
              </div>
              <div className="mrow">
                <span className="k">Disciplines</span>
                <span style={{ textAlign: "right" }}>{project.tags.join(", ")}</span>
              </div>
              <div className="mrow">
                <span className="k">Result</span>
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  {project.metric}
                </span>
              </div>
              {project.liveUrl && (
                <a
                  className="link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-block", marginTop: 18 }}
                >
                  {project.liveLabel || "Visit ↗"}
                </a>
              )}
              {project.guidelinesUrl && (
                <a
                  className="link"
                  href={project.guidelinesUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-block", marginTop: 14 }}
                >
                  Brand guidelines ↗
                </a>
              )}
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* ---- CHALLENGE / APPROACH / OUTCOME ---- */}
      {project.cao && (
        <section
          className="container"
          style={{ paddingTop: "var(--space-block)" }}
        >
          <ScrollReveal className="cao">
            <h2>The challenge</h2>
            <p>{project.cao.challenge}</p>
          </ScrollReveal>
          <ScrollReveal className="cao" delay={60} style={{ marginTop: 40 }}>
            <h2>The approach</h2>
            <p>{project.cao.approach}</p>
          </ScrollReveal>
          <ScrollReveal className="cao" delay={120} style={{ marginTop: 40 }}>
            <h2>The outcome</h2>
            <p>{project.cao.outcome}</p>
          </ScrollReveal>
        </section>
      )}

      {/* ---- MOTION & CAMPAIGN WORK ---- */}
      {motionVideos.length > 0 && (
        <section
          className="container"
          style={{ paddingTop: "var(--space-block)" }}
        >
          <ScrollReveal>
            <div className="lab">
              {motionVideos.length > 1 ? "Motion & campaign work" : "Motion"}
            </div>
          </ScrollReveal>
          <div className="grid2" style={{ marginTop: 28 }}>
            {motionVideos.map((v, i) => (
              <ScrollReveal key={v.src} delay={(i % 2) * 60}>
                <div className="feature" style={{ aspectRatio: v.ar || "16 / 9" }}>
                  <video
                    src={v.src}
                    poster={v.poster}
                    controls={!v.loop || reduce}
                    autoPlay={v.loop && !reduce}
                    loop={v.loop && !reduce}
                    muted={v.loop}
                    playsInline
                    preload={v.loop && !reduce ? "auto" : "metadata"}
                    aria-label={`${v.title || project.name} — motion`}
                  />
                </div>
                {v.title && (
                  <div className="galcap" style={{ marginTop: 12 }}>
                    {v.title}
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ---- GALLERY ---- */}
      {images.length > 0 && (
        <section
          className="container"
          style={{ paddingTop: "var(--space-block)" }}
        >
          <div className="gal">
            {images.map((src, i) => (
              <ScrollReveal
                key={src}
                className="galitem"
                delay={(i % 2) * 60}
              >
                <div className="gph">
                  <SmartImage
                    src={src}
                    alt={`${project.name} — image ${i + 1}`}
                    fallback={project.name}
                  />
                </div>
                <div className="galcap">
                  <em>
                    {project.name} — {String(i + 1).padStart(2, "0")}
                  </em>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ---- PREV / NEXT ---- */}
      <section className="container" style={{ paddingTop: "var(--space-block)" }}>
        <div className="prevnext">
          <Link
            to={`/portfolio/${prev.slug}`}
            className="pncard"
            style={{ "--accent": prev.accent }}
            aria-label={`Previous project: ${prev.name}`}
          >
            <span className="pl">Prev</span>
            <div className="pn">{prev.name}</div>
          </Link>
          <Link
            to={`/portfolio/${next.slug}`}
            className="pncard"
            style={{ "--accent": next.accent, textAlign: "right" }}
            aria-label={`Next project: ${next.name}`}
          >
            <span className="pl">Next</span>
            <div className="pn">{next.name}</div>
          </Link>
        </div>
      </section>

      {/* ---- TYPOGRAPHIC CLOSE ---- */}
      <section className="container" style={{ paddingTop: "var(--space-block)" }}>
        <div className="close">
          <span className="ln">
            Got a brand that's ready for what's next? Let's get into it.
          </span>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
