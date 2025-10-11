
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommandCenterHero = () => {
  return (
    <section className="relative min-h-[80vh] py-32 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dainamics-background to-dainamics-background/90 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-0 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
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
            <span className="text-gradient">Command Center:</span>
            <br />
            <span className="text-gradient-primary glow">Your Business Command & Control Headquarters</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-dainamics-light/80 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-tight"
          >
            The unified platform where all your Superhuman AI Agents operate, communicate and optimize business performance
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg"
              className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow font-semibold text-base md:text-lg px-8 power-pulse"
            >
              GET YOUR COMMAND CENTER
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Visualization placeholder - will be implemented later */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <div className="w-full h-full flex items-center justify-center opacity-20">
          <div className="text-white text-xl">
            [Futuristic command center visualization will be implemented here]
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandCenterHero;
