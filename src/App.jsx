import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OfferBanner from "./components/OfferBanner";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <OfferBanner />
      <Products />
      <Gallery />
      <Reviews />
      <About />
      <WhyChoose />
      <CTA />
      <Contact />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;