
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ArrowLeft, Check, X, Send, Scan, Zap, Cpu } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { getAgentByVulnerability } from '@/data/agents';
import { submitDiagnosticToBrevo, isBrevoConfigured } from '@/lib/brevo-integration';

// Define types for our data structures
interface QuestionOption {
  id: string;
  text: string;
  subtext?: string;
  defaultHours?: number;
}

interface Question {
  id: number;
  question: string;
  type: 'hours' | 'single' | 'scale';
  options: QuestionOption[];
}

// Define the radical diagnostic questions
const questions: Question[] = [
  {
    id: 1,
    question: "How many hours per week is your company still wasting on these primitive tasks?",
    type: 'hours',
    options: [
      { id: 'a', text: "Manually answering the same customer questions", defaultHours: 10 },
      { id: 'b', text: "Laboriously creating marketing content", defaultHours: 15 },
      { id: 'c', text: "Blindly prospecting without data intelligence", defaultHours: 12 },
      { id: 'd', text: "Processing invoices and documents by hand", defaultHours: 8 },
      { id: 'e', text: "Managing a chaotic calendar and endless emails", defaultHours: 10 }
    ]
  },
  {
    id: 2,
    question: "What is your biggest vulnerability against AI-augmented competitors?",
    type: 'single',
    options: [
      { id: 'a', text: "Your customer service is too slow and unpredictable" },
      { id: 'b', text: "Your marketing presence severely lacks consistency and impact" },
      { id: 'c', text: "Your sales pipeline leaks opportunities at every stage" },
      { id: 'd', text: "Your administration slows you down instead of accelerating your business" },
      { id: 'e', text: "Your personal organization limits you instead of amplifying you" }
    ]
  },
  {
    id: 3,
    question: "At what AI maturity level is your company currently operating?",
    type: 'scale',
    options: [
      { id: 'a', text: "Prehistoric", subtext: "Entirely manual processes" },
      { id: 'b', text: "Outdated", subtext: "Basic unconnected tools" },
      { id: 'c', text: "Behind", subtext: "Some simple automations" },
      { id: 'd', text: "In transition", subtext: "Partial integrations and basic AI" },
      { id: 'e', text: "Augmented", subtext: "Interconnected AI systems - What Dainamics offers you" },
      { id: 'f', text: "Superhuman", subtext: "Total autonomy - The ultimate goal" }
    ]
  }
];

