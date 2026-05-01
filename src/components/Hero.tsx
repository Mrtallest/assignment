import "./hero.css";
import phone from "../assets/mockup.svg";
import woman from "../assets/hero.png";
import appStoreIcon from "../assets/logos/app_store.svg";
import googlePlayIcon from "../assets/logos/google_play.svg";

export default function Hero() {
  return (
    <section className="hero-section" id="learn">
      <div className="hero-text-block">
        <h1>Start spending the smart way</h1>
        <h5>
          Take Control of Your Finances Anytime, Anywhere with Kobodrop.
          Discover the Smart Way to Use Your Money!
        </h5>

        <div className="store-row">
          <a href="#" className="store-badge">
            <img src={appStoreIcon} alt="App Store icon" />
            <div>
              <p className="store-small-text">Download on the</p>
              <p className="store-big-text">App Store</p>
            </div>
          </a>

          <a href="#" className="store-badge">
            <img src={googlePlayIcon} alt="Google Play icon" />
            <div>
              <p className="store-small-text">GET IT ON</p>
              <p className="store-big-text">Google Play</p>
            </div>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img className="hero-woman" src={woman} alt="Happy customer" />
        <img className="hero-phone" src={phone} alt="Kobodrop app screen" />
      </div>
    </section>
  );
}
