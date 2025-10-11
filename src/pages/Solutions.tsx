import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { solutions } from '@/data/solutions';
import { iconMapper } from '@/utils/iconMapper';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light">
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
              Nos Solutions
            </h1>
            <p className="text-xl text-dainamics-light/80 max-w-3xl mx-auto">
              Des solutions concrètes pour transformer votre entreprise avec l'IA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = iconMapper[solution.icon as keyof typeof iconMapper];

              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-dainamics-background/50 border-dainamics-primary/20 hover:border-dainamics-primary/50 transition-all duration-300">
                    <CardHeader>
                      {Icon && (
                        <div className="w-12 h-12 rounded-lg bg-dainamics-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-dainamics-primary" />
                        </div>
                      )}
                      <CardTitle className="text-dainamics-light">{solution.title}</CardTitle>
                      <CardDescription className="text-dainamics-light/70">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {solution.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-dainamics-light/80 flex items-start">
                            <span className="text-dainamics-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="ghost"
                        className="w-full text-dainamics-primary hover:text-dainamics-light group"
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
