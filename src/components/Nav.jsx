import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const LINKS = [
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <Link to="/" className="nav__logo" aria-label="Nick Smith — home">
            nick smith<span>.</span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="nav__cta">
            Say hi
          </Link>

          <button
            className="nav__toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="nav__overlay" role="dialog" aria-modal="true">
          <div className="nav__overlay-top container">
            <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
              nick smith<span>.</span>
            </Link>
            <button className="nav__close" aria-label="Close menu" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <nav className="nav__overlay-links container" aria-label="Mobile">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                {l.label}
              </NavLink>
            ))}
            <a href="mailto:helloroostcreative@gmail.com" className="nav__overlay-mail" onClick={() => setOpen(false)}>
              helloroostcreative@gmail.com
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
