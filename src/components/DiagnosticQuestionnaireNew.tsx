
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Scan, Brain, MessageCircle, FileText, TrendingUp, ClipboardList, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

// Define data types
type BusinessChallenge = 'customer-service' | 'content-marketing' | 'lead-generation' | 'admin' | 'organization';

interface ChallengeOption {
  id: BusinessChallenge;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface QuestionOption {
  value: string;
  label: string;
}

interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

interface AgentRecommendation {
  name: string;
  tagline: string;
  features: string[];
  metrics: { label: string; value: string }[];
}

// Challenge options
const businessChallenges: ChallengeOption[] = [
  {
    id: 'customer-service',
    title: 'Customer Service Overload',
    description: 'Struggling with too many customer requests',
    icon: <MessageCircle className="h-8 w-8 text-dainamics-primary" />
  },
  {
    id: 'content-marketing',
    title: 'Content Creation Bottleneck',
    description: 'Spending too much time creating marketing content',
    icon: <FileText className="h-8 w-8 text-dainamics-primary" />
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation Struggle',
    description: 'Not enough qualified prospects and clients',
    icon: <TrendingUp className="h-8 w-8 text-dainamics-primary" />
  },
  {
    id: 'admin',
    title: 'Administrative Burden',
    description: 'Overwhelmed by paperwork and manual processes',
    icon: <ClipboardList className="h-8 w-8 text-dainamics-primary" />
  },
  {
    id: 'organization',
    title: 'Personal Productivity Drain',
    description: 'Wasting time on emails, scheduling and repetitive tasks',
    icon: <Calendar className="h-8 w-8 text-dainamics-primary" />
  }
];

// Questions for specific challenges
const specificQuestions: Record<BusinessChallenge, Question[]> = {
  'customer-service': [
    {
      id: 'channels',
      text: 'Which channels do you manage customer requests on?',
      options: [
        { value: 'email', label: 'Email' },
        { value: 'whatsapp', label: 'WhatsApp' },
        { value: 'social', label: 'Social Media' },
        { value: 'phone', label: 'Phone' },
        { value: 'chat', label: 'Website Chat' }
      ]
    }
  ],
  'content-marketing': [
    {
      id: 'content-types',
      text: 'What types of content do you need to create regularly?',
      options: [
        { value: 'blogs', label: 'Blog Articles' },
        { value: 'social', label: 'Social Media Posts' },
        { value: 'email', label: 'Email Campaigns' },
        { value: 'video', label: 'Video Scripts' },
        { value: 'product', label: 'Product Copy' }
      ]
    }
  ],
  'lead-generation': [
    {
      id: 'lead-aspects',
      text: 'What aspects of lead generation are most difficult for you?',
      options: [
        { value: 'finding', label: 'Finding Prospects' },
        { value: 'qualifying', label: 'Qualifying Leads' },
        { value: 'nurturing', label: 'Lead Nurturing' },
        { value: 'following', label: 'Follow-up' },
        { value: 'closing', label: 'Closing Deals' }
      ]
    }
  ],
  'admin': [
    {
      id: 'admin-tasks',
      text: 'Which administrative tasks take up most of your time?',
      options: [
        { value: 'invoices', label: 'Invoice Management' },
        { value: 'documents', label: 'Document Processing' },
        { value: 'expenses', label: 'Expense Tracking' },
        { value: 'reporting', label: 'Reporting' },
        { value: 'data', label: 'Data Entry' }
      ]
    }
  ],
  'organization': [
    {
      id: 'productivity-tasks',
      text: 'Which personal tasks consume most of your workday?',
      options: [
        { value: 'email', label: 'Email Management' },
        { value: 'calendar', label: 'Calendar & Scheduling' },
        { value: 'meetings', label: 'Meeting Preparation' },
        { value: 'tasks', label: 'Task Management' },
        { value: 'information', label: 'Information Overload' }
      ]
    }
  ]
};

// Agent recommendations mapping
const agentRecommendations: Record<BusinessChallenge, AgentRecommendation> = {
  'customer-service': {
    name: 'OmniResponse X',
    tagline: 'Instant answers. Autonomous resolution. Maximum satisfaction.',
    features: [
      'Handles customer inquiries 24/7 across all communication channels',
      'Resolves up to 80% of common requests without human intervention',
      'Learns from each interaction to continuously improve responses'
    ],
    metrics: [
      { label: 'Response Time', value: '-70%' },
      { label: 'Customer Satisfaction', value: '+35%' },
      { label: 'Support Capacity', value: '5x' }
    ]
  },
  'content-marketing': {
    name: 'ContentForge Prime',
    tagline: 'Massive production. Optimal conversion. Digital domination.',
    features: [
      'Creates high-quality content across multiple formats and platforms',
      'Maintains your brand voice and optimizes for engagement',
      'Schedules and publishes content automatically based on optimal timing'
    ],
    metrics: [
      { label: 'Content Creation Time', value: '-72%' },
      { label: 'Publication Frequency', value: '3.5x' },
      { label: 'Engagement', value: '+45%' }
    ]
  },
  'lead-generation': {
    name: 'AcquisitionNova',
    tagline: 'Precise detection. Strategic engagement. Automatic closing.',
    features: [
      'Identifies and qualifies high-value prospects using behavioral data',
      'Creates personalized outreach sequences for maximum conversion',
      'Tracks and analyzes the entire sales pipeline with predictive insights'
    ],
    metrics: [
      { label: 'Lead Volume', value: '+225%' },
      { label: 'Conversion Rate', value: '+40%' },
      { label: 'Sales Cycle', value: '-35%' }
    ]
  },
  'admin': {
    name: 'OperaCore Quantum',
    tagline: 'Total automation. Zero paperwork. Complete accuracy.',
    features: [
      'Processes documents, invoices, and forms with superhuman accuracy',
      'Integrates with your existing systems to eliminate manual data entry',
      'Produces reports and analytics automatically based on your requirements'
    ],
    metrics: [
      { label: 'Processing Time', value: '-85%' },
      { label: 'Error Rate', value: '-95%' },
      { label: 'Administrative Costs', value: '-60%' }
    ]
  },
  'organization': {
    name: 'CommandMatrix Elite',
    tagline: 'Email mastery. Calendar optimization. Time liberation.',
    features: [
      'Manages your inbox, prioritizing and categorizing messages automatically',
      'Optimizes your schedule for peak productivity and work-life balance',
      'Eliminates repetitive tasks through intelligent automation workflows'
    ],
    metrics: [
      { label: 'Email Time', value: '-60%' },
      { label: 'Meeting Efficiency', value: '+45%' },
      { label: 'Focus Time', value: '+3hrs/day' }
    ]
  }
};

// Main component
export default function DiagnosticQuestionnaireNew() {
  // State
  const [currentStep, setCurrentStep] = useState(0); // 0 for intro, 1-3 for steps, 4 for results
  const [selectedChallenges, setSelectedChallenges] = useState<BusinessChallenge[]>([]);
  const [specificAnswers, setSpecificAnswers] = useState<Record<string, string[]>>({});
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScanAnimation, setShowScanAnimation] = useState(false);
  const [neuralLines, setNeuralLines] = useState<{[key: string]: {angle: number, length: number, delay: number}[]}>({});
  
