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
      <div className="container mx-auto px-6 mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">
        <span>Fisioterapeuta a domicilio Marbella</span>
        <span className="text-primary/20">•</span>
        <span>Mobile Physiotherapist Marbella</span>
        <span className="text-primary/20">•</span>
        <span>Home Visit Physiotherapy Marbella</span>
      </div>
    </footer>
  );
};

export default Footer;
