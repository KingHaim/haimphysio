import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Language } from "./types";
import { translations } from "./data/translations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";

function App() {
  const [lang, setLang] = useState<Language>("es");
  const t = translations[lang];

  return (
    <Router>
      <div className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-black">
        <Navbar t={t.nav} lang={lang} setLang={setLang} />
        
        <Routes>
            <Route path="/" element={<Home t={t} lang={lang} />} />
            <Route path="/blog" element={<BlogIndex t={t} lang={lang} />} />
            <Route path="/blog/:slug" element={<BlogPost lang={lang} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer t={t.footer} />
        <ChatWidget lang={lang} />
      </div>
    </Router>
  );
}

export default App;
