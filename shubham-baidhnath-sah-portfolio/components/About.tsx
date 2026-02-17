
import React from 'react';
import TiltCard from './TiltCard';

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

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 reveal">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            Code, <span className="text-purple-400">Sports</span> & Innovation
          </h2>
          <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
            <p>
              Hi, I’m <span className="glass-premium-highlight px-3 py-1 rounded-xl text-white font-semibold">Shubham Baidhnath Sah</span>, a Computer Science student currently studying at <span className="text-white">Marathwada Mitra Mandal College (MMCC), Deccan</span>. I originally hail from the vibrant landscapes of <span className="text-white">Kesonaraynpur Nayar, Samastipur, Bihar</span>.
            </p>
            <p>
              My technical journey is driven by a deep passion for <strong className="text-white">Web Development, Android Development, and AI</strong>. I enjoy transforming complex problem statements into structured, real-world solutions, blending logic with creativity.
            </p>
            <p>
              Beyond the screen, I am a <strong className="text-white">Professional Athlete</strong>. I actively compete in <span className="text-white">Cricket and Football</span>, with <span className="text-purple-400 font-medium">Kabaddi</span> being my main discipline. This sporting background instills discipline, resilience, and strong team leadership skills that I bring to every engineering project.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center reveal">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full blur-[80px] opacity-20 animate-pulse-slow"></div>
            <TiltCard className="w-full h-full rounded-2xl border border-white/10 glass-panel flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
              <iconify-icon icon="solar:code-circle-linear" className="text-6xl text-purple-400 relative z-10 animate-float"></iconify-icon>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
