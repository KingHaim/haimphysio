import React from 'react';
import { TranslationKeys } from '../types';
import { motion } from 'framer-motion';

interface HeroProps {
  t: TranslationKeys['hero'];
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Haim Ganancia at Wimbledon"
          className="w-full h-full object-cover object-left md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 border border-primary/50 rounded-full text-primary text-sm tracking-widest uppercase mb-6 bg-black/30 backdrop-blur-sm">
            Elite Sports Physiotherapy
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Perform at Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              Peak Potential
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            {t.subtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendly.com/haimphysio', '_blank')}
            className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            {t.cta}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
