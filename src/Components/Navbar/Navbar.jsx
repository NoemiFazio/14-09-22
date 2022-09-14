import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

function Navbar() {
  const links = [
    { href: "/", label: "Home", title: "Vai alla home" },
    // { href: "/catalogo", label: "Catalogo" },
  ];

  return (
    <nav className={styles.nav} aria-label="Barra di navigazione">
      <ul>
        <img
          src={logo}
          className={styles.Logo}
          alt="logo"
          aria-label="Logo del sito"
        />
        {links.map(({ href, label, title }) => (
          <li className={styles.li} key={href}>
            <NavLink
              to={href}
              aria-label={title}
              title={title ? title : label}
              style={({ isActive }) => ({
                pointerEvents: isActive ? "none" : "auto",
                opacity: isActive ? 0.4 : 1,
                textDecoration: "none",
                color: "#23216e",
              })}
              className={({ isActive }) =>
                isActive ? "nav nav--active" : "nav"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
