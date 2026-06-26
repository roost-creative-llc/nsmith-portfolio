import ScrollReveal from "../components/ScrollReveal";

// TODO: replace Formspree form ID before launch.
const EMAIL = "helloroostcreative@gmail.com";
const FORMSPREE_ACTION = "https://formspree.io/f/your-form-id";

export default function Contact() {
  return (
    <>
      <section className="container page-head">
        <p className="label" style={{ marginBottom: 12 }}>
          Say hi
        </p>
        <h1 className="page-head__title">
          Let&rsquo;s work <span className="accent">together.</span>
        </h1>
        <p className="page-head__sub">
          A rebrand, a campaign, or something you haven&rsquo;t named yet — tell me about
          it and I&rsquo;ll get back to you quickly.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: "var(--space-10)" }}>
        <div className="contact-layout">
          <ScrollReveal>
            <div>
              <div className="cdetail">
                <div className="cdetail__k">Email</div>
                <a className="cdetail__v accent" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>
              <div className="cdetail">
                <div className="cdetail__k">Phone</div>
                <a className="cdetail__v" href="tel:+17064746628">
                  +1 (706) 474-6628
                </a>
              </div>
              <div className="cdetail">
                <div className="cdetail__k">Based in</div>
                <span className="cdetail__v">Memphis, Tennessee</span>
              </div>
              <div className="cdetail">
                <div className="cdetail__k">Reply time</div>
                <span className="cdetail__v">Usually within a day</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <form className="form" action={FORMSPREE_ACTION} method="POST">
              <div className="form__grid">
                <div className="form__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                </div>
                <div className="form__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div className="form__field">
                <label htmlFor="project">The project</label>
                <textarea id="project" name="project" rows={4} placeholder="Tell me about the brand…" required />
              </div>
              <button type="submit" className="pill pill--accent" style={{ alignSelf: "flex-start" }}>
                Send it →
              </button>
              <p className="form__note">⚑ Wire this form to Formspree before launch</p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
