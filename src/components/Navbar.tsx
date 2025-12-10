import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { TranslationKeys, Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  t: TranslationKeys['nav'];
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ t, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.about },
    { href: '#experience', label: t.experience },
    { href: '#blog', label: t.blog },
    { href: '#services', label: t.services },
    { href: '#contact', label: t.contact },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-white tracking-wider">
          HG<span className="text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-2 text-white hover:text-primary transition"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold">{lang.toUpperCase()}</span>
            </button>
            <a
                href="#contact"
                className="btn-primary px-6 py-2 bg-primary text-black font-bold text-sm tracking-wider hover:bg-white transition-colors duration-300"
            >
                BOOK NOW
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-gray-300 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <button
                    onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                    className="flex items-center space-x-2 text-white hover:text-primary transition"
                >
                    <Globe className="w-5 h-5" />
                    <span>{lang === 'es' ? 'English' : 'Español'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
