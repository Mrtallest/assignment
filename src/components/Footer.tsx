import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h2>Kobodrop</h2>
          <p>Send, receive and manage money easily.</p>
        </div>

        <div className="footer-links">
          <span>Overview</span>
          <span>Features</span>
          <span>Contact</span>
        </div>
      </div>

      <p className="copyright">© 2023 Kobodrop. All rights reserved.</p>
    </footer>
  );
}
