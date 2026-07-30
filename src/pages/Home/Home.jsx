import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/home/Hero";
import FeaturedJobs from "../../components/home/FeaturedJobs";
import Companies from "../Companies/Companies";
import Testimonials from "../../components/home/Testimonials";
import CTASection from "../../components/home/CTASection";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedJobs />

      <Companies />

      <Testimonials />

      <CTASection />

      <Footer />
    </>
  );
}

export default Home;