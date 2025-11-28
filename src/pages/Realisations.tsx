import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Users,
  Quote,
  ArrowRight,
  Filter
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import {
  realisations,
  problemFilters,
  industryFilters,
  type Realisation
} from '@/data/realisations';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const globalStats = [
  { value: '50+', label: 'PME automatisées' },
  { value: '99%', label: 'satisfaction' },
  { value: '2-4 sem', label: 'livraison Quick Win' },
  { value: '3-6 mois', label: 'ROI moyen' }
];

const RealisationCard = ({ realisation }: { realisation: Realisation }) => {
  return (
    <motion.div
      layout
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#7B2FFF]/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Building2 className="w-4 h-4" />
            <span>{realisation.industry}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{realisation.country}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Users className="w-4 h-4" />
            <span>{realisation.employees}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white">
          {realisation.title}
        </h3>
      </div>

      <div className="p-6 border-b border-white/10">
        <div className="mb-4">
          <div className="text-xs font-medium text-[#FF5A00] uppercase tracking-wider mb-2">
            Problème
          </div>
          <p className="text-white/70 text-sm">
            {realisation.problem}
          </p>
        </div>
        <div>
          <div className="text-xs font-medium text-[#0AFF9D] uppercase tracking-wider mb-2">
            Solution
          </div>
          <p className="text-white/70 text-sm">
            {realisation.solution}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 border-b border-white/10">
        {realisation.metrics.map((metric, index) => (
          <div
            key={index}
            className="p-4 text-center border-r border-white/10 last:border-r-0"
          >
            <div className="text-2xl font-bold text-[#7B2FFF]">
              {metric.value}
            </div>
            <div className="text-xs text-white/50">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6">
        <div className="flex gap-3">
          <Quote className="w-5 h-5 text-[#10E4FF] flex-shrink-0 mt-1" />
          <div>
            <p className="text-white/70 text-sm italic mb-3">
              "{realisation.quote}"
            </p>
            <div className="text-sm">
              <span className="text-white font-medium">{realisation.quoteName}</span>
              <span className="text-white/50"> — {realisation.quoteRole}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 flex flex-wrap gap-2">
        {realisation.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-xs text-white/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Realisations = () => {
  const [problemFilter, setProblemFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');

  const filteredRealisations = useMemo(() => {
    return realisations.filter(r => {
      const matchesProblem = problemFilter === 'all' || r.tags.includes(problemFilter);
      const matchesIndustry = industryFilter === 'all' || r.industry === industryFilter;
      return matchesProblem && matchesIndustry;
    });
  }, [problemFilter, industryFilter]);

  return (
    <div className="min-h-screen bg-adaptive">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                variants={fadeInUp}
              >
                Ils ont automatisé{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FFF] to-[#10E4FF]">
                  avec nous
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-white/60 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                50+ PME européennes. Des résultats concrets et mesurables.
                Trouvez un cas similaire au vôtre.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 text-white/60 mb-4">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filtrer par</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                    Problème
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {problemFilters.map(filter => (
                      <button
                        key={filter.value}
                        onClick={() => setProblemFilter(filter.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          problemFilter === filter.value
                            ? 'bg-[#7B2FFF] text-white'
                            : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.1]'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                    Industrie
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {industryFilters.map(filter => (
                      <button
                        key={filter.value}
                        onClick={() => setIndustryFilter(filter.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          industryFilter === filter.value
                            ? 'bg-[#10E4FF] text-[#050510]'
                            : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.1]'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredRealisations.map(realisation => (
                  <RealisationCard
                    key={realisation.id}
                    realisation={realisation}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredRealisations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60">
                  Aucune réalisation ne correspond à ces critères.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-white/[0.02]">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {globalStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/50">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Votre PME a un défi similaire ?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                On en discute 30 minutes. On vous montre comment on pourrait vous aider.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5A00] text-white font-semibold rounded-lg hover:bg-[#FF5A00]/90 transition-colors"
              >
                Réserver mon appel gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Realisations;
