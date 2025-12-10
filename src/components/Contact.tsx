import React from 'react';
import { TranslationKeys } from '../types';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
  t: TranslationKeys['contact'];
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12">
              {t.title}
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{t.location}</h3>
                  <p className="text-gray-400">{t.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{t.phone}</h3>
                  <p className="text-gray-400">+34 669 933 534</p>
                  <p className="text-sm text-green-400">(WhatsApp Preferred)</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{t.hours}</h3>
                  <p className="text-gray-400">{t.weekdays}</p>
                  <p className="text-gray-400">{t.saturday}</p>
                </div>
              </div>
            </div>
          </motion.div>

            {/* Form / CTA Side */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-background p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

             <h3 className="text-2xl font-bold text-white mb-4">{t.form.title}</h3>
             <p className="text-gray-400 mb-8">{t.form.description}</p>
             
             <button
               onClick={() => window.open('https://calendly.com/haimphysio', '_blank')}
               className="w-full bg-primary text-black font-bold py-4 px-6 rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center space-x-3 group"
             >
               <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
               <span>{t.form.button}</span>
             </button>
             
             <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-sm text-gray-500">
                    Prefer to speak? WhatsApp us at <span className="text-white">+34 669 933 534</span>
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
