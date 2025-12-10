import React from 'react';
import { TranslationKeys } from '../types';
import { motion } from 'framer-motion';

interface SocialProofProps {
  t: TranslationKeys['experience'];
}

const SocialProof: React.FC<SocialProofProps> = ({ t }) => {
  const images = [
    { src: '/images/haim-dayana.png', caption: 'Dayana Yastremska', alt: 'Haim with Dayana Yastremska' },
    { src: '/images/haim-andy.jpg', caption: 'Andy Zekiri', alt: 'Haim with Andy Zekiri' },
    { src: '/images/haim-roland.jpg', caption: 'Roland Garros', alt: 'Haim at Roland Garros' },
  ];

  return (
    <section id="experience" className="py-24 bg-surface text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
              {t.title}
              <span className="absolute -top-6 -left-6 text-9xl text-white/5 font-serif -z-10">
                01
              </span>
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-3 text-white">{t.wta.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {t.wta.description}
                </p>
              </div>
              <div className="border-l-2 border-white/20 pl-6">
                <h3 className="text-2xl font-bold mb-3 text-white">{t.care.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {t.care.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 translate-y-8">
                <div className="relative group overflow-hidden rounded-lg">
                    <img src={images[0].src} alt={images[0].alt} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="font-bold">{images[0].caption}</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-lg">
                    <img src={images[1].src} alt={images[1].alt} className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="font-bold">{images[1].caption}</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                    <img src={images[2].src} alt={images[2].alt} className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="font-bold">{images[2].caption}</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
