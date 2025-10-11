
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BrainCircuit, Bot, Building2 } from 'lucide-react';

const services = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Specialized AI agents that work 24/7, automating processes and delivering exceptional results across various business functions.',
    icon: Users,
    link: '/ai-agents',
    color: 'dainamics-primary'
  },
  {
    id: 'intelligence-center',
    title: 'Intelligence Center',
    description: 'A unified command center for monitoring and optimizing all your AI agents, with real-time insights and powerful analytics.',
    icon: BrainCircuit,
    link: '/intelligence-center',
    color: 'dainamics-secondary'
  },
  {
    id: 'ai-architectures',
    title: 'AI Architectures',
    description: 'Custom AI solutions designed specifically for your unique business challenges, delivering unparalleled results.',
    icon: Bot,
    link: '/ai-architectures',
    color: 'dainamics-cta'
  },
  {
    id: 'enterprise',
    title: 'Enterprise Solutions',
    description: 'Comprehensive AI transformation for large organizations, with custom integrations, security compliance, and dedicated support.',
    icon: Building2,
    link: '/enterprise',
    color: 'dainamics-success'
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };
  
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-dainamics-background/95 to-dainamics-background z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <span className="text-dainamics-primary font-semibold tracking-wider uppercase text-sm md:text-base inline-block mb-3">
            Our Services
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Comprehensive Solutions for</span> <br />
            <span className="text-gradient-primary glow">Business Transformation</span>
          </h2>
          
          <p className="text-dainamics-light/70 text-lg md:text-xl max-w-3xl mx-auto">
            We provide a complete ecosystem of AI solutions designed to revolutionize how your business operates.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="flex flex-col glass-morphism rounded-xl p-6 hover:border-dainamics-primary/30 transition-colors group"
            >
              <div className={`bg-${service.color}/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className={`h-6 w-6 text-${service.color}`} />
              </div>
              
              <h3 className="text-dainamics-light text-xl font-bold mb-3">{service.title}</h3>
              
              <p className="text-dainamics-light/70 mb-6 flex-grow">{service.description}</p>
              
              <Button
                asChild
                variant="link"
                className={`text-${service.color} hover:text-${service.color}/90 p-0 h-auto font-medium text-left justify-start group-hover:underline`}
              >
                <a href={service.link}>
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <Button
            asChild
            className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow"
          >
            <a href="/about">
              Discover our company
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
