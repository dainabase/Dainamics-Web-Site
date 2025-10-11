import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  portfolioProjects,
  getFeaturedProjects,
  categoryColors,
  complexityColors,
  type PortfolioProject
} from '@/data/portfolio';
import { iconMapper } from '@/utils/iconMapper';
import { ArrowRight, Sparkles, X, Zap, Target } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter(project => {
      if (project.featured) return false;
      if (selectedCategory && project.category !== selectedCategory) return false;
      return true;
    });
  }, [selectedCategory]);

  return (
    <div ref={containerRef} className="min-h-screen bg-dainamics-background text-dainamics-light overflow-hidden">
      <Navigation />

      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 80%)`
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-dainamics-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      <section className="relative pt-40 pb-32 px-4 md:px-8 lg:px-16 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold mb-8 relative"
            >
              <span className="inline-block">
                {['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block hover:text-dainamics-primary transition-colors cursor-default"
                    whileHover={{
                      scale: 1.2,
                      rotate: [-5, 5, -5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {Object.entries(categoryColors).map(([key, color], index) => (
                <motion.button
                  key={key}
                  onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="relative px-6 py-3 rounded-2xl font-semibold overflow-hidden group"
                  style={{
                    backgroundColor: selectedCategory === key ? color : 'transparent',
                    border: `2px solid ${color}`,
                    color: selectedCategory === key ? '#0A0A0F' : color
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20"
                    style={{
                      background: `linear-gradient(90deg, ${color}, transparent)`
                    }}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10">
                    {key === 'ia' ? 'Intelligence Artificielle' :
                     key === 'automatisation' ? 'Automatisation' : 'Développement'}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {featuredProjects.map((project, index) => (
                <MagneticCard
                  key={project.id}
                  project={project}
                  index={index}
                  onHover={setHoveredCard}
                  onClick={setActiveProject}
                  isHovered={hoveredCard === project.id}
                />
              ))}
            </div>

            <div className="relative mb-12">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-gradient-to-r from-transparent via-dainamics-primary to-transparent"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-dainamics-primary rounded-full"
              >
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-dainamics-primary rounded-full"
                />
              </motion.div>
            </div>

            <BentoGrid projects={filteredProjects} onProjectClick={setActiveProject} />
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function MagneticCard({ project, index, onHover, onClick, isHovered }: {
  project: PortfolioProject;
  index: number;
  onHover: (id: string | null) => void;
  onClick: (project: PortfolioProject) => void;
  isHovered: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]));

  const categoryColor = categoryColors[project.category];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 5);
    y.set((e.clientY - centerY) / 5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onHover(null);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
      className="relative cursor-pointer"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative h-full rounded-3xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${categoryColor}15 0%, transparent 100%)`,
          border: `1px solid ${categoryColor}40`,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="absolute inset-0 bg-dainamics-background/40 backdrop-blur-sm" />

        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${categoryColor}20, transparent 70%)`
          }}
        />

        <div className="relative p-8 h-full" style={{ transform: "translateZ(50px)" }}>
          <div className="flex items-start justify-between mb-6">
            <Badge
              className="px-4 py-2"
              style={{
                backgroundColor: `${categoryColor}30`,
                color: categoryColor,
                border: `1px solid ${categoryColor}`,
                boxShadow: `0 0 20px ${categoryColor}40`
              }}
            >
              {project.category.toUpperCase()}
            </Badge>

            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-6 h-6" style={{ color: categoryColor }} />
            </motion.div>
          </div>

          <h3 className="text-3xl font-bold mb-3 text-dainamics-light">
            {project.title}
          </h3>

          <p className="text-dainamics-light/60 mb-6">
            {project.client} • {project.industry}
          </p>

          <p className="text-dainamics-light/80 leading-relaxed mb-8 line-clamp-3">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {Object.values(project.results).map((result, idx) => {
              if (!result) return null;
              const Icon = iconMapper[result.icon as keyof typeof iconMapper];

              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center p-4 rounded-xl"
                  style={{
                    backgroundColor: `${categoryColor}10`,
                    border: `1px solid ${categoryColor}30`
                  }}
                >
                  {Icon && (
                    <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: categoryColor }} />
                  )}
                  <div className="text-xl font-bold mb-1" style={{ color: categoryColor }}>
                    {result.value}
                  </div>
                  <div className="text-xs text-dainamics-light/60">
                    {result.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2"
          style={{ backgroundColor: categoryColor }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

function BentoGrid({ projects, onProjectClick }: {
  projects: PortfolioProject[];
  onProjectClick: (project: PortfolioProject) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {projects.map((project, index) => {
        const categoryColor = categoryColors[project.category];
        const size = index % 7 === 0 ? 'lg:col-span-2 lg:row-span-2' :
                     index % 5 === 0 ? 'lg:col-span-2' : '';

        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 10,
              transition: { duration: 0.2 }
            }}
            onClick={() => onProjectClick(project)}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${size}`}
            style={{
              background: `linear-gradient(135deg, ${categoryColor}10 0%, transparent 100%)`,
              border: `1px solid ${categoryColor}30`
            }}
          >
            <div className="absolute inset-0 bg-dainamics-background/60 backdrop-blur-sm" />

            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 0% 0%, ${categoryColor}20, transparent 70%)`
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="relative p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <Badge
                  style={{
                    backgroundColor: `${categoryColor}20`,
                    color: categoryColor,
                    border: `1px solid ${categoryColor}`
                  }}
                >
                  {project.category}
                </Badge>
                <motion.div
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="w-5 h-5" style={{ color: categoryColor }} />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-dainamics-light group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(to right, ${categoryColor}, ${categoryColors.accent})`
                }}
              >
                {project.title}
              </h3>

              <p className="text-sm text-dainamics-light/60 mb-4">
                {project.industry}
              </p>

              <div className="mt-auto">
                {Object.values(project.results).slice(0, 1).map((result, idx) => {
                  if (!result) return null;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="text-2xl font-bold" style={{ color: categoryColor }}>
                        {result.value}
                      </div>
                      <div className="text-sm text-dainamics-light/60">
                        {result.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <motion.div
                className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-20"
                style={{ backgroundColor: categoryColor }}
                whileHover={{ scale: 1.5 }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function ProjectModal({ project, onClose }: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  const categoryColor = categoryColors[project.category];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dainamics-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, rotateX: -90 }}
        animate={{ scale: 1, rotateX: 0 }}
        exit={{ scale: 0.8, rotateX: 90 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8"
        style={{
          background: `linear-gradient(135deg, ${categoryColor}15 0%, transparent 100%)`,
          border: `2px solid ${categoryColor}`,
          boxShadow: `0 0 60px ${categoryColor}40`
        }}
      >
        <motion.button
          onClick={onClose}
          whileHover={{ rotate: 90, scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: `${categoryColor}20`,
            border: `1px solid ${categoryColor}`
          }}
        >
          <X className="w-5 h-5" style={{ color: categoryColor }} />
        </motion.button>

        <Badge
          className="mb-6"
          style={{
            backgroundColor: `${categoryColor}30`,
            color: categoryColor,
            border: `1px solid ${categoryColor}`
          }}
        >
          {project.category.toUpperCase()}
        </Badge>

        <h2 className="text-4xl font-bold mb-4 text-dainamics-light">
          {project.title}
        </h2>

        <p className="text-xl text-dainamics-light/60 mb-8">
          {project.client} • {project.industry} • {project.year}
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: categoryColor }}>
              Description
            </h3>
            <p className="text-dainamics-light/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: categoryColor }}>
              Défi
            </h3>
            <p className="text-dainamics-light/80 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: categoryColor }}>
              Solution
            </h3>
            <p className="text-dainamics-light/80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {Object.values(project.results).map((result, idx) => {
            if (!result) return null;
            const Icon = iconMapper[result.icon as keyof typeof iconMapper];

            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl text-center"
                style={{
                  backgroundColor: `${categoryColor}10`,
                  border: `1px solid ${categoryColor}30`
                }}
              >
                {Icon && (
                  <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: categoryColor }} />
                )}
                <div className="text-2xl font-bold mb-1" style={{ color: categoryColor }}>
                  {result.value}
                </div>
                <div className="text-sm text-dainamics-light/60">
                  {result.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1 text-sm rounded-full"
              style={{
                backgroundColor: `${categoryColor}10`,
                color: categoryColor,
                border: `1px solid ${categoryColor}30`
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {project.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-xl"
            style={{
              backgroundColor: `${categoryColor}10`,
              borderLeft: `4px solid ${categoryColor}`
            }}
          >
            <p className="text-dainamics-light/80 italic mb-4 text-lg">
              "{project.testimonial.quote}"
            </p>
            <div>
              <div className="font-semibold text-dainamics-light">
                {project.testimonial.author}
              </div>
              <div className="text-sm text-dainamics-light/60">
                {project.testimonial.role}, {project.testimonial.company}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Button
            className="w-full py-6 text-lg font-semibold"
            style={{
              backgroundColor: categoryColor,
              color: '#0A0A0F'
            }}
          >
            Discuter de ce projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
