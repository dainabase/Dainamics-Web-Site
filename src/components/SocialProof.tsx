
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Dummy client logos (in a real implementation, these would be images)
const clientLogos = [
  { id: 1, name: 'TechCorp', logoClass: 'bg-dainamics-primary/20 text-dainamics-primary' },
  { id: 2, name: 'FinanceHub', logoClass: 'bg-dainamics-secondary/20 text-dainamics-secondary' },
  { id: 3, name: 'RetailGiant', logoClass: 'bg-dainamics-success/20 text-dainamics-success' },
  { id: 4, name: 'MediaGroup', logoClass: 'bg-dainamics-cta/20 text-dainamics-cta' },
  { id: 5, name: 'HealthCare', logoClass: 'bg-dainamics-primary/20 text-dainamics-primary' },
  { id: 6, name: 'EduTech', logoClass: 'bg-dainamics-secondary/20 text-dainamics-secondary' },
];

// Dummy testimonials
const testimonials = [
  {
    id: 1,
    quote: "Dainamics AI agents have completely transformed our customer service operations. Response times decreased by 70% and customer satisfaction is at an all-time high.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    impact: "+70% operational efficiency"
  },
  {
    id: 2,
    quote: "The AdminFlow agent saved our team countless hours on paperwork and administrative tasks. Now we can focus on strategy and growth instead of busywork.",
    author: "Michael Chen",
    role: "COO, FinanceHub",
    impact: "42 hours saved weekly"
  },
  {
    id: 3,
    quote: "Our content production increased 3.5x with the Content Agent. The quality is consistent and we've seen significant improvement in our SEO rankings.",
    author: "Amanda Torres",
    role: "Marketing Director, MediaGroup",
    impact: "3.5x content output"
  }
];

// Certification badges
const certifications = [
  { id: 1, name: "ISO 27001", class: "bg-dainamics-light/5 border-dainamics-light/20" },
  { id: 2, name: "SOC 2", class: "bg-dainamics-light/5 border-dainamics-light/20" },
  { id: 3, name: "GDPR Compliant", class: "bg-dainamics-light/5 border-dainamics-light/20" },
  { id: 4, name: "HIPAA Compliant", class: "bg-dainamics-light/5 border-dainamics-light/20" },
];

export default function SocialProof() {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const isCounterInView = useInView(counterRef, { once: true, amount: 1 });
  
  // Counter animation for businesses count
  useEffect(() => {
    if (!isCounterInView) return;
    
    const counterElement = document.getElementById('businesses-counter');
    if (!counterElement) return;
    
    const targetNumber = 500;
    let currentNumber = 0;
    const duration = 2000; // ms
    const interval = 20; // ms
    const increment = Math.ceil(targetNumber / (duration / interval));
    
    const timer = setInterval(() => {
      currentNumber += increment;
      
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(timer);
      }
      
      counterElement.textContent = `+${currentNumber}`;
    }, interval);
    
    return () => clearInterval(timer);
  }, [isCounterInView]);
  
  return (
    <section className="relative py-20 md:py-28" ref={containerRef}>
      <div className="absolute inset-0 bg-dainamics-background z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-dainamics-primary font-semibold tracking-wider uppercase text-sm md:text-base inline-block mb-3">
            Social Proof
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Trusted by Leading</span> <br />
            <span className="text-gradient-secondary glow">Global Businesses</span>
          </h2>
          
          <div className="flex justify-center items-center mb-6" ref={counterRef}>
            <div className="flex items-baseline">
              <span id="businesses-counter" className="text-4xl md:text-5xl lg:text-6xl font-bold text-dainamics-primary glow-sm mr-2">
                +0
              </span>
              <span className="text-xl md:text-2xl text-dainamics-light">businesses</span>
            </div>
            <span className="mx-4 text-dainamics-light/30 text-2xl">|</span>
            <div className="flex items-baseline">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-dainamics-light mr-2">
                24
              </span>
              <span className="text-xl md:text-2xl text-dainamics-light/80">countries</span>
            </div>
          </div>
          
          <p className="text-dainamics-light/70 text-lg max-w-3xl mx-auto">
            Organizations across industries are achieving unprecedented results with our AI agents.
          </p>
        </div>
        
        {/* Client logos */}
        <div className="mb-20">
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {clientLogos.map((client) => (
              <div 
                key={client.id}
                className={`h-12 w-32 md:h-14 md:w-40 rounded-lg ${client.logoClass} flex items-center justify-center`}
              >
                <span className="font-bold">{client.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Testimonials */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass-morphism rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <div className="mb-6">
                <span className="text-4xl text-dainamics-primary/20">"</span>
              </div>
              
              <blockquote className="text-dainamics-light/80 mb-6">
                {testimonial.quote}
              </blockquote>
              
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-dainamics-light font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-dainamics-light/60 text-sm">
                    {testimonial.role}
                  </div>
                </div>
                
                <div className="bg-dainamics-primary/10 text-dainamics-primary px-3 py-1 rounded text-sm">
                  {testimonial.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Certifications */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className={`px-4 py-2 rounded-full border ${cert.class} text-dainamics-light/70 text-sm`}
            >
              {cert.name}
            </div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            asChild
            className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow"
          >
            <a href="/case-studies">
              Read our Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
