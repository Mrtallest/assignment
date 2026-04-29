import "./hero.css";
import phone from "../assets/mockup.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Start spending the smart way</h1>
        <p>Take control of your finances anytime, anywhere.</p>

        <div className="buttons">
          <button>App Store</button>
          <button>Google Play</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={phone} alt="phone" />
      </div>
    </section>
  );
}
