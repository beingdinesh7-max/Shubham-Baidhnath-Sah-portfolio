
import React, { useEffect, useState } from 'react';
import MagneticButton from './MagneticButton';

// Fix: Augment React's JSX namespace to resolve 'Property iconify-icon does not exist' errors
declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'iconify-icon': any;
      }
    }
  }
}

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroStyle = {
    transform: scrolled < 800 ? `translateY(${scrolled * 0.4}px)` : 'none',
    opacity: scrolled < 800 ? 1 - (scrolled / 700) : 0,
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleViewProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement('projects');
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="text-center z-10 max-w-4xl space-y-8" style={heroStyle}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Open to Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter-custom text-white leading-[1.1]">
          <span className="glass-premium-highlight px-6 py-2 rounded-3xl">
            Shubham <br className="md:hidden" /> Baidhnath Sah
          </span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-400 tracking-tight font-light">
          Building Web, Android & AI experiences with <br className="hidden md:block" />
          <span className="text-gradient font-medium">code, athleticism, and creativity.</span>
        </p>

        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
          Computer Science Student | Web & Android Developer | Professional Athlete
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <MagneticButton onClick={handleViewProjects} type="primary" className="px-10 py-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="flex items-center gap-2">
              Explore Projects 
              <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </span>
          </MagneticButton>
          <MagneticButton href="mailto:shubhamsah176@gmail.com" type="secondary" className="px-10 py-4">
            Contact Me
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <iconify-icon icon="solar:double-alt-arrow-down-linear" className="text-white text-2xl"></iconify-icon>
      </div>
    </section>
  );
};

export default Hero;
