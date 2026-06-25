import { Link } from "react-router-dom";

const RESUME_URL =
  "https://www.nsmithadve.com/s/Nicholas-Smith_Creative-Director-Art-jjlk.pdf";

const REEL = "/videos/grizzly-smokeless-tobacco/grizzly-smokeless-tobacco-01.mp4";
const POSTER = "/videos/grizzly-smokeless-tobacco/grizzly-smokeless-tobacco-01.jpg";

/** Visual showreel hero — the work leads. */
export default function HeroReel() {
  return (
    <section className="hero-reel">
      <div className="container">
        <div className="hero-reel__stage">
          <video
            src={REEL}
            poster={POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <span className="hero-reel__scrim" aria-hidden="true" />

          <Link
            to="/portfolio/grizzly-smokeless-tobacco"
            className="hero-reel__tag"
            aria-label="Featured project: Grizzly"
          >
            Featured · Grizzly →
          </Link>

          <div className="hero-reel__overlay">
            <span className="hx__kick hx__kick--light">
              <span className="hx__dot" aria-hidden="true" />
              Art Director · Memphis · Open to work
            </span>
            <h1 className="hero-reel__title">I make brands impossible to ignore.</h1>
            <p className="hero-reel__sub">
              Branding, packaging, and websites built to stand out — and stay that way.
            </p>
            <div className="hx__cta">
              <Link to="/portfolio" className="pill pill--paper">
                See the work →
              </Link>
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="pill pill--glass">
                Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
