import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <main className="page-content">
        <Hero />
        <Features />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
