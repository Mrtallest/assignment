import "./navbar.css";
import logo from "../assets/logos/kobodrop_logo.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <a className="navbar-logo" href="#">
            <img src={logo} alt="Kobodrop logo" />
          </a>

          <nav className="navbar-links">
            <a href="#learn">Learn</a>
            <a href="#resources">
              Resources <span className="small-arrow">\/</span>
            </a>
            <a href="#faqs">FAQs</a>
          </nav>
        </div>

        <button type="button" className="install-button">
          Install Kobodrop
        </button>
      </div>
    </header>
  );
}
