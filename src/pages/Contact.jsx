import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

const EMAIL = "nsmithadve@gmail.com";
const FORMSPREE_ACTION = "https://formspree.io/f/xrewqlpr";

const rowStyle = {
  padding: "22px 0",
  borderTop: "1px solid var(--line)",
};
const valueStyle = {
  display: "inline-block",
  marginTop: 8,
  fontFamily: "var(--font-display)",
  fontSize: 21,
  letterSpacing: "-0.01em",
};

export default function Contact() {
  // status: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="container" style={{ marginTop: 120, marginBottom: 96 }}>
        <div className="kick">Say hi</div>
        <h1 className="sf hero-h" style={{ margin: "18px 0 24px" }}>
          Let&rsquo;s make something.
        </h1>
        <p className="sub" style={{ maxWidth: "46ch" }}>
          A rebrand, a campaign, or something you haven&rsquo;t named yet — tell me
          about it and I&rsquo;ll get back to you quickly.
        </p>
      </section>

      <section
        className="container grid2 contact-layout"
        style={{
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: 80,
          alignItems: "start",
          marginBottom: 128,
        }}
      >
        <ScrollReveal>
          <div>
            <div style={rowStyle}>
              <div className="lab">Email</div>
              <a className="link" href={`mailto:${EMAIL}`} style={valueStyle}>
                {EMAIL}
              </a>
            </div>
            <div style={rowStyle}>
              <div className="lab">Phone</div>
              <a href="tel:+17064746628" style={valueStyle}>
                +1 (706) 474-6628
              </a>
            </div>
            <div style={rowStyle}>
              <div className="lab">Based</div>
              <span style={valueStyle}>Memphis, TN</span>
            </div>
            <div style={{ ...rowStyle, borderBottom: "1px solid var(--line)" }}>
              <div className="lab">Reply</div>
              <span style={valueStyle}>Within a day</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div>
            {status === "success" ? (
              <div className="success" role="status" aria-live="polite">
                <div className="ck" aria-hidden="true">
                  ✓
                </div>
                <h2 className="sf" style={{ margin: "14px 0 6px" }}>
                  Got it — thanks.
                </h2>
                <p className="sub" style={{ margin: 0 }}>
                  I&rsquo;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 24,
                  }}
                >
                  <div className="fld">
                    <label htmlFor="name">
                      Name <span aria-hidden="true">*</span>
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="name"
                      className="inp"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="email">
                      Email <span aria-hidden="true">*</span>
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="email"
                      className="inp"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="fld" style={{ marginTop: 24 }}>
                  <label htmlFor="project">
                    The project <span aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <textarea
                    id="project"
                    className="inp ta"
                    name="project"
                    required
                    aria-required="true"
                  />
                </div>
                <button
                  className="btn"
                  type="submit"
                  style={{ marginTop: 28 }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send it →"}
                </button>

                {status === "error" && (
                  <p
                    className="sub"
                    style={{ marginTop: 18, fontSize: 15 }}
                    role="alert"
                  >
                    That didn&rsquo;t go through. Try again, or{" "}
                    <a className="link" href={`mailto:${EMAIL}`}>
                      email me directly →
                    </a>
                  </p>
                )}
              </form>
            )}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
