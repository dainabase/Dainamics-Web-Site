import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Building2, MapPin, Users } from 'lucide-react';

interface Metric {
  value: string;
  label: string;
}

interface CasClientData {
  industry: string;
  country: string;
  employees: string;
  problem: string;
  solution: string;
  metrics: Metric[];
  quote: string;
  quoteName: string;
  quoteRole: string;
}

interface ProblemeCasClientProps {
  casClient: CasClientData;
  accentColor: string;
}

export const ProblemeCasClient = ({ casClient, accentColor }: ProblemeCasClientProps) => {
  return (
    <section className="py-20 md:py-32 bg-[#050510]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ils l'ont fait. Voici leurs résultats.
            </h2>
          </motion.div>

          {/* Case Study Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden"
          >
            {/* Header du cas */}
            <div className="p-6 md:p-8 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-4 text-white/60">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>{casClient.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{casClient.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{casClient.employees}</span>
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6 md:p-8">
              {/* Problème & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/40 mb-3">Problème</h4>
                  <p className="text-white/80 text-lg">{casClient.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/40 mb-3">Solution</h4>
                  <p className="text-white/80 text-lg">{casClient.solution}</p>
                </div>
              </div>

              {/* Métriques */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {casClient.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-white/[0.03] rounded-2xl border border-white/5"
                  >
                    <div
                      className="text-3xl md:text-4xl font-bold mb-2"
                      style={{ color: accentColor }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-white/50 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Citation */}
              <div className="relative p-6 bg-white/[0.02] rounded-2xl">
                <Quote
                  className="absolute top-4 left-4 w-8 h-8 opacity-20"
                  style={{ color: accentColor }}
                />
                <blockquote className="text-white/80 text-lg md:text-xl italic pl-8 mb-4">
                  "{casClient.quote}"
                </blockquote>
                <div className="pl-8">
                  <div className="text-white font-medium">{casClient.quoteName}</div>
                  <div className="text-white/50 text-sm">{casClient.quoteRole}</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 border-t border-white/10 bg-white/[0.02]">
              <Link
                to="/realisations"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                Voir plus de réalisations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemeCasClient;