export default function DiagnosticQuestionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [hoursWasted, setHoursWasted] = useState<Record<string, number>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [scanning, setScanning] = useState(false); // For the scanning animation
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Calculate total hours wasted
  const totalHoursWasted = Object.values(hoursWasted).reduce((acc, curr) => acc + curr, 0);
  
  // Calculate progress percentage
  const progress = ((currentQuestion + (selectedOption ? 0.5 : 0)) / questions.length) * 100;
  
  // Validate email
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  }, [email]);
  
  // Scroll to section when it becomes visible
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showResults]);
  
  useEffect(() => {
    // Initialize hours wasted for the first question
    if (questions[0]?.type === 'hours' && Object.keys(hoursWasted).length === 0) {
      const initialHours: Record<string, number> = {};
      questions[0].options.forEach(option => {
        if (option.defaultHours !== undefined) {
          initialHours[option.id] = option.defaultHours;
        }
      });
      setHoursWasted(initialHours);
    }
  }, []);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };
  
  const handleHoursChange = (optionId: string, value: number) => {
    setHoursWasted(prev => ({
      ...prev,
      [optionId]: parseInt(String(value), 10) || 0
    }));
  };
  
  const handleNext = () => {
    if (selectedOption || questions[currentQuestion].type === 'hours') {
      // Save the answer
      setAnswers({
        ...answers,
        [questions[currentQuestion].id]: questions[currentQuestion].type === 'hours' 
          ? hoursWasted 
          : selectedOption
      });
      
      // Move to next question or show results
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setScanning(true);
        // Simulate scanning process
        setTimeout(() => {
          setScanning(false);
          setShowResults(true);
        }, 3500);
      }
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      if (questions[currentQuestion - 1].type !== 'hours') {
        setSelectedOption(answers[questions[currentQuestion - 1].id] || null);
      }
    }
  };
  
  const handleSubmit = async () => {
    if (!isValid) return;
    
    setIsSubmitting(true);
    
    try {
      // Prepare diagnostic data for Brevo
      const diagnosticData = {
        hoursWasted: hoursWasted,
        totalHoursWasted: totalHoursWasted,
        vulnerability: answers[2] as string, // Second question answer
        maturityLevel: answers[3] as string, // Third question answer
        aiScore: calculateScore(),
        recommendedAgent: getRecommendedAgent().name
      };

      // Check if Brevo is configured
      if (!isBrevoConfigured()) {
        console.warn('⚠️ [BREVO] Not configured - skipping email submission');
        // Fallback: simulate success
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        // Submit to Brevo
        const result = await submitDiagnosticToBrevo(email, diagnosticData);
        
        if (!result.success) {
          throw new Error(result.error || 'Submission failed');
        }
      }
      
      toast({
        title: "Strategic AI Domination Plan Sent!",
        description: "Check your email for your complete business transformation blueprint.",
        variant: "default",
      });
      
      // Reset form
      setEmail('');
      setIsSubmitting(false);
    } catch (error) {
      console.error('❌ [DIAGNOSTIC] Error submitting:', error);
      toast({
        title: "Transmission Failed",
        description: "Please try again - your transformation is too important to miss.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };
  
  // Determine recommended agent based on answers
  const getRecommendedAgent = () => {
    const vulnerability = answers[2] as string; // Second question answer
    return getAgentByVulnerability(vulnerability || 'e');
  };
  
  // Calculate the AI potential score based on answers
  const calculateScore = () => {
    let score = 0;
    
    // Calculate based on AI maturity level (3rd question)
    const maturityLevel = answers[3] as string; // Third question answer
    if (maturityLevel === 'a') score = 20;
    else if (maturityLevel === 'b') score = 35;
    else if (maturityLevel === 'c') score = 50;
    else if (maturityLevel === 'd') score = 65;
    else if (maturityLevel === 'e') score = 80;
    else if (maturityLevel === 'f') score = 95;
    
    // Adjust based on total hours wasted - more hours = more potential
    const hoursImpact = Math.min(20, totalHoursWasted / 10);
    score = Math.min(100, score + hoursImpact);
    
    return Math.round(score);
  };
  
  return (
    <section 
      id="diagnostic" 
      className="py-24 bg-dainamics-background-alt relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background elements - futuristic grid */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dainamics-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dainamics-primary/20 to-transparent"></div>
      
      {/* Neural nodes decoration */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-dainamics-primary/5 animate-pulse-glow"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-dainamics-secondary/5 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-dainamics-cta/5 animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-wide">
            <span className="text-gradient-primary glow">Is your business still trapped in outdated methods?</span>
          </h2>
          <p className="text-dainamics-light/80 max-w-2xl mx-auto text-lg md:text-xl">
            Discover which obsolete tasks you could eliminate with our superhuman AI agents
          </p>
          {!scanning && !showResults && currentQuestion === 0 && (
            <Button
              onClick={() => setCurrentQuestion(0)}
              className="mt-8 bg-dainamics-primary hover:bg-dainamics-primary/90 text-white btn-glow font-semibold px-8 py-6 text-lg"
            >
              <Scan className="mr-2 h-5 w-5" />
              Scan my business
            </Button>
          )}
        </div>
        
        <div className="max-w-3xl mx-auto glass-morphism rounded-xl p-6 md:p-8 shadow-glow">
          {!scanning && !showResults ? (
            <>
              {/* Progress bar - more futuristic design */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-dainamics-secondary font-medium">Deep Scan {currentQuestion + 1}/{questions.length}</span>
                  <span className="text-dainamics-primary font-medium">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-2 bg-dainamics-background" />
              </div>
              
              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-gradient-primary">
                    {questions[currentQuestion].question}
                  </h3>
                  
                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {questions[currentQuestion].type === 'hours' ? (
                      // Hours wasted question type
                      questions[currentQuestion].options.map((option) => (
                        <div
                          key={option.id}
                          className="w-full p-4 rounded-lg border border-dainamics-border bg-dainamics-card-alt"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-dainamics-light/90">{option.text}</span>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleHoursChange(option.id, Math.max(0, (hoursWasted[option.id] || 0) - 1))}
                                className="w-8 h-8 flex items-center justify-center rounded border border-dainamics-border bg-dainamics-background hover:bg-dainamics-primary/10"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={hoursWasted[option.id] || 0}
                                onChange={(e) => handleHoursChange(option.id, parseInt(e.target.value, 10))}
                                className="w-16 px-2 py-1 text-center bg-dainamics-background border border-dainamics-border rounded text-dainamics-light"
                              />
                              <button
                                onClick={() => handleHoursChange(option.id, (hoursWasted[option.id] || 0) + 1)}
                                className="w-8 h-8 flex items-center justify-center rounded border border-dainamics-border bg-dainamics-background hover:bg-dainamics-primary/10"
                              >
                                +
                              </button>
                              <span className="text-dainamics-light/70 text-sm ml-1">hrs</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : questions[currentQuestion].type === 'scale' ? (
                      // Scale question type (AI maturity)
                      <div className="bg-dainamics-card-alt p-4 rounded-lg border border-dainamics-border">
                        <div className="flex flex-col space-y-4">
                          {questions[currentQuestion].options.map((option) => (
                            <button
                              key={option.id}
                              onClick={() => handleOptionSelect(option.id)}
                              className={`w-full text-left p-4 rounded-lg border transition-all ${
                                selectedOption === option.id
                                  ? 'border-dainamics-primary bg-dainamics-primary/10 shadow-glow-sm'
                                  : 'border-dainamics-border bg-dainamics-background hover:bg-dainamics-background/80'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className={`font-bold ${selectedOption === option.id ? 'text-dainamics-primary' : 'text-dainamics-light/90'}`}>
                                    {option.text}
                                  </div>
                                  <div className="text-sm text-dainamics-light/70">
                                    {option.subtext}
                                  </div>
                                </div>
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  selectedOption === option.id
                                    ? 'border-dainamics-primary bg-dainamics-primary'
                                    : 'border-dainamics-border'
                                }`}>
                                  {selectedOption === option.id && (
                                    <Check className="h-3 w-3 text-white" />
                                  )}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Default single selection
                      questions[currentQuestion].options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionSelect(option.id)}
                          className={`w-full text-left p-4 rounded-lg border transition-all ${
                            selectedOption === option.id
                              ? 'border-dainamics-primary bg-dainamics-primary/10 shadow-glow-sm'
                              : 'border-dainamics-border bg-dainamics-card-alt hover:bg-dainamics-card-alt/80'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                              selectedOption === option.id
                                ? 'border-dainamics-primary bg-dainamics-primary'
                                : 'border-dainamics-border'
                            }`}>
                              {selectedOption === option.id && (
                                <Check className="h-3 w-3 text-white" />
                              )}
                            </div>
                            <span className={selectedOption === option.id ? 'text-dainamics-primary' : 'text-dainamics-light/90'}>
                              {option.text}
                            </span>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                  
                  {/* Impact summary for hours question */}
                  {questions[currentQuestion].type === 'hours' && totalHoursWasted > 0 && (
                    <div className="mb-8 bg-dainamics-card p-4 rounded-lg border border-dainamics-primary/20">
                      <h4 className="text-dainamics-primary font-bold mb-2">Inefficiency Impact Analysis:</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xl font-bold text-dainamics-light">{totalHoursWasted}</div>
                          <div className="text-sm text-dainamics-light/70">Hours lost weekly</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-dainamics-light">{totalHoursWasted * 4}</div>
                          <div className="text-sm text-dainamics-light/70">Hours lost monthly</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-dainamics-light">{totalHoursWasted * 52}</div>
                          <div className="text-sm text-dainamics-light/70">Hours lost yearly</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className="border-dainamics-border text-dainamics-light/70"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    
                    <Button
                      onClick={handleNext}
                      disabled={questions[currentQuestion].type !== 'hours' && !selectedOption}
                      className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white"
                    >
                      {currentQuestion < questions.length - 1 ? 'Next' : 'Analyze Results'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : scanning ? (
            // Scanning animation
            <div className="py-12 text-center">
              <div className="inline-flex flex-col items-center">
                <div className="relative w-32 h-32 mb-8">
                  <div className="absolute inset-0 rounded-full border-4 border-dainamics-primary/30 border-t-dainamics-primary animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="h-12 w-12 text-dainamics-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Deep Scanning Business Patterns</h3>
                <p className="text-dainamics-light/70 mb-4">Analyzing inefficiencies and optimization potential...</p>
                <div className="w-full max-w-md h-2 bg-dainamics-background rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-dainamics-primary to-dainamics-secondary animate-[loading_3s_ease-in-out_forwards]"></div>
                </div>
                <div className="mt-6 text-sm text-dainamics-light/50 font-mono">
                  <span className="typing-effect">Detecting optimization patterns... Calculating ROI... Analyzing workflow inefficiencies...</span>
                </div>
              </div>
            </div>
          ) : (
            // Results
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="inline-block p-3 rounded-full bg-dainamics-primary/20 mb-4">
                  <Zap className="h-8 w-8 text-dainamics-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Your AI Domination Plan</h3>
                <p className="text-dainamics-light/70 mb-6">
                  Based on your business scan, we've calculated your strategic transformation pathway:
                </p>
                
                {/* AI Potential Score - more dynamic visualization */}
                <div className="relative w-56 h-56 mx-auto mb-6">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7B2FFF" />
                        <stop offset="100%" stopColor="#10E4FF" />
                      </linearGradient>
                    </defs>
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#1e293b" 
                      strokeWidth="10" 
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="url(#scoreGradient)" 
                      strokeWidth="10" 
                      strokeDasharray={`${2 * Math.PI * 45 * calculateScore() / 100} ${2 * Math.PI * 45 * (1 - calculateScore() / 100)}`}
                      strokeDashoffset={2 * Math.PI * 45 * 0.25}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-4xl font-bold text-gradient-primary">{calculateScore()}%</span>
                    <span className="text-sm text-dainamics-light/70">AI Domination Potential</span>
                  </div>
                </div>
                
                {/* Recommended AI agent */}
                <div className="bg-dainamics-card-alt p-6 rounded-xl border border-dainamics-primary/30 mb-8 shadow-glow-sm">
                  <div className="text-left">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gradient-primary">{getRecommendedAgent().name}</h4>
                        <p className="text-dainamics-secondary">{getRecommendedAgent().description}</p>
                      </div>
                      <div className="bg-dainamics-primary/20 p-2 rounded-lg">
                        <span className="text-dainamics-light font-bold">RECOMMENDED</span>
                      </div>
                    </div>
                    
                    <p className="text-dainamics-light italic mb-4">"{getRecommendedAgent().tagline}"</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm text-dainamics-light/60 uppercase tracking-wider mb-1">Impact Projection</h5>
                        <p className="text-dainamics-light">{getRecommendedAgent().impact}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm text-dainamics-light/60 uppercase tracking-wider mb-1">Time Recovery</h5>
                        <p className="text-dainamics-light">Reclaim <span className="text-dainamics-success font-bold">{totalHoursWasted * 4}</span> hours monthly</p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm text-dainamics-light/60 uppercase tracking-wider mb-1">Competitive Advantage</h5>
                        <div className="w-full bg-dainamics-background h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-dainamics-primary to-dainamics-secondary h-full rounded-full" style={{ width: `${calculateScore()}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Email submission - more futuristic */}
                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-3">Receive Your Complete Strategic Blueprint</h4>
                  <p className="text-dainamics-light/70 mb-4">
                    Enter your email for the full AI domination plan with implementation timeline and ROI projections.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <div className="relative flex-grow">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-dainamics-background border border-dainamics-border focus:border-dainamics-primary focus:ring-1 focus:ring-dainamics-primary outline-none transition-all"
                      />
                      {email && (
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {isValid ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={handleSubmit}
                      disabled={!isValid || isSubmitting}
                      className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white power-pulse"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                          Transmitting...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          SEND BLUEPRINT
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
                
                {/* Enhanced CTA */}
                <div className="mt-8">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-dainamics-primary hover:bg-dainamics-primary/90 text-white btn-glow font-bold text-lg"
                  >
                    <a href="#services">
                      ACTIVATE MY AI DOMINATION
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="mt-4 border-dainamics-border text-dainamics-light hover:bg-dainamics-light/5 font-bold"
                  >
                    <a href="#services">
                      SEE MY PERSONALIZED DEMO
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
