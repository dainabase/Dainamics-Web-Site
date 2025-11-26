import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import CursorEffects from '@/components/CursorEffects';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Pour démarrer votre transformation digitale',
    price: 'Sur devis',
    features: [
      'Diagnostic initial gratuit',
      'Accompagnement de base',
      'Support par email',
      '1 projet Quick Win',
      'Documentation complète',
    ],
  },
  {
    name: 'Business',
    description: 'Pour accélérer votre croissance',
    price: 'Sur devis',
    features: [
      'Tout du plan Starter',
      'Accompagnement personnalisé',
      'Support prioritaire',
      'Projets illimités',
      'Formation de vos équipes',
      'Intégrations avancées',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Pour une transformation complète',
    price: 'Sur devis',
    features: [
      'Tout du plan Business',
      'Architecte solution dédié',
      'Support 24/7',
      'Solutions sur mesure',
      'Gestion de projet complète',
      'SLA garantis',
      'Audit de sécurité',
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90 text-dainamics-light">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Tarifs
            </h1>
            <p className="text-xl text-dainamics-light/80 max-w-3xl mx-auto">
              Choisissez l'accompagnement qui correspond à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full ${
                    plan.popular
                      ? 'bg-dainamics-primary/10 border-dainamics-primary'
                      : 'bg-dainamics-background/50 border-dainamics-primary/20'
                  } hover:border-dainamics-primary/50 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-dainamics-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl text-dainamics-light">{plan.name}</CardTitle>
                    <CardDescription className="text-dainamics-light/70">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-dainamics-primary">
                        {plan.price}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-dainamics-primary flex-shrink-0 mt-0.5" />
                          <span className="text-dainamics-light/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-dainamics-cta hover:bg-dainamics-cta/90 text-white'
                          : 'bg-dainamics-primary/10 hover:bg-dainamics-primary/20 text-dainamics-primary'
                      }`}
                    >
                      Contactez-nous
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="bg-dainamics-background/50 border-dainamics-primary/20 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Besoin d'une solution personnalisée ?</h3>
                <p className="text-dainamics-light/70 mb-6">
                  Chaque entreprise est unique. Contactez-nous pour obtenir un devis adapté à vos
                  besoins spécifiques.
                </p>
                <Button className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white">
                  Demander un devis
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
