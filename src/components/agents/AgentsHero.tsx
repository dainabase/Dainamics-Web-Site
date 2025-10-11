
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrainAnimation2D from '@/components/BrainAnimation2D';

const AgentsHero = () => {
  return (
    <section className="relative min-h-[85vh] py-32 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dainamics-background to-dainamics-background/90 z-0"></div>
      
      {/* Neural brain animation */}
      <BrainAnimation2D />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-0 z-10">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
          >
            <span className="text-gradient-primary glow">Superhuman AI Agents:</span>
            <br />
            <span className="text-gradient">Beyond Human Limitations</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-dainamics-light/80 text-xl md:text-2xl mb-8 max-w-3xl leading-tight"
          >
            Our elite force of autonomous agents transform business operations into unbeatable competitive advantages
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg"
              className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow font-semibold text-base md:text-lg px-8 power-pulse"
            >
              DEPLOY YOUR SUPERHUMAN WORKFORCE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-dainamics-primary text-dainamics-primary hover:bg-dainamics-primary/10 font-semibold text-base md:text-lg px-8"
            >
              SCHEDULE DEMO
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentsHero;
