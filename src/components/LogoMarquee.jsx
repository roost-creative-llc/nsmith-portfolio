import { clients } from "../data/clients";

// Only entries with a real logo file.
const withLogos = clients.filter((c) => c.logo);

function Group({ hidden }) {
  return (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {withLogos.map((c) => (
        <img
          className="marquee__logoimg"
          key={c.slug}
          src={c.logo}
          alt={hidden ? "" : c.name}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

/**
 * Slow, seamless client-logo carousel — big, legible logos drifting across a
 * dark band. Two identical groups make the -50% loop seamless; pauses on hover
 * and, for prefers-reduced-motion, falls back to a single static centered wrap.
 */
export default function LogoMarquee() {
  return (
    <section className="logos-marquee" aria-label="Selected clients">
      <p className="lab logos-marquee__label">Clients</p>
      <div className="marquee">
        <div className="marquee__track">
          <Group />
          <Group hidden />
        </div>
      </div>
    </section>
  );
}
