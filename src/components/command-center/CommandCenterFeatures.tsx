
import { motion } from 'framer-motion';
import { DatabaseIcon, Globe, Clock, Users, Zap, Shield } from 'lucide-react';

const features = [
  {
    title: "Universal Integration",
    description: "Connect with all your existing tools and data sources",
    icon: Globe,
    color: "from-blue-400 to-indigo-600"
  },
  {
    title: "Real-time Monitoring",
    description: "Track performance and results across all business areas",
    icon: Clock,
    color: "from-emerald-400 to-green-600"
  },
  {
    title: "Cross-agent Coordination",
    description: "Enable seamless collaboration between all AI agents",
    icon: Users,
    color: "from-amber-400 to-orange-600"
  },
  {
    title: "Autonomous Optimization",
    description: "Self-improving system that gets better over time",
    icon: Zap,
    color: "from-purple-400 to-fuchsia-600"
  },
  {
    title: "Human Oversight",
    description: "Maintain control while delegating execution",
    icon: Shield,
    color: "from-red-400 to-rose-600"
  },
  {
    title: "Data Integration Hub",
    description: "Unified data ecosystem across all your systems",
    icon: DatabaseIcon,
    color: "from-cyan-400 to-blue-600"
  }
];

const CommandCenterFeatures = () => {
  return (
    <section className="py-20 bg-dainamics-card">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Core Features</h2>
          <p className="text-xl text-dainamics-light/70">
            Centralized intelligence that orchestrates all your AI agents
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-dainamics-card-alt p-6 rounded-xl border border-dainamics-border relative group hover:border-dainamics-primary/40 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
              
              <div className="flex items-start mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 mr-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dainamics-light mb-2">{feature.title}</h3>
                  <p className="text-dainamics-light/70">{feature.description}</p>
                </div>
              </div>
              
              {/* Feature visual example placeholder */}
              <div className="mt-6 h-32 bg-dainamics-background/30 rounded-lg flex items-center justify-center">
                <span className="text-dainamics-light/30 text-sm">
                  [Visual example will be implemented here]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandCenterFeatures;
