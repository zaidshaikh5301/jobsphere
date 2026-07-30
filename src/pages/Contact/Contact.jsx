import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import AboutCTA from "../../components/about/AboutCTA";

function Contact() {
  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <AboutCTA />

      <Footer />
    </>
  );
}

export default Contact;