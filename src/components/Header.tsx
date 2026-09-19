import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";

export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="header-inner container">
        <a
          className="wordmark"
          href="#top"
          onClick={() => setOpen(false)}
          aria-label="Lucas Cleminson, home"
        >
          <svg
            width="33"
            height="39"
            viewBox="0 0 36 44"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 3v34h28M14 3v24h18M25 3h7v14"
              stroke="currentColor"
              strokeWidth="5"
            />
          </svg>
          <span>
            Lucas
            <br />
            Cleminson
          </span>
        </a>
        <button
          className="menu-toggle"
          ref={button}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span
            className={open ? "menu-glyph open" : "menu-glyph"}
            aria-hidden="true"
          >
            <i />
            <i />
          </span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {[
            ["#work", "Work"],
            ["#skills", "Stack"],
            ["#experience", "Experience"],
            ["#about", "About"],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>{label}</span>
              <Arrow diagonal />
            </a>
          ))}
          <a
            className="nav-cv"
            href={`${import.meta.env.BASE_URL}lucas-cleminson-cv.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            CV <Arrow diagonal />
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk{" "}
          <span>
            <Arrow diagonal />
          </span>
        </a>
      </div>
      <div className="reading-progress" aria-hidden="true" />
    </header>
  );
}
