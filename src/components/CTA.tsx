import "./cta.css";
import userImg from "../assets/hero.png";
import appStoreIcon from "../assets/logos/app_store.svg";
import googlePlayIcon from "../assets/logos/google_play.svg";
import backArrow from "../assets/icons/arrow_back.svg";
import forwardArrow from "../assets/icons/arrow_forward.svg";
import starIcon from "../assets/icons/star.svg";

export default function CTA() {
  return (
    <section className="cta-section" id="faqs">
      <div className="cta-left">
        <h2>Join other thousands of people growing with Kobodrop</h2>

        <div className="cta-store-row">
          <a href="#" className="cta-store-badge">
            <img src={appStoreIcon} alt="App Store icon" />
            <div>
              <p className="cta-store-small">Download on the</p>
              <p className="cta-store-big">App Store</p>
            </div>
          </a>

          <a href="#" className="cta-store-badge">
            <img src={googlePlayIcon} alt="Google Play icon" />
            <div>
              <p className="cta-store-small">GET IT ON</p>
              <p className="cta-store-big">Google Play</p>
            </div>
          </a>
        </div>
      </div>

      <div className="cta-right">
        <div className="testimonial-card">
          <img className="testimonial-photo" src={userImg} alt="Customer" />

          <div className="testimonial-overlay">
            <p className="testimonial-quote">
              "Kobodrop has helped me send and receive money with little to no
              complications. It's what everyone needs!!"
            </p>

            <h3 className="testimonial-name">Kemi Ogunnaike</h3>

            <div className="testimonial-bottom">
              <div className="star-row">
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
              </div>
              <p className="testimonial-country">Nigeria</p>

              <div className="arrow-row">
                <button type="button" className="arrow-btn">
                  <img src={backArrow} alt="Previous" />
                </button>
                <button type="button" className="arrow-btn">
                  <img src={forwardArrow} alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
