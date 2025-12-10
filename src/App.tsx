import React, { useState } from "react";
import { Language } from "./types";
import { translations } from "./data/translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

function App() {
  const [lang, setLang] = useState<Language>("es");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-black">
      <Navbar t={t.nav} lang={lang} setLang={setLang} />
      <Hero t={t.hero} />
      <SocialProof t={t.experience} />
      <Services t={t.services} />
      <Contact t={t.contact} />
      <Footer t={t.footer} />
      <ChatWidget lang={lang} />
    </div>
  );
}

export default App;
