import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound">
      <p className="label" style={{ marginBottom: 8 }}>
        Error 404
      </p>
      <h1 className="notfound__code">404</h1>
      <p className="notfound__sub">
        This page doesn&rsquo;t exist — but your next project could. Let&rsquo;s talk.
      </p>
      <Link to="/contact" className="pill pill--accent">
        Get in touch →
      </Link>
    </section>
  );
}
