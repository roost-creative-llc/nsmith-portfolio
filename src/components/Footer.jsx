import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="footer__word">
          nick smith<span>.</span>
        </Link>
        <nav className="footer__nav" aria-label="Footer">
          <Link to="/portfolio">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="mailto:nsmithadve@gmail.com">Email</a>
        </nav>
        <span className="footer__meta">Made in Memphis · © 2025</span>
      </div>
    </footer>
  );
}