  const sectionRef = useRef<HTMLDivElement>(null);

  // Generate neural lines for animation
  useEffect(() => {
    const newNeuralLines: {[key: string]: {angle: number, length: number, delay: number}[]} = {};
    
    businessChallenges.forEach(challenge => {
      const lines = [];
      for (let i = 0; i < 8; i++) {
        lines.push({
          angle: Math.random() * 360,
          length: 30 + Math.random() * 40,
          delay: Math.random() * 0.5
        });
      }
      newNeuralLines[challenge.id] = lines;
    });
    
    setNeuralLines(newNeuralLines);
  }, []);

  // Toggle challenge selection
  const toggleChallenge = (challenge: BusinessChallenge) => {
    setSelectedChallenges(prev => {
      if (prev.includes(challenge)) {
        return prev.filter(c => c !== challenge);
      } else {
        return [...prev, challenge];
      }
    });
  };

  // Toggle specific answer option
  const toggleSpecificAnswer = (challengeId: BusinessChallenge, questionId: string, optionValue: string) => {
    setSpecificAnswers(prev => {
      const key = `${challengeId}-${questionId}`;
      const currentSelections = prev[key] || [];
      
      if (currentSelections.includes(optionValue)) {
        return {
          ...prev,
          [key]: currentSelections.filter(v => v !== optionValue)
        };
      } else {
        return {
          ...prev,
          [key]: [...currentSelections, optionValue]
        };
      }
    });
  };

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Start questionnaire
  const startQuestionnaire = () => {
    setShowScanAnimation(true);
    setTimeout(() => {
      setShowScanAnimation(false);
      setCurrentStep(1);
    }, 3000);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(4);
      
      toast({
        title: "AI Transformation Plan Ready!",
        description: "We've sent your complete diagnosis to your email.",
        variant: "default",
      });
      
      // Scroll to results
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2500);
  };

  // Handle navigation to next step
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle navigation to previous step
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Reset the questionnaire
  const handleReset = () => {
    setCurrentStep(0);
    setSelectedChallenges([]);
    setSpecificAnswers({});
    setFormData({
      email: '',
      name: '',
      company: '',
      consent: false
    });
    window.scrollTo(0, 0);
  };

  // Check if option is selected
  const isOptionSelected = (challengeId: BusinessChallenge, questionId: string, optionValue: string): boolean => {
    const key = `${challengeId}-${questionId}`;
    return (specificAnswers[key] || []).includes(optionValue);
  };

  // Form validation
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedChallenges.length > 0;
      case 2:
        // Check if at least one answer is provided for each selected challenge
        return selectedChallenges.every(challenge => {
          return specificQuestions[challenge].some(question => {
            const key = `${challenge}-${question.id}`;
            return specificAnswers[key] && specificAnswers[key].length > 0;
          });
        });
      case 3:
        return formData.email !== '' && formData.name !== '' && formData.consent;
      default:
        return true;
    }
  };

  // Calculate progress percentage
  const progressPercentage = () => {
    if (currentStep === 0) return 0;
    return ((currentStep) / 3) * 100;
  };

  return (
    <section id="diagnostic" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Particle Background Effect */}
      <div className="absolute inset-0 bg-[#050510]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-dainamics-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-dainamics-secondary/10 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Questionnaire Header */}
        <div className="questionnaire-header text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-dainamics-primary/5 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-wide bg-gradient-to-r from-dainamics-primary to-dainamics-secondary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(123,47,255,0.3)]">
            Is your business still trapped in outdated methods?
          </h2>
          
          <p className="text-dainamics-light/80 max-w-2xl mx-auto text-lg md:text-xl mb-10">
            Discover which obsolete tasks you could eliminate with our superhuman AI agents
          </p>
          
          {currentStep === 0 && !showScanAnimation && (
            <motion.button
              onClick={startQuestionnaire}
              className="group bg-gradient-to-r from-dainamics-cta to-[#FF8A00] hover:from-dainamics-primary hover:to-dainamics-secondary text-white rounded-full pl-2 pr-6 py-2 flex items-center gap-3 mx-auto shadow-lg hover:shadow-dainamics-primary/30 transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
                <Brain className="w-6 h-6 text-white group-hover:text-dainamics-secondary transition-colors duration-300" />
              </span>
              <span className="font-bold">Begin Neural Business Scan</span>
            </motion.button>
          )}
        </div>

        {/* Neural Scanner Container */}
        {(currentStep > 0 || showScanAnimation) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="neural-scanner-container bg-[#050510] border border-dainamics-border rounded-xl shadow-2xl shadow-dainamics-primary/20 overflow-hidden"
          >
            {/* Neural Network Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-dainamics-primary/10 blur-xl"></div>
              <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-dainamics-secondary/10 blur-xl"></div>
              <div className="grid grid-cols-6 gap-8 opacity-5">
                {Array(24).fill(0).map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-full bg-white"></div>
                ))}
              </div>
            </div>

            {/* Scanner Interface */}
            <div className="relative z-10 p-6 md:p-10">
              {/* Scanner Header */}
              <div className="flex flex-col sm:flex-row items-center sm:justify-between pb-6 mb-8 border-b border-dainamics-border/40">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="relative mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-dainamics-primary to-dainamics-secondary rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-dainamics-primary to-dainamics-secondary rounded-full animate-pulse-glow opacity-60"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-dainamics-light">Neural Business Analysis</h3>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-dainamics-secondary animate-pulse mr-2"></div>
                  <span className="text-dainamics-secondary text-sm">Status: Active</span>
                </div>
              </div>

              {/* Loading Animation */}
              {showScanAnimation ? (
                <div className="py-20 flex flex-col items-center justify-center">
                  <div className="relative w-32 h-32 mb-8">
                    <div className="absolute inset-0 rounded-full border-4 border-dainamics-primary/30 border-t-dainamics-primary animate-spin"></div>
                    <div className="absolute inset-4 rounded-full border-4 border-dainamics-secondary/30 border-b-dainamics-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Scan className="h-10 w-10 text-dainamics-primary animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Initializing Neural Scan</h3>
                  <p className="text-dainamics-light/70 mb-6">Calibrating business analysis algorithms...</p>
                  <div className="w-full max-w-md h-2 bg-dainamics-background rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.8 }}
                      className="h-full bg-gradient-to-r from-dainamics-primary to-dainamics-secondary"
                    />
                  </div>
                  <div className="mt-6 text-sm text-dainamics-light/50 font-mono">
                    <span className="typing-effect">Analyzing business patterns... Detecting inefficiencies... Preparing neural interface...</span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Progress Tracker */}
                  <div className="mb-8">
                    <div className="h-1 bg-dainamics-border/50 rounded-full mb-6 overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${progressPercentage()}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-dainamics-primary to-dainamics-secondary"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className={cn(
                        "flex flex-col items-center",
                        currentStep >= 1 ? "text-dainamics-light" : "text-dainamics-light/40"
                      )}>
                        <div className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center mb-2",
                          currentStep >= 1 
                            ? "bg-dainamics-primary border-2 border-dainamics-secondary shadow-lg shadow-dainamics-primary/30" 
                            : "border-2 border-dainamics-border/50"
                        )}>
                          {currentStep > 1 && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs">Business DNA</span>
                      </div>
                      
                      <div className={cn(
                        "flex flex-col items-center",
                        currentStep >= 2 ? "text-dainamics-light" : "text-dainamics-light/40"
                      )}>
                        <div className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center mb-2",
                          currentStep >= 2 
                            ? "bg-dainamics-primary border-2 border-dainamics-secondary shadow-lg shadow-dainamics-primary/30" 
                            : "border-2 border-dainamics-border/50"
                        )}>
                          {currentStep > 2 && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs">Deep Analysis</span>
                      </div>
                      
                      <div className={cn(
                        "flex flex-col items-center",
                        currentStep >= 3 ? "text-dainamics-light" : "text-dainamics-light/40"
                      )}>
                        <div className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center mb-2",
                          currentStep >= 3 
                            ? "bg-dainamics-primary border-2 border-dainamics-secondary shadow-lg shadow-dainamics-primary/30" 
                            : "border-2 border-dainamics-border/50"
                        )}>
                          {currentStep > 3 && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs">Neural Match</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 1: Challenge Selection */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-dainamics-light mb-2">
                          Which business inefficiencies are draining your resources?
                        </h3>
                        <p className="text-dainamics-light/70">Select all that apply for neural analysis</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {businessChallenges.map((challenge) => (
                          <motion.div
                            key={challenge.id}
                            className={cn(
                              "p-6 rounded-xl cursor-pointer border-2 transition-all duration-300 relative overflow-hidden",
                              selectedChallenges.includes(challenge.id)
                                ? "border-dainamics-primary bg-dainamics-primary/10 shadow-lg shadow-dainamics-primary/20"
                                : "border-dainamics-border/30 bg-dainamics-card/30 hover:bg-dainamics-primary/5"
                            )}
                            onClick={() => toggleChallenge(challenge.id)}
                            whileHover={{ y: -5 }}
                          >
                            {/* Neural connection lines animation */}
                            {selectedChallenges.includes(challenge.id) && (
                              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                {neuralLines[challenge.id]?.map((line, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 0.7, scaleX: 1 }}
                                    transition={{ delay: line.delay, duration: 0.5 }}
                                    style={{ 
                                      position: 'absolute',
                                      top: '50%',
                                      left: '50%',
                                      width: line.length,
                                      height: 1,
                                      background: 'linear-gradient(90deg, #7B2FFF, #10E4FF)',
                                      transformOrigin: 'left center',
                                      transform: `rotate(${line.angle}deg)`
                                    }}
                                  />
                                ))}
                                {neuralLines[challenge.id]?.map((line, i) => (
                                  <motion.div
                                    key={`pulse-${i}`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ 
                                      opacity: [0, 1, 0],
                                      scale: [0, 1, 2] 
                                    }}
                                    transition={{ 
                                      delay: line.delay + 0.5,
                                      duration: 2,
                                      repeat: Infinity,
                                      repeatDelay: 3
                                    }}
                                    style={{ 
                                      position: 'absolute',
                                      top: '50%',
                                      left: '50%',
                                      width: 6,
                                      height: 6,
                                      borderRadius: '50%',
                                      background: '#10E4FF',
                                      transform: `translateX(${Math.cos(line.angle * Math.PI / 180) * line.length}px) translateY(${Math.sin(line.angle * Math.PI / 180) * line.length}px) translate(-50%, -50%)`,
                                    }}
                                  />
                                ))}
                              </div>
                            )}

                            <div className="flex flex-col items-center text-center">
                              <div className={cn(
                                "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                                selectedChallenges.includes(challenge.id)
                                  ? "bg-dainamics-primary/30 shadow-lg shadow-dainamics-primary/20"
                                  : "bg-dainamics-card"
                              )}>
                                {challenge.icon}
                              </div>
                              <h4 className="font-bold text-dainamics-light mb-2">{challenge.title}</h4>
                              <p className="text-sm text-dainamics-light/70">{challenge.description}</p>

                              <div className="absolute top-3 right-3">
                                <div className={cn(
                                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                  selectedChallenges.includes(challenge.id)
                                    ? "border-dainamics-secondary bg-dainamics-primary"
                                    : "border-dainamics-light/30"
                                )}>
                                  {selectedChallenges.includes(challenge.id) && (
                                    <Check className="h-3 w-3 text-white" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center mt-8">
                        <div className="text-dainamics-light/70 text-sm">
                          {selectedChallenges.length} areas selected
                        </div>
                        <Button
                          onClick={handleNextStep}
                          disabled={!isStepValid()}
                          className={cn(
                            "relative overflow-hidden bg-gradient-to-r from-dainamics-cta to-[#FF8A00] hover:from-dainamics-cta hover:to-dainamics-cta text-white border-0",
                            !isStepValid() && "opacity-50 cursor-not-allowed"
                          )}
                        >
                          Analyze Selected Areas
                          <ArrowRight className="ml-2 h-4 w-4" />
                          <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Specific Questions */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-dainamics-light mb-2">
                          Tell us more about your specific challenges
                        </h3>
                        <p className="text-dainamics-light/70">Your answers will help us recommend the perfect AI solutions</p>
                      </div>

                      <div className="space-y-8">
                        {selectedChallenges.map((challenge) => (
                          <motion.div 
                            key={challenge} 
                            className="space-y-4 border-b border-dainamics-border/30 pb-6 mb-6 last:border-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-dainamics-secondary/20 flex items-center justify-center">
                                {businessChallenges.find(c => c.id === challenge)?.icon}
                              </div>
                              <h4 className="text-lg font-semibold bg-gradient-to-r from-dainamics-secondary to-dainamics-primary bg-clip-text text-transparent">
                                About your {businessChallenges.find(c => c.id === challenge)?.title.toLowerCase()} challenges:
                              </h4>
                            </div>
                            
                            {specificQuestions[challenge].map((question) => (
                              <div key={question.id} className="space-y-3 ml-4 pl-6 border-l-2 border-dainamics-border/20">
                                <p className="text-dainamics-light">{question.text}</p>
                                <div className="flex flex-wrap gap-3">
                                  {question.options.map((option) => (
                                    <motion.button
                                      key={option.value}
                                      className={cn(
                                        "px-4 py-2 rounded-full text-sm transition-all relative overflow-hidden",
                                        isOptionSelected(challenge, question.id, option.value)
                                          ? "bg-dainamics-primary/30 border border-dainamics-primary text-dainamics-light"
                                          : "bg-dainamics-card-alt/50 border border-dainamics-border/50 text-dainamics-light/70 hover:bg-dainamics-primary/10"
                                      )}
                                      onClick={() => toggleSpecificAnswer(challenge, question.id, option.value)}
                                      whileHover={{ y: -2 }}
                                      whileTap={{ scale: 0.97 }}
                                    >
                                      {option.label}
                                      {isOptionSelected(challenge, question.id, option.value) && (
                                        <motion.span 
                                          className="absolute inset-0 bg-dainamics-primary/10"
                                          initial={{ scale: 0, opacity: 0 }}
                                          animate={{ scale: 1, opacity: 1 }}
                                          transition={{ duration: 0.3 }}
                                        />
                                      )}
                                    </motion.button>
                                  ))}
                                </div>
                                {specificAnswers[`${challenge}-${question.id}`]?.length === 0 && (
                                  <p className="text-xs text-dainamics-cta/90">Please select at least one option</p>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex justify-between pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handlePrevStep}
                          className="border-dainamics-border text-dainamics-light/70 hover:bg-dainamics-primary/10 hover:text-dainamics-light hover:border-dainamics-primary/50"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        
                        <Button
                          onClick={handleNextStep}
                          disabled={!isStepValid()}
                          className={cn(
                            "relative overflow-hidden bg-gradient-to-r from-dainamics-cta to-[#FF8A00] hover:from-dainamics-cta hover:to-dainamics-cta text-white border-0",
                            !isStepValid() && "opacity-50 cursor-not-allowed"
                          )}
                        >
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                          <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact Information */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dainamics-primary/20 mb-4">
                          <Check className="h-8 w-8 text-dainamics-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-dainamics-light mb-2">
                          Your Personalized AI Recommendation is Ready!
                        </h3>
                        <p className="text-dainamics-light/70">Enter your details to receive your custom AI transformation plan</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto glass-morphism rounded-xl p-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-dainamics-light">Work Email*</Label>
                            <div className="relative">
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-dainamics-card-alt/50 border-dainamics-border/50 text-dainamics-light focus:border-dainamics-primary focus:ring-1 focus:ring-dainamics-primary"
                                required
                              />
                              <div className="absolute inset-0 rounded-md pointer-events-none border border-dainamics-primary/30 opacity-0 focus-within:opacity-100 transition-opacity"></div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-dainamics-light">Full Name*</Label>
                            <div className="relative">
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Smith"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="bg-dainamics-card-alt/50 border-dainamics-border/50 text-dainamics-light focus:border-dainamics-primary focus:ring-1 focus:ring-dainamics-primary"
                                required
                              />
                              <div className="absolute inset-0 rounded-md pointer-events-none border border-dainamics-primary/30 opacity-0 focus-within:opacity-100 transition-opacity"></div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-dainamics-light">Company Name</Label>
                            <div className="relative">
                              <Input
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Your Company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="bg-dainamics-card-alt/50 border-dainamics-border/50 text-dainamics-light focus:border-dainamics-primary focus:ring-1 focus:ring-dainamics-primary"
                              />
                              <div className="absolute inset-0 rounded-md pointer-events-none border border-dainamics-primary/30 opacity-0 focus-within:opacity-100 transition-opacity"></div>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3 pt-2">
                            <input
                              id="consent"
                              name="consent"
                              type="checkbox"
                              checked={formData.consent}
                              onChange={handleInputChange}
                              className="mt-1 rounded border-dainamics-border/50 bg-dainamics-card text-dainamics-primary focus:ring-dainamics-primary"
                              required
                            />
                            <Label htmlFor="consent" className="text-sm text-dainamics-light/70">
                              I agree to receive my AI recommendation and future updates from Dainamics
                            </Label>
                          </div>
                        </div>

                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handlePrevStep}
                            className="border-dainamics-border text-dainamics-light/70 hover:bg-dainamics-primary/10 hover:text-dainamics-light hover:border-dainamics-primary/50"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                          </Button>
                          
                          <Button
                            type="submit"
                            disabled={!isStepValid() || isSubmitting}
                            className={cn(
                              "relative overflow-hidden bg-gradient-to-r from-dainamics-primary to-dainamics-secondary hover:from-dainamics-primary hover:to-dainamics-primary text-white border-0",
                              (!isStepValid() || isSubmitting) && "opacity-50 cursor-not-allowed"
                            )}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                                Processing...
                              </>
                            ) : (
                              <>
                                Get My AI Recommendation
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                          </Button>
                        </div>
                      </form>
                      
                      <div className="text-center text-sm text-dainamics-light/50 pt-4">
                        <p className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 rounded-full border border-dainamics-light/30 flex items-center justify-center">
                            <Check className="w-2 h-2 text-dainamics-light/30" />
                          </span>
                          Your data is encrypted and secure
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Results Display */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-8"
                    >
                      <div className="text-center mb-8">
                        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-dainamics-primary to-dainamics-secondary mb-4">
                          <Brain className="h-10 w-10 text-white" />
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-dainamics-primary to-dainamics-secondary opacity-30 animate-pulse"></div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-dainamics-primary to-dainamics-secondary bg-clip-text text-transparent mb-2">
                          Your AI Transformation Plan
                        </h3>
                        <p className="text-dainamics-light/70 mb-6">
                          Based on your challenges, here are the Superhuman AI Agents that will revolutionize your business:
                        </p>
                      </div>

                      <div className="space-y-6">
                        {selectedChallenges.map((challenge, index) => {
                          const agent = agentRecommendations[challenge];
                          return (
                            <motion.div 
                              key={challenge}
                              className="bg-dainamics-card-alt/70 p-6 rounded-xl border-l-4 border-dainamics-primary relative overflow-hidden"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                              {/* Neural background effect */}
                              <div className="absolute inset-0 -z-10">
                                <div className="absolute top-0 left-0 w-full h-full">
                                  <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-dainamics-primary/5 rounded-full blur-xl"></div>
                                  <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-dainamics-secondary/5 rounded-full blur-xl"></div>
                                </div>
                              </div>

                              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                                <div className="flex items-center">
                                  <div className="w-12 h-12 mr-4 flex items-center justify-center bg-dainamics-primary/20 rounded-lg">
                                    {businessChallenges.find(c => c.id === challenge)?.icon}
                                  </div>
                                  <div>
                                    <motion.h4 
                                      className="text-xl font-bold text-dainamics-light"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: index * 0.2 + 0.2 }}
                                    >
                                      {agent.name}
                                    </motion.h4>
                                    <motion.p 
                                      className="text-dainamics-secondary text-sm"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: index * 0.2 + 0.3 }}
                                    >
                                      {agent.tagline}
                                    </motion.p>
                                  </div>
                                </div>
                                <div className="bg-dainamics-primary/20 px-3 py-1 rounded text-sm font-semibold text-dainamics-primary">
                                  RECOMMENDED
                                </div>
                              </div>

                              <div className="space-y-6">
                                <div>
                                  <h5 className="text-sm uppercase text-dainamics-light/50 tracking-wider mb-3">Key Features</h5>
                                  <ul className="space-y-3">
                                    {agent.features.map((feature, i) => (
                                      <motion.li 
                                        key={i} 
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 + 0.4 + (i * 0.1) }}
                                      >
                                        <div className="bg-dainamics-primary/20 p-1 rounded-full mr-3 mt-0.5">
                                          <Check className="h-3 w-3 text-dainamics-primary" />
                                        </div>
                                        <span className="text-dainamics-light/80">{feature}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h5 className="text-sm uppercase text-dainamics-light/50 tracking-wider mb-3">Impact Metrics</h5>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {agent.metrics.map((metric, i) => (
                                      <motion.div 
                                        key={i} 
                                        className="bg-dainamics-secondary/10 rounded-lg p-4 text-center"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.2 + 0.7 + (i * 0.1) }}
                                      >
                                        <div className="text-2xl font-bold text-dainamics-secondary mb-1">{metric.value}</div>
                                        <div className="text-xs text-dainamics-light/70">{metric.label}</div>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      <motion.div 
                        className="bg-dainamics-card-alt border border-dainamics-success/30 rounded-lg p-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <p className="text-dainamics-light">
                          We've sent your complete AI diagnosis to <span className="font-bold text-dainamics-success">{formData.email}</span>
                        </p>
                      </motion.div>

                      <motion.div 
                        className="flex flex-col md:flex-row justify-center gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Button 
                          className="bg-gradient-to-r from-dainamics-primary to-dainamics-secondary hover:opacity-90 text-white btn-glow"
                        >
                          Deploy Your AI Agents
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        
                        <Button 
                          variant="outline"
                          className="border-dainamics-primary text-dainamics-light hover:bg-dainamics-primary/10"
                        >
                          Schedule a Demo
                        </Button>
                        
                        <Button 
                          variant="ghost"
                          onClick={handleReset}
                          className="text-dainamics-light/70 hover:text-dainamics-light hover:bg-dainamics-light/5"
                        >
                          Restart Diagnosis
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

