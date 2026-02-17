import React from 'react';

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

const Timeline: React.FC = () => {
  const education = [
    {
      institution: "Marathwada Mitra Mandal College (MMCC)",
      role: "Computer Science Student",
      status: "Currently Studying | Deccan, Pune",
      focus: "Web Development, Android, AI",
      active: true
    },
    {
      institution: "Ahilyadevi Holkar Iteach Eng Medium School",
      role: "1st – 10th Grade (Schooling)",
      status: "Academic Excellence",
      focus: "Foundational Education, Leadership & Communication"
    }
  ];

  const experience = [
    { label: "Design & Media", role: "Professional Editor & Designer", detail: "4-5 Years of Experience in high-end video editing and graphic design.", color: "pink" },
    { label: "Web Tech", role: "Web Developer", detail: "2 Years of Experience building modern, responsive web applications.", color: "purple" },
    { label: "Mobile Tech", role: "Android Development", detail: "Actively learning and building robust mobile experiences.", color: "indigo" },
    { label: "Leadership", role: "CEO & Project Lead", detail: "Managing teams and leading technical innovation at college projects.", color: "purple" }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        
        <div className="reveal">
          <div className="flex items-center gap-3 mb-8">
            <iconify-icon icon="solar:diploma-linear" className="text-purple-400 text-2xl"></iconify-icon>
            <h2 className="text-2xl font-semibold text-white">Education</h2>
          </div>
          <div className="border-l border-white/10 ml-3 space-y-10 pl-8 relative">
            {education.map((item, idx) => (
              <div key={idx} className="relative group">
                <span className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 bg-black transition-all duration-500 group-hover:border-purple-500 ${item.active ? 'border-purple-500 shadow-[0_0_15px_#a855f7]' : 'border-gray-700'}`}></span>
                <h3 className="text-white font-medium text-lg">{item.institution}</h3>
                <p className="text-purple-400 text-sm mb-1">{item.role}</p>
                <div className="text-gray-500 text-xs mb-2">{item.status}</div>
                <p className="text-gray-400 text-sm">Focus: {item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div className="flex items-center gap-3 mb-8">
            <iconify-icon icon="solar:users-group-rounded-linear" className="text-indigo-400 text-2xl"></iconify-icon>
            <h2 className="text-2xl font-semibold text-white">Professional Experience</h2>
          </div>
          <div className="space-y-4">
            {experience.map((item, idx) => (
              <div key={idx} className={`glass-card p-5 rounded-lg border-l-2 hover:bg-white/5 transition-colors ${item.color === 'purple' ? 'border-l-purple-500' : item.color === 'pink' ? 'border-l-pink-500' : 'border-l-indigo-500'}`}>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">{item.label}</div>
                <h3 className="text-white font-medium">{item.role}</h3>
                <p className="text-sm text-gray-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;