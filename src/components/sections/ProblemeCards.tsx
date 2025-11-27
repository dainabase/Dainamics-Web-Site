import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, MessageSquare, FileText, BarChart3, Cog, LayoutGrid, Users, Smartphone, ArrowRight, LucideIcon } from 'lucide-react';

interface ProblemeCard {
  icon: LucideIcon;
  title: string;
  painPoint: string;
  link: string;
  color: string;
}

const problemes: ProblemeCard[] = [
  {
    icon: Briefcase,
    title: "Facturation Manuelle",
    painPoint: "12h/mois perdues",
    link: "/automatiser-facturation",
    color: "#7B2FFF"
  },
  {
    icon: MessageSquare,
    title: "Support Client Saturé",
    painPoint: "50 emails/jour répétitifs",
    link: "/reduire-charge-support",
    color: "#10E4FF"
  },
  {
    icon: FileText,
    title: "Documents à Traiter",
    painPoint: "200 bons/mois à saisir",
    link: "/traiter-documents-automatiquement",
    color: "#0AFF9D"
  },
  {
    icon: BarChart3,
    title: "Stocks Imprévisibles",
    painPoint: "40K€/an en stock dormant",
    link: "/optimiser-stocks-predictions",
    color: "#7B2FFF"
  },
  {
    icon: Cog,
    title: "Processus Manuels",
    painPoint: "Erreurs répétées",
    link: "/digitaliser-processus-metier",
    color: "#10E4FF"
  },
  {
    icon: LayoutGrid,
    title: "Excel Ne Suffit Plus",
    painPoint: "10 fichiers qui ne se parlent pas",
    link: "/solutions/dashboards",
    color: "#FF5A00"
  },
  {
    icon: Users,
    title: "Clients Frustrés",
    painPoint: "Ils appellent pour des infos basiques",
    link: "/solutions/portails-clients",
    color: "#FF5A00"
  },
  {
    icon: Smartphone,
    title: "Équipe Déconnectée",
    painPoint: "Pas d'accès mobile, tout sur papier",
    link: "/solutions/applications-mobiles",
    color: "#FF5A00"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const ProblemeCards = () => {
  return (
    <section className="probleme-cards-section relative py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Titre */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            Quel défi freine votre croissance ?
          </h2>
          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Cliquez sur votre défi principal. On vous montre comment le résoudre.
          </p>
        </div>

        {/* Grid des cards - Première ligne : 4 cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problemes.slice(0, 4).map((probleme, index) => (
            <ProblemeCardItem key={index} probleme={probleme} />
          ))}
        </motion.div>

        {/* Deuxième ligne : 4 cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problemes.slice(4, 8).map((probleme, index) => (
            <ProblemeCardItem key={index + 4} probleme={probleme} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProblemeCardItem = ({ probleme }: { probleme: ProblemeCard }) => {
  const Icon = probleme.icon;

  return (
    <motion.div variants={cardVariants}>
      <Link
        to={probleme.link}
        className="block group h-full"
      >
        <div className="
          h-full
          bg-white/[0.03]
          border border-white/10
          rounded-2xl
          p-6 sm:p-8
          transition-all
          duration-300
          hover:bg-white/[0.06]
          hover:border-[#7B2FFF]/40
          hover:-translate-y-2
          hover:shadow-2xl
          hover:shadow-[#7B2FFF]/20
        ">
          {/* Icône */}
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${probleme.color}15` }}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: probleme.color }} />
          </div>

          {/* Titre */}
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            {probleme.title}
          </h3>

          {/* Pain Point */}
          <p className="text-white/50 mb-4 sm:mb-6 text-base sm:text-lg">
            "{probleme.painPoint}"
          </p>

          {/* CTA */}
          <div className="flex items-center text-[#7B2FFF] group-hover:text-[#10E4FF] transition-colors font-medium text-sm sm:text-base">
            <span>Résoudre</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProblemeCards;
