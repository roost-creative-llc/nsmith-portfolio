import { Link } from "react-router-dom";
import SmartImage from "./SmartImage";

/**
 * Dark "Index" work tile.
 *  .ph  — image block (SmartImage; dark placeholder on error) + metric badge
 *  .tn  — serif project name
 *  .to  — one-line outcome (project.outcome ?? project.result)
 *  .tm  — "{categories join ' · '} — {year}"
 * Links to /portfolio/{slug}.
 */
export default function ProjectCard({ project }) {
  const outcome = project.outcome ?? project.result;
  const meta = `${project.categories.join(" · ")} — ${project.year}`;

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="tile"
      style={{ "--accent": project.accent }}
      aria-label={`${project.name} — open project`}
    >
      <div className="ph">
        <SmartImage
          src={project.thumbnail}
          alt={`${project.name} project`}
          fallback={project.name}
        />
        {project.metric && (
          <span
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              zIndex: 2,
              background: "rgba(20,17,11,.6)",
              color: "#f3ede0",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 15,
              padding: "5px 12px",
              borderRadius: 100,
              border: "1px solid rgba(236,230,217,.16)",
            }}
          >
            {project.metric}
          </span>
        )}
      </div>
      <div className="tn">{project.name}</div>
      <div className="to">{outcome}</div>
      <div className="tm">{meta}</div>
    </Link>
  );
}
