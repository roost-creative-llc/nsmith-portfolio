import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const LINKS = [
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <>
      <header className="nav">
        <nav className="bar wrap" aria-label="Primary">
          <Link to="/" className="name sf" aria-label="Nick Smith — home">
            Nick Smith
          </Link>

          <span className="links">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                {l.label}
              </NavLink>
            ))}
          </span>

          <button
            ref={toggleRef}
            className={`nav__toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {open && (
        <div
          className="nav__overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="nav__overlay-top wrap">
            <Link to="/" className="name sf" onClick={close}>
              Nick Smith
            </Link>
            <button
              ref={closeRef}
              className="nav__close"
              aria-label="Close menu"
              onClick={close}
            >
              ✕
            </button>
          </div>
          <nav className="nav__overlay-links wrap" aria-label="Mobile">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={close}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="mailto:nsmithadve@gmail.com"
              className="nav__overlay-mail"
              onClick={close}
            >
              nsmithadve@gmail.com
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
