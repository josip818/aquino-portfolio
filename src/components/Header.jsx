
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        JAA<span>_GARAGE</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
    </header>
  );
}

export default Header;
