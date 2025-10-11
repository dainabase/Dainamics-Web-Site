
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Users, Layers, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AgentsSynergy = () => {
  return (
    <section className="py-24 bg-dainamics-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-dainamics-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">The Superhuman Enterprise:</span>
            <br />
            <span className="text-gradient-primary glow">All Agents Working In Harmony</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-dainamics-light/70"
          >
            Deploy individual agents to solve specific challenges or unleash their full potential as an integrated force
          </motion.p>
        </div>
        
        {/* Interactive diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative aspect-square max-w-4xl mx-auto mb-16"
        >
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-dainamics-primary/30 to-dainamics-secondary/10 flex items-center justify-center z-10 border border-dainamics-primary/30 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-dainamics-primary font-bold">Command Center</h3>
              <p className="text-xs text-dainamics-light/70">Coordinating Intelligence</p>
            </div>
          </div>
          
          {/* Connection lines */}
          <div className="absolute inset-0 z-0">
            {/* This will be replaced with SVG lines or Canvas-based connections */}
            <div className="w-full h-full opacity-20 text-center flex items-center justify-center text-dainamics-light/50">
              [Interactive agent connection visualization will be implemented here]
            </div>
          </div>
          
          {/* Agent nodes */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex flex-col items-center">
            <MessageSquare className="h-8 w-8 text-dainamics-primary mb-2" />
            <span className="bg-dainamics-card-alt px-3 py-1 rounded-full text-sm text-dainamics-light">OmniResponse X</span>
          </div>
          
          <div className="absolute top-1/3 right-0 transform translate-x-1/4 flex flex-col items-center">
            <FileText className="h-8 w-8 text-blue-400 mb-2" />
            <span className="bg-dainamics-card-alt px-3 py-1 rounded-full text-sm text-dainamics-light">ContentForge Prime</span>
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 flex flex-col items-center">
            <Users className="h-8 w-8 text-emerald-400 mb-2" />
            <span className="bg-dainamics-card-alt px-3 py-1 rounded-full text-sm text-dainamics-light">AcquisitionNova</span>
          </div>
          
          <div className="absolute top-1/3 left-0 transform -translate-x-1/4 flex flex-col items-center">
            <Layers className="h-8 w-8 text-amber-400 mb-2" />
            <span className="bg-dainamics-card-alt px-3 py-1 rounded-full text-sm text-dainamics-light">OperaCore Quantum</span>
          </div>
          
          <div className="absolute top-2/3 right-1/4 flex flex-col items-center">
            <Zap className="h-8 w-8 text-red-400 mb-2" />
            <span className="bg-dainamics-card-alt px-3 py-1 rounded-full text-sm text-dainamics-light">CommandMatrix Elite</span>
          </div>
        </motion.div>
        
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow font-semibold text-base md:text-lg px-8 power-pulse"
          >
            DEPLOY YOUR SUPERHUMAN WORKFORCE
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-dainamics-light/50 mt-4">
            Scale your competitive advantage with AI agents that work together
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentsSynergy;
