import "./features.css";
import appFrame from "../assets/app_frame.png";
import master from "../assets/logo-wall/mastercard.png";
import mtn from "../assets/logo-wall/mtn.png";
import checkIcon from "../assets/icons/check.png";

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-heading">
        <h2>Make every penny count</h2>
        <p>
          Spend smarter, lower your bills, get cashback on everything you buy,
          and unlock credit to grow your business.
        </p>
      </div>

      <div className="features-main-row">
        <div className="feature-card big-card">
          <div>
            <h3>Pay with Kobodrop, quick, simple and easy</h3>
            <p>
              Paying your bills on Kobdrop has never been easier. Whether you
              are paying for electricity or internet, Kobodrop gets it done
              within seconds.
            </p>
          </div>

          <div className="big-card-phone-wrap">
            <img
              className="big-card-phone"
              src={appFrame}
              alt="Pay bills app"
            />

            <div className="mini-card mini-card-one">
              <div className="mini-card-left">
                <img className="mini-img master" src={master} alt="" />
              </div>
              <p>+N100</p>
            </div>

            <div className="mini-card mini-card-two">
              <div className="mini-card-left">
                <img className="mini-img mtn" src={mtn} alt="" />
              </div>
              <p>+N200</p>
            </div>
          </div>
        </div>

        <div className="feature-card security-card">
          <div className="security-icon-circle">
            <img src={checkIcon} alt="Security icon" />
          </div>
          <h3>Bank level security</h3>
          <p>
            Your money is 100% safe and secure on Kobodrop. No hassles, no
            glitches, get access to your money anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
