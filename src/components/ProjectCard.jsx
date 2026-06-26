import { Link } from "react-router-dom";
import SmartImage from "./SmartImage";

/** Light white work card with image, name, result, and an accent arrow. */
export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="wcard"
      style={{ "--accent": project.accent }}
      aria-label={`${project.name} — open project`}
    >
      <div className="wcard__media">
        <SmartImage src={project.thumbnail} alt={`${project.name} project`} fallback={project.name} />
        <span className="wcard__accent" style={{ background: project.accent }}>
          {project.categories[0]}
        </span>
      </div>
      <div className="wcard__body">
        <div>
          <h3 className="wcard__name">{project.name}</h3>
          <p className="wcard__result">{project.result}</p>
        </div>
        <span className="wcard__arrow" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}
