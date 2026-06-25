import { clients } from "../data/clients";

// Only entries with a real logo file; split into two rows.
const withLogos = clients.filter((c) => c.logo);
const mid = Math.ceil(withLogos.length / 2);
const rows = [withLogos.slice(0, mid), withLogos.slice(mid)];

function Group({ items, hidden }) {
  return (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((c) => (
        <img
          key={(hidden ? "d-" : "") + c.slug}
          className="marquee__logoimg"
          src={c.logo}
          alt={hidden ? "" : c.name}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

function Row({ items, reverse }) {
  return (
    <div className={`marquee${reverse ? " marquee--rev" : ""}`}>
      <div className="marquee__track">
        {/* two identical groups → seamless -50% loop */}
        <Group items={items} />
        <Group items={items} hidden />
      </div>
    </div>
  );
}

/** Two-row, single-color, unlinked logo marquee. */
export default function LogoMarquee() {
  return (
    <section className="section logos-marquee" aria-label="Selected clients">
      <p className="label logos-marquee__label">Selected clients</p>
      <div className="logos-marquee__rows">
        {rows.map((items, i) => (
          <Row key={i} items={items} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
