import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p className="kick">Error 404</p>
          <div
            className="sf"
            style={{
              fontSize: "clamp(90px, 16vw, 200px)",
              fontWeight: 500,
              color: "var(--ac)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              margin: "24px 0 32px",
            }}
          >
            404
          </div>
          <h1
            className="sf"
            style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 500, margin: 0 }}
          >
            This page wandered off.
          </h1>
          <p className="sub" style={{ marginTop: 16, marginBottom: 40 }}>
            Nothing here — but the work is.
          </p>
          <Link to="/portfolio" className="btn">
            Back to the work →
          </Link>
        </div>
      </div>
    </section>
  );
}
