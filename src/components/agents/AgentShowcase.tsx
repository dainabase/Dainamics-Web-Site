
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MessageSquare, FileText, Users, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { agentsList } from '@/data/agents';

const agents = [
  {
    id: "omniresponse",
    name: "OmniResponse X",
    description: "Customer Service Superhuman Agent",
    tagline: "Instant answers. Autonomous resolution. Maximum satisfaction.",
    metrics: "-70% response time, +85% customer satisfaction",
    icon: MessageSquare,
    color: "from-purple-500 to-indigo-600",
    story: {
      title: "Global E-commerce Support Transformation",
      before: "8.5 minute average response time, 65% resolution rate",
      after: "2.1 minute response time, 95% resolution rate, 24/7 coverage"
    }
  },
  {
    id: "contentforge",
    name: "ContentForge Prime",
    description: "Content Production Superhuman Agent",
    tagline: "Massive production. Optimal conversion. Digital domination.",
    metrics: "3.5x content production, +215% engagement rates",
    icon: FileText,
    color: "from-blue-500 to-cyan-400",
    story: {
      title: "Media Company Content Explosion",
      before: "22 articles per week, 1.2% average conversion",
      after: "75+ pieces of content weekly, 3.8% conversion rate across channels"
    }
  },
  {
    id: "acquisitionnova",
    name: "AcquisitionNova",
    description: "Lead Generation Superhuman Agent",
    tagline: "Precise detection. Automatic qualification. Explosive pipeline.",
    metrics: "+37% qualified leads, -42% sales cycle duration",
    icon: Users,
    color: "from-emerald-500 to-lime-300",
    story: {
      title: "SaaS Company Sales Acceleration",
      before: "32 day average sales cycle, 22% qualification rate",
      after: "18.5 day sales cycle, 60% qualification accuracy, 2.1x pipeline"
    }
  },
  {
    id: "operacore",
    name: "OperaCore Quantum",
    description: "Administration Superhuman Agent",
    tagline: "Complete automation. Zero error. Total efficiency.",
    metrics: "-82% administrative errors, +65% compliance rate",
    icon: Layers,
    color: "from-amber-500 to-yellow-300",
    story: {
      title: "Financial Services Operational Excellence",
      before: "12% error rate, 4.2 hours per document processing",
      after: "0.4% error rate, 7 minute processing time, 99.7% compliance"
    }
  },
  {
    id: "commandmatrix",
    name: "CommandMatrix Elite",
    description: "Personal Assistance Superhuman Agent",
    tagline: "Perfect anticipation. Superior organization. Multiplied power.",
    metrics: "+20 hours saved monthly, -30% decision fatigue",
    icon: Zap,
    color: "from-red-500 to-orange-400",
    story: {
      title: "Executive Productivity Revolution",
      before: "65% time spent on low-value tasks, 11pm average workday end",
      after: "82% focus on strategic activities, 6:30pm average day conclusion"
    }
  }
];

const AgentShowcase = () => {
  const [activeAgent, setActiveAgent] = useState(0);
  
  const nextAgent = () => {
    setActiveAgent((prev) => (prev + 1) % agents.length);
  };
  
  const prevAgent = () => {
    setActiveAgent((prev) => (prev - 1 + agents.length) % agents.length);
  };
  
  const current = agents[activeAgent];
  const Icon = current.icon;

  return (
    <section className="py-20 overflow-hidden bg-dainamics-card">
      <div className="container mx-auto px-4">
        {/* Navigation dots */}
        <div className="flex justify-center mb-8 gap-2">
          {agents.map((agent, index) => (
            <button
              key={agent.id}
              onClick={() => setActiveAgent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeAgent === index 
                  ? 'bg-dainamics-primary scale-125' 
                  : 'bg-dainamics-light/20 hover:bg-dainamics-light/40'
              }`}
              aria-label={`View ${agent.name}`}
            />
          ))}
        </div>
        
        {/* Agent Content */}
        <div className="relative">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20"
          >
            {/* Left panel - 3D visualization (placeholder) */}
            <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto lg:min-h-[600px] relative bg-gradient-to-br bg-dainamics-card-alt rounded-2xl overflow-hidden shadow-xl border border-dainamics-border flex items-center justify-center p-8">
              <div className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-5 z-0`}></div>
              
              {/* Visualization placeholder - to be replaced with actual 3D visualization */}
              <div className="text-center z-10">
                <Icon className="w-24 h-24 mx-auto mb-4 text-dainamics-primary opacity-70" />
                <div className="text-dainamics-light/70 text-sm">
                  [3D agent visualization will be implemented here]
                </div>
              </div>
            </div>
            
            {/* Right panel - Info */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-3">{current.name}</h2>
                <p className="text-xl text-dainamics-light/70 mb-4">{current.description}</p>
                <p className="text-2xl font-medium text-dainamics-primary glow-sm">"{current.tagline}"</p>
              </div>
              
              {/* Key metrics */}
              <div className="bg-dainamics-card-alt p-6 rounded-xl border border-dainamics-border">
                <h3 className="text-xl mb-3 text-dainamics-light/80">Key Performance Impact</h3>
                <p className="text-2xl md:text-3xl font-bold text-dainamics-secondary">{current.metrics}</p>
              </div>
              
              {/* Interactive element placeholder */}
              <div className="bg-dainamics-card-alt p-6 rounded-xl border border-dainamics-border">
                <h3 className="text-xl mb-3 text-dainamics-light/80">Interactive Demo</h3>
                <div className="h-24 flex items-center justify-center text-dainamics-light/40 text-sm">
                  [Interactive demo for {current.name} will be implemented here]
                </div>
              </div>
              
              {/* Transformation story */}
              <div className="bg-dainamics-card-alt p-6 rounded-xl border border-dainamics-border">
                <h3 className="text-xl mb-3 text-dainamics-light/80">Transformation Story</h3>
                <h4 className="font-bold text-dainamics-light mb-3">{current.story.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-dainamics-background/50 rounded-lg">
                    <p className="text-sm text-dainamics-light/60 mb-1">Before</p>
                    <p className="text-dainamics-light/90">{current.story.before}</p>
                  </div>
                  <div className="p-4 bg-dainamics-background/30 rounded-lg border border-dainamics-primary/20">
                    <p className="text-sm text-dainamics-primary mb-1">After</p>
                    <p className="text-dainamics-light">{current.story.after}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevAgent}
                  className="border-dainamics-border text-dainamics-light"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous Agent
                </Button>
                <Button
                  variant="outline"
                  onClick={nextAgent}
                  className="border-dainamics-border text-dainamics-light"
                >
                  Next Agent
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentShowcase;
