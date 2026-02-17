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

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: "solar:palette-round-linear",
      title: "Visual Design",
      color: "pink",
      skills: ["Graphic Designer", "Professional Editor", "Video Editing"]
    },
    {
      icon: "solar:devices-linear",
      title: "Development",
      color: "indigo",
      skills: ["Web Development", "Android Development", "React.js", "Tailwind CSS"]
    },
    {
      icon: "solar:smart-home-angle-linear",
      title: "Artificial Intelligence",
      color: "fuchsia",
      description: "Implementing AI workflows and intelligent logic into modern apps.",
      skills: ["AI Agents", "LLM Integration", "Prompt Engineering"],
      featured: true
    },
    {
      icon: "solar:terminal-linear",
      title: "Core Programming",
      color: "purple",
      skills: ["JavaScript / TS", "Java / Python", "C++ / DSA"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-black/50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900 to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Technical Arsenal</h2>
          <p className="text-gray-500">A blend of creativity and engineering excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <TiltCard key={idx} className={`glass-card p-6 rounded-2xl reveal group ${cat.featured ? 'border-purple-500/30' : ''}`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${cat.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : cat.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-400' : cat.color === 'fuchsia' ? 'bg-fuchsia-500/10 text-fuchsia-400' : cat.color === 'pink' ? 'bg-pink-500/10 text-pink-400' : 'bg-slate-500/10 text-slate-400'}`}>
                <iconify-icon icon={cat.icon} width="24"></iconify-icon>
              </div>
              <h3 className="text-white font-medium mb-3">{cat.title}</h3>
              {cat.description && <p className="text-xs text-gray-500 mb-3 leading-relaxed">{cat.description}</p>}
              <ul className="space-y-2 text-sm text-gray-400">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className={`w-1 h-1 rounded-full ${cat.color === 'purple' ? 'bg-purple-500' : cat.color === 'indigo' ? 'bg-indigo-500' : cat.color === 'fuchsia' ? 'bg-fuchsia-500' : 'bg-pink-500'}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
              {cat.featured && <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"></div>}
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;