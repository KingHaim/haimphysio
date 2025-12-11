import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t.about },
    { id: 'experience', label: t.experience },
    { id: 'blog', label: t.blog, isRoute: true },
    { id: 'services', label: t.services },
    { id: 'contact', label: t.contact },
  ];


  
  // Custom navigation handler to ensure scrolling works
  const handleNavClick = (id: string, isRoute?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isRoute) return;
    
    // If we are on home page, scroll to element
    if (location.pathname === '/') {
       const element = document.getElementById(id);
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
    }
    // If not on home page, Router Link to /#id will handle navigation, but scrolling might need a useEffect hook on Home to check hash.
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <RouterLink to="/" className="text-2xl font-serif font-bold text-white tracking-wider">
          HG<span className="text-primary">.</span>
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <RouterLink
                key={link.id}
                to={link.isRoute ? `/${link.id}` : `/#${link.id}`}
                onClick={() => handleNavClick(link.id, link.isRoute)}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </RouterLink>
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
            <RouterLink
                to="/#contact"
                onClick={() => handleNavClick('contact')}
                className="btn-primary px-6 py-2 bg-primary text-black font-bold text-sm tracking-wider hover:bg-white transition-colors duration-300"
            >
                BOOK NOW
            </RouterLink>
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
                <RouterLink
                  key={link.id}
                  to={link.isRoute ? `/${link.id}` : `/#${link.id}`}
                  onClick={() => handleNavClick(link.id, link.isRoute)}
                  className="text-lg text-gray-300 hover:text-primary"
                >
                  {link.label}
                </RouterLink>
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
