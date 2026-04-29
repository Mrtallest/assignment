import "./features.css";

export default function Features() {
  return (
    <section className="features">
      <h2>Make every penny count</h2>

      <div className="cards">
        <div className="card">
          <h3>Easy Payments</h3>
          <p>Pay bills easily anytime</p>
        </div>

        <div className="card">
          <h3>Secure</h3>
          <p>Bank level security</p>
        </div>

        <div className="card">
          <h3>Fast Transfers</h3>
          <p>Send money instantly</p>
        </div>
      </div>
    </section>
  );
}
