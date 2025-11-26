import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ArrowRight } from 'lucide-react';

interface ProblemeCTAProps {
  title: string;
  subtitle: string;
  accentColor: string;
}

export const ProblemeCTA = ({ title, subtitle, accentColor }: ProblemeCTAProps) => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#050510] to-[#0a0a1a] relative overflow-hidden">
      {/* Background effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${accentColor}30 0%, transparent 60%)`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/contact"
              className="group flex items-center gap-3 bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#FF5A00]/25"
            >
              <Calendar className="w-5 h-5" />
              Réserver mon appel gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Phone alternative */}
          <div className="flex items-center justify-center gap-2 text-white/50">
            <Phone className="w-4 h-4" />
            <span>Ou appelez-nous : </span>
            <a
              href="tel:+41XXXXXXXXX"
              className="text-white hover:text-[#10E4FF] transition-colors"
            >
              +41 XX XXX XX XX
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mt-12 text-white/40 text-sm">
            <span>✓ Gratuit</span>
            <span>✓ Sans engagement</span>
            <span>✓ 30 minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemeCTA;
