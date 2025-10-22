import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light">
      <EnhancedGridBackground />
      <Navigation />

      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Contactez-nous
            </h1>
            <p className="text-xl text-dainamics-light/80 max-w-3xl mx-auto">
              Discutons de votre projet de transformation digitale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-dainamics-background/50 border-dainamics-primary/20">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet</label>
                      <Input
                        type="text"
                        placeholder="Votre nom"
                        className="bg-dainamics-background/50 border-dainamics-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="votre@email.com"
                        className="bg-dainamics-background/50 border-dainamics-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Entreprise</label>
                      <Input
                        type="text"
                        placeholder="Nom de votre entreprise"
                        className="bg-dainamics-background/50 border-dainamics-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        placeholder="Décrivez votre projet..."
                        rows={5}
                        className="bg-dainamics-background/50 border-dainamics-primary/20"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-dainamics-cta hover:bg-dainamics-cta/90 text-white"
                    >
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-dainamics-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-dainamics-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-dainamics-light/70">contact@dainamics.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-dainamics-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-dainamics-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <p className="text-dainamics-light/70">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-dainamics-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-dainamics-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-dainamics-light/70">
                        Paris, France
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-dainamics-primary/5 border-dainamics-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Horaires d'ouverture</h3>
                  <div className="space-y-1 text-sm text-dainamics-light/70">
                    <p>Lundi - Vendredi: 9h00 - 18h00</p>
                    <p>Weekend: Fermé</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
