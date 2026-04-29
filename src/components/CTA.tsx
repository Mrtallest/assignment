import "./cta.css";
import userImg from "../assets/hero.png";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-text">
        <h2>Join millions of users worldwide</h2>

        <div className="cta-buttons">
          <button>App Store</button>
          <button>Google Play</button>
        </div>
      </div>

      <div className="cta-image">
        <img src={userImg} alt="users" />
      </div>
    </section>
  );
}
