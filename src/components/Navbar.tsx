import "./navbar.css";
import logo from "../assets/logos/kobodrop_logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="nav-links">
        <li>Learn</li>
        <li>Resources</li>
        <li>FAQs</li>
      </ul>

      <button className="install-btn">Install Kobodrop</button>
    </nav>
  );
}
