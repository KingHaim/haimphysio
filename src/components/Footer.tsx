import React from 'react';
import { TranslationKeys } from '../types';

interface FooterProps {
  t: TranslationKeys['footer'];
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-serif font-bold text-white tracking-wider">
            Haim Ganancia PT<span className="text-primary">.</span>
          </span>
        </div>
        <div className="text-gray-500 text-sm">
          {t.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
