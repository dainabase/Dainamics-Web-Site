
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CommandCenterRoi = () => {
  const [timeSaved, setTimeSaved] = useState(50);
  const [errorReduction, setErrorReduction] = useState(70);
  const [productivityIncrease, setProductivityIncrease] = useState(40);
  
  return (
    <section className="py-24 bg-dainamics-background relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">ROI Calculator</h2>
          <p className="text-xl text-dainamics-light/70">
            See the potential impact of Command Center on your business
          </p>
        </motion.div>
        
        <div className="bg-dainamics-card-alt rounded-xl border border-dainamics-border p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Sliders column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-dainamics-light mb-6">Adjust Parameters</h3>
              
              {/* Time saved slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="time-saved" className="text-dainamics-light">Time Saved</label>
                  <span className="text-dainamics-primary font-bold">{timeSaved}%</span>
                </div>
                <input 
                  type="range" 
                  id="time-saved"
                  min="10" 
                  max="90" 
                  value={timeSaved}
                  onChange={(e) => setTimeSaved(parseInt(e.target.value))}
                  className="w-full h-2 bg-dainamics-background rounded-lg appearance-none cursor-pointer accent-dainamics-primary"
                />
              </div>
              
              {/* Error reduction slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="error-reduction" className="text-dainamics-light">Error Reduction</label>
                  <span className="text-dainamics-primary font-bold">{errorReduction}%</span>
                </div>
                <input 
                  type="range" 
                  id="error-reduction"
                  min="20" 
                  max="95" 
                  value={errorReduction}
                  onChange={(e) => setErrorReduction(parseInt(e.target.value))}
                  className="w-full h-2 bg-dainamics-background rounded-lg appearance-none cursor-pointer accent-dainamics-primary"
                />
              </div>
              
              {/* Productivity increase slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="productivity" className="text-dainamics-light">Productivity Increase</label>
                  <span className="text-dainamics-primary font-bold">{productivityIncrease}%</span>
                </div>
                <input 
                  type="range" 
                  id="productivity"
                  min="10" 
                  max="80" 
                  value={productivityIncrease}
                  onChange={(e) => setProductivityIncrease(parseInt(e.target.value))}
                  className="w-full h-2 bg-dainamics-background rounded-lg appearance-none cursor-pointer accent-dainamics-primary"
                />
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg"
                  className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow font-semibold w-full"
                >
                  GET YOUR PERSONALIZED ROI ANALYSIS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Results visualization column */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-dainamics-light mb-6">Projected Impact</h3>
              
              {/* Chart placeholder - to be implemented with proper chart */}
              <div className="h-64 bg-dainamics-background/50 rounded-lg flex items-center justify-center mb-8">
                <span className="text-dainamics-light/30 text-sm">
                  [ROI visualization chart will be implemented here]
                </span>
              </div>
              
              {/* Impact metrics */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-dainamics-light/70">Annual time savings:</span>
                  <span className="text-dainamics-secondary font-bold">{Math.round(timeSaved * 21)} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dainamics-light/70">Error cost reduction:</span>
                  <span className="text-dainamics-secondary font-bold">${Math.round(errorReduction * 120).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dainamics-light/70">Projected ROI:</span>
                  <span className="text-dainamics-secondary font-bold">{Math.round((timeSaved + errorReduction + productivityIncrease) * 0.8)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandCenterRoi;
