import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Toolkit", "toolkit"],
  ["Education", "education"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" to="/" aria-label="Gao Yiping, home" onClick={closeMenu}>
          <span className="wordmark-symbol" aria-hidden="true">
            <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="" />
          </span>
          <span className="wordmark-name">Gao Yiping</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
          <span className="menu-glyph" aria-hidden="true">{isOpen ? "×" : "≡"}</span>
        </button>

        <nav id="primary-navigation" className={isOpen ? "nav-links is-open" : "nav-links"}>
          {navItems.map(([label, anchor]) => (
            <a key={anchor} href={`/#${anchor}`} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="mailto:yiping247@gmail.com" onClick={closeMenu}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
