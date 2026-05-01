import "./integrations.css";
import coinsIcon from "../assets/icons/coins.png";
import frames from "../assets/frames.png";
import klarna from "../assets/logo-wall/klarna.png";
import stripe from "../assets/logo-wall/stripe.png";
import paypal from "../assets/logo-wall/paypal.png";
import bedc from "../assets/logo-wall/bedc.png";
import mastercard from "../assets/logo-wall/mastercard.png";
import mtn from "../assets/logo-wall/mtn.png";
import airtel from "../assets/logo-wall/airtel.png";
import payoneer from "../assets/logo-wall/payoneer.png";
import visa from "../assets/logo-wall/visa.png";
import mobile from "../assets/logo-wall/mobile.png";
import ikeja from "../assets/logo-wall/ikeja.png";
import dstv from "../assets/logo-wall/dstv.png";

export default function Integrations() {
  return (
    <section className="integrations-section" id="resources">
      <div className="info-cards-row">
        <div className="info-card cost-card">
          <div className="cost-icon-circle">
            <img src={coinsIcon} alt="Coins icon" />
          </div>
          <h3>Cost reduction</h3>
          <p>
            Kobodrop reduced payments maintenance and processing fees. No
            hidden fees
          </p>
        </div>

        <div className="info-card exchange-card">
          <h3>Send, recieve and Exchange money</h3>
          <p>
            Transfers, payments all work on Kobodrop. Get your alert message
            immediately after a completed transaction.
          </p>
          <img className="exchange-frame" src={frames} alt="Brand app blocks" />
        </div>
      </div>

      <div className="brands-title">
        <h2>Transact seamlessly with...</h2>
        <p>
          Connect your other accounts to Kobodrop seamlessly. Kobodrop supports
          200+ integrations with other payment platforms like stripe, paypal,
          payoneer and others
        </p>
      </div>

      <div className="logo-wall">
        <img src={klarna} alt="Klarna logo" />
        <img src={stripe} alt="Stripe logo" />
        <img src={paypal} alt="PayPal logo" />
        <img src={bedc} alt="BEDC logo" />
        <img src={mastercard} alt="Mastercard logo" />
        <img src={mtn} alt="MTN logo" />
        <img src={airtel} alt="Airtel logo" />
        <img src={payoneer} alt="Payoneer logo" />
        <img src={visa} alt="Visa logo" />
        <img src={mobile} alt="9mobile logo" />
        <img src={ikeja} alt="Ikeja Electric logo" />
        <img src={dstv} alt="DStv logo" />
      </div>
    </section>
  );
}
