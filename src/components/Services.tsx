import React from 'react';
import { TranslationKeys } from '../types';
import { Activity, Zap, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  t: TranslationKeys['services'];
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const services = [
    {
      id: 'rehab',
      icon: HeartPulse,
      title: t.rehab.title,
      description: t.rehab.description,
      image: '/images/service-rehab.png',
    },
    {
      id: 'manual',
      icon: Activity,
      title: t.manual.title,
      description: t.manual.description,
      image: '/images/service-manual.png',
    },
    {
      id: 'performance',
      icon: Zap,
      title: t.performance.title,
      description: t.performance.description,
      image: '/images/service-performance.png',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            {t.title}
            <div className="h-1 w-20 bg-primary absolute -bottom-4 left-1/2 transform -translate-x-1/2"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-surface rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 group shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                 <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                 <div className="absolute bottom-4 right-4 bg-primary/90 p-3 rounded-full backdrop-blur-sm">
                    <service.icon className="w-6 h-6 text-black" />
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
