import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import AboutHero from "../../components/about/AboutHero";
import MissionVision from "../../components/about/MissionVision";
import HeroStats from "../../components/home/HeroStats";
import WhyChooseUs from "../../components/about/WhyChooseUs";
import OurTeam from "../../components/about/OurTeam";
import CoreValues from "../../components/about/CoreValues";
import AboutCTA from "../../components/about/AboutCTA";

function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <MissionVision />

      <HeroStats />

      <WhyChooseUs />

      <OurTeam />

      <CoreValues />

      <AboutCTA />

      <Footer />
    </>
  );
}

export default About;