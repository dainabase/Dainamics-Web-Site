import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ProblemePointsDouleurProps {
  points: string[];
  conclusionText: string;
}

export const ProblemePointsDouleur = ({ points, conclusionText }: ProblemePointsDouleurProps) => {
  return (
    <section className="py-20 md:py-32 bg-[#050510]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vous vous reconnaissez ?
            </h2>
          </motion.div>

          {/* Liste des points de douleur */}
          <div className="space-y-4 mb-12">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-white/80 text-lg">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-[#0AFF9D] font-medium">
              {conclusionText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemePointsDouleur;
