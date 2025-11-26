import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Analyser',
    duration: '30 min',
    description: 'Appel gratuit pour comprendre votre situation et identifier les opportunités.',
    detail: 'Sans engagement'
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Prototyper',
    duration: '1 semaine',
    description: 'On vous montre concrètement ce que la solution peut faire pour vous.',
    detail: 'Démo personnalisée'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Livrer',
    duration: '2-4 semaines',
    description: 'Déploiement, formation de vos équipes et support inclus.',
    detail: 'Garantie satisfaction'
  }
];

export const ProblemeProcessus = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a0a1a] to-[#050510]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comment ça se passe concrètement
          </h2>
          <p className="text-white/60 text-lg">
            3 étapes. Pas de surprise.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line (desktop) */}
            <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[#7B2FFF] via-[#10E4FF] to-[#0AFF9D]" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = ['#7B2FFF', '#10E4FF', '#0AFF9D'];
              const color = colors[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="text-center">
                    {/* Number + Icon */}
                    <div className="relative inline-block mb-6">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto relative z-10 border"
                        style={{
                          backgroundColor: `${color}15`,
                          borderColor: `${color}30`
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color }} />
                      </div>
                      <div
                        className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-20"
                        style={{
                          backgroundColor: color,
                          color: '#050510'
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <div
                      className="text-sm font-medium mb-4 inline-block px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${color}20`,
                        color: color
                      }}
                    >
                      {step.duration}
                    </div>
                    <p className="text-white/60 mb-3">
                      {step.description}
                    </p>
                    <p className="text-white/40 text-sm">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemeProcessus;
