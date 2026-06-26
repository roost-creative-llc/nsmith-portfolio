import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <Link to="/" className="fw sf">
          Nick Smith
        </Link>
        <nav className="fm" aria-label="Footer">
          <Link to="/portfolio">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="mailto:nsmithadve@gmail.com">Email</a>
        </nav>
        <span className="fm">Made in Memphis · © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
