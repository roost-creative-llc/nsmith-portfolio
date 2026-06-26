import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

const REEL = "/videos/grizzly-smokeless-tobacco/grizzly-smokeless-tobacco-01.mp4";
const POSTER = "/videos/grizzly-smokeless-tobacco/grizzly-smokeless-tobacco-01.jpg";

/**
 * Dark "Index" hero — sophisticated showreel.
 * Locked headline + framed Grizzly reel (no text over the video);
 * caption sits BENEATH the frame.
 */
export default function HeroReel() {
  const reduce = useReducedMotion();
  return (
    <section className="hero-reel section">
      <div className="wrap">
        <span className="kick">Senior Art Director · Memphis</span>
        <h1 className="sf hero-h">
          I make brands look sharp and feel like themselves.
        </h1>
        <p className="sub">
          Branding, packaging, and websites — from craft breweries to NASCAR.
        </p>

        <div className="reel" style={{ marginTop: 48 }}>
          <video
            src={REEL}
            poster={POSTER}
            autoPlay={!reduce}
            loop={!reduce}
            muted
            playsInline
            controls={reduce}
            preload={reduce ? "none" : "auto"}
            aria-label="Grizzly featured showreel"
          />
          <span className="tag">
            <span className="dot" aria-hidden="true" />
            Featured — Grizzly
          </span>
          <span className="runtime">1:48</span>
        </div>

        <div className="cap">
          <div>
            <div className="nm">Grizzly</div>
            <div className="ou">
              Built the social presence from scratch and gave it room to run.
            </div>
          </div>
          <Link to="/portfolio/grizzly-smokeless-tobacco" className="link">
            View project →
          </Link>
        </div>
      </div>
    </section>
  );
}
