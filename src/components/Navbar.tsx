import { useState } from "react";
import logo from "../assets/logos/kobodrop_logo.svg";
import "./navbar.css";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav-box">
        <a className="nav-logo" href="#home" onClick={() => setOpenMenu(false)}>
          <img src={logo} alt="kobodrop logo" />
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="toggle menu"
        >
          {openMenu ? "Close" : "Menu"}
        </button>

        <div className={openMenu ? "nav-links show-links" : "nav-links"}>
          <a href="#home" onClick={() => setOpenMenu(false)}>
            Home
          </a>
          <a href="#feature" onClick={() => setOpenMenu(false)}>
            Features
          </a>
          <a href="#security" onClick={() => setOpenMenu(false)}>
            Security
          </a>
          <a href="#partners" onClick={() => setOpenMenu(false)}>
            Partners
          </a>
          <a className="join-link" href="#download" onClick={() => setOpenMenu(false)}>
            Open account
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
