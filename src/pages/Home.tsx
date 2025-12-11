import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TranslationKeys, Language } from "../types";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Services from "../components/Services";
import Contact from "../components/Contact";

interface HomeProps {
  t: {
    hero: TranslationKeys['hero'];
    experience: TranslationKeys['experience'];
    services: TranslationKeys['services'];
    contact: TranslationKeys['contact'];
  };
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ t }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero t={t.hero} />
      <SocialProof t={t.experience} />
      <Services t={t.services} />
      <Contact t={t.contact} />
    </>
  );
};

export default Home;
