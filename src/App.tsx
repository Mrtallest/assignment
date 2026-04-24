import "./App.css";
import heroImage from "./assets/hero.png";
import coinsIcon from "./assets/icons/coins.png";
import checkIcon from "./assets/icons/check.png";
import starIcon from "./assets/icons/star.svg";
import paypalLogo from "./assets/logo-wall/paypal.png";
import mastercardLogo from "./assets/logo-wall/mastercard.png";
import visaLogo from "./assets/logo-wall/visa.png";
import stripeLogo from "./assets/logo-wall/stripe.png";

const partnerLogos = [paypalLogo, mastercardLogo, visaLogo, stripeLogo];

function App() {
  return (
    <main className="page" id="home">
      <section className="hero">
        <div className="hero-text">
          <p className="small">kobodrop bank app</p>
          <h1>Simple banking page.</h1>
          <p>
            This is a simple landing page. You can send money, pay bills and
            track spending from one app.
          </p>

          <div className="buttons">
            <a className="btn-main" href="#feature">
              Open account
            </a>
          </div>
        </div>

        <img src={heroImage} alt="app preview" className="hero-image" />
      </section>

      <section className="section" id="feature">
        <h2>Features</h2>
        <div className="cards">
          <div className="card">
            <img src={coinsIcon} alt="" />
            <h3>Quick transfer</h3>
            <p>Send money in few seconds.</p>
          </div>

          <div className="card">
            <img src={checkIcon} alt="" />
            <h3>Bill payment</h3>
            <p>Pay utility and airtime with one click.</p>
          </div>

          <div className="card">
            <img src={starIcon} alt="" />
            <h3>Spending view</h3>
            <p>See where your money is going.</p>
          </div>
        </div>
      </section>

      <section className="section" id="security">
        <h2>Security</h2>
        <p className="text">
          Pin, biometric and instant alerts are enabled for users.
        </p>
      </section>

      <section className="section" id="partners">
        <h2>Partners</h2>
        <div className="logos">
          {partnerLogos.map((logo, index) => (
            <div className="logo" key={index}>
              <img src={logo} alt="partner logo" />
            </div>
          ))}
        </div>
      </section>

      <footer className="footer" id="download">
        <h3>KoboDrop</h3>
        <p>© 2026 KoboDrop. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
