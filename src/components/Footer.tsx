import "./footer.css";
import logoBright from "../assets/logos/kobodrop_logo_bright.png";
import appStoreIcon from "../assets/logos/app_store.svg";
import googlePlayBright from "../assets/logos/google_play_bright.svg";
import twitter from "../assets/logos/icons8-twitterx.svg";
import linkedIn from "../assets/logos/icons8-linkedin.svg";
import facebook from "../assets/logos/icons8-facebook.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logoBright} alt="Kobodrop" />
            <p>Start spending the smart way</p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <a href="#">Overview</a>
            <a href="#">Features</a>
            <a href="#">Solutions</a>
            <a href="#">Contact</a>
            <a href="#">Releases</a>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Newsletter</a>
            <a href="#">Events</a>
            <a href="#">Help centre</a>
            <a href="#">Support</a>
          </div>

          <div className="footer-column footer-app">
            <h4>Get the app</h4>
            <a href="#" className="footer-app-badge">
              <img src={appStoreIcon} alt="App Store icon" />
              <div>
                <p className="footer-badge-small">Download on the</p>
                <p className="footer-badge-big">App Store</p>
              </div>
            </a>

            <a href="#" className="footer-app-badge">
              <img src={googlePlayBright} alt="Google Play icon" />
              <div>
                <p className="footer-badge-small">GET IT ON</p>
                <p className="footer-badge-big">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom">
          <p>&copy; 2023 Kobodrop. All rights reserved.</p>

          <div className="social-links">
            <a href="#" aria-label="Twitter X">
              <img src={twitter} alt="Twitter X" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
