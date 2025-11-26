import { motion } from 'framer-motion';
import { Check, Clock, TrendingUp, Shield } from 'lucide-react';

interface ProblemeInvestissementProps {
  title: string;
  priceRange: string;
  duration: string;
  roi: string;
  includes: string[];
  economie: string;
  accentColor: string;
}

export const ProblemeInvestissement = ({
  title,
  priceRange,
  duration,
  roi,
  includes,
  economie,
  accentColor
}: ProblemeInvestissementProps) => {
  return (
    <section className="py-20 md:py-32 bg-[#050510]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investissement typique
            </h2>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div
              className="p-8 text-center"
              style={{
                background: `linear-gradient(135deg, ${accentColor}10 0%, transparent 100%)`
              }}
            >
              <h3 className="text-xl text-white/80 mb-4">{title}</h3>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {priceRange}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 border-t border-b border-white/10">
              <div className="p-6 text-center border-r border-white/10">
                <Clock className="w-5 h-5 mx-auto mb-2 text-white/40" />
                <div className="text-white font-medium">{duration}</div>
                <div className="text-white/40 text-sm">Livraison</div>
              </div>
              <div className="p-6 text-center border-r border-white/10">
                <TrendingUp className="w-5 h-5 mx-auto mb-2 text-white/40" />
                <div className="text-white font-medium">{roi}</div>
                <div className="text-white/40 text-sm">ROI typique</div>
              </div>
              <div className="p-6 text-center">
                <Shield className="w-5 h-5 mx-auto mb-2 text-white/40" />
                <div className="text-white font-medium">Garanti</div>
                <div className="text-white/40 text-sm">Satisfaction</div>
              </div>
            </div>

            {/* Includes */}
            <div className="p-8">
              <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                Ce qui est inclus
              </h4>
              <div className="space-y-3">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: accentColor }} />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Économie */}
            <div className="p-6 bg-[#0AFF9D]/10 border-t border-[#0AFF9D]/20">
              <div className="text-center">
                <div className="text-[#0AFF9D] font-medium mb-1">Économie estimée</div>
                <div className="text-white text-lg">{economie}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemeInvestissement;
