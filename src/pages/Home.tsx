import React from "react";
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
