import React from 'react';
import TiltCard from './TiltCard';
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

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Nutrisnap",
      category: "Health Tech",
      color: "purple",
      icon: "solar:scanner-linear",
      description: "AI-powered nutrition analysis. Scan any food item to instantly see health safety ratings, nutrient breakdowns with interactive bar graphs, and healthy alternatives for 'risky' foods. Seamlessly switch between English and Hindi.",
      tags: ["AI/ML", "Health Data", "Dual Language", "React Native"],
      role: "Lead Developer",
      demoUrl: "#",
      githubUrl: "#",
      alignment: "left"
    },
    {
      title: "Mr365 Habit Tracker",
      category: "FinTech & Productivity",
      color: "indigo",
      icon: "solar:bill-list-linear",
      description: "A high-stakes accountability engine. Users commit to daily challenges; breaking a rule triggers a 1Rs penalty. Two consecutive breaks increase the 'tax' to 10Rs. Penalties are paid directly to admin Shubham Sah via an integrated QR scanner.",
      tags: ["Gamification", "QR Payments", "Logic Engine"],
      role: "Full Stack Developer",
      demoUrl: "#",
      githubUrl: "#",
      alignment: "right"
    },
    {
      title: "Modern Precision Calculator",
      category: "Utility",
      color: "pink",
      icon: "solar:calculator-linear",
      description: "A sleek, gesture-based calculation tool. Features a minimalist glassmorphic UI with advanced mathematical functions and a smooth, lag-free user experience designed for professional workflows.",
      tags: ["Logic", "UI/UX Design", "React"],
      role: "Frontend Developer",
      demoUrl: "#",
      githubUrl: "#",
      alignment: "left"
    },
    {
      title: "Personal Creative Portfolio",
      category: "Creative Engineering",
      color: "purple",
      icon: "solar:clapperboard-edit-linear",
      description: "A high-end digital showcase featuring custom WebGL particle simulations, magnetic physics interactions, and a responsive architecture designed to highlight professional engineering skills.",
      tags: ["React", "WebGL", "Tailwind", "Motion Design"],
      role: "Architect & Designer",
      demoUrl: "#",
      githubUrl: "#",
      alignment: "right"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 reveal">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter-custom text-white mb-4">Selected Works</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">A collection of innovative solutions blending technical complexity with intuitive design.</p>
      </div>

      <div className="space-y-32">
        {projects.map((proj, idx) => (
          <div key={idx} className={`group relative grid md:grid-cols-12 gap-8 items-center reveal`}>
            {/* Project Image/Visual Block */}
            <div className={`md:col-span-7 relative z-10 ${proj.alignment === 'right' ? 'order-1 md:order-2' : ''}`}>
              <TiltCard className={`relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 cursor-pointer group-hover:shadow-[0_0_50px_-10px_rgba(${proj.color === 'purple' ? '147,51,234' : proj.color === 'indigo' ? '99,102,241' : '236,72,153'},0.4)] transition-all duration-500`}>
                <div className={`aspect-video bg-gradient-to-br from-gray-800 to-black flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105`}>
                  <iconify-icon icon={proj.icon} className={`text-7xl ${proj.color === 'purple' ? 'text-purple-500' : proj.color === 'indigo' ? 'text-indigo-500' : 'text-pink-500'} opacity-40 mb-4`}></iconify-icon>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Overlay for "Show them my projects" feeling */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-3">
                      <a href={proj.githubUrl} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all text-white">
                        <iconify-icon icon="lucide:github" width="20"></iconify-icon>
                      </a>
                      <a href={proj.demoUrl} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all text-white">
                        <iconify-icon icon="solar:link-linear" width="20"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Content Card Overlay */}
            <div className={`md:col-span-5 z-20 ${proj.alignment === 'right' ? 'order-2 md:order-1' : 'md:-ml-12'}`}>
              <div className={`glass-panel p-10 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden ${proj.alignment === 'right' ? 'md:mr-[-3rem]' : ''}`}>
                {/* Decorative background glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-20 pointer-events-none rounded-full ${proj.color === 'purple' ? 'bg-purple-500' : proj.color === 'indigo' ? 'bg-indigo-500' : 'bg-pink-500'}`}></div>
                
                <div className={`${proj.color === 'purple' ? 'text-purple-400' : proj.color === 'indigo' ? 'text-indigo-400' : 'text-pink-400'} text-xs font-bold tracking-[0.2em] uppercase mb-4`}>
                  {proj.category}
                </div>
                
                <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-gradient transition-all">{proj.title}</h3>
                <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed font-light">{proj.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-wider text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-6">
                  <div className="text-xs text-gray-500">
                    <span className="block opacity-50 uppercase tracking-widest mb-1">Role</span>
                    <span className="text-gray-300 font-medium">{proj.role}</span>
                  </div>
                  <a href={proj.demoUrl} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest group/btn ${proj.color === 'purple' ? 'text-purple-400' : proj.color === 'indigo' ? 'text-indigo-400' : 'text-pink-400'}`}>
                    View Case Study
                    <iconify-icon icon="solar:arrow-right-linear" className="group-hover/btn:translate-x-2 transition-transform"></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;