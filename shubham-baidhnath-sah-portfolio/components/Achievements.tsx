
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

const Achievements: React.FC = () => {
  const certifications = [
    { title: "AI Skills Passport", issuer: "EY & Microsoft", icon: "solar:verified-check-linear" },
    { title: "Microsoft Copilot Productivity", issuer: "Microsoft & LinkedIn", icon: "solar:cpu-bolt-linear" },
    { title: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", icon: "solar:stars-linear" },
    { title: "Azure AI Essentials Professional", issuer: "Microsoft & LinkedIn", icon: "solar:cloud-settings-linear" }
  ];

  const achievementItems = [
    {
      text: "Cleared First Round of EY Techathon",
      icon: "solar:cup-star-linear",
      color: "text-yellow-400"
    },
    {
      text: "Participated in Smart India Hackathon (SIH)",
      icon: "solar:medal-ribbon-star-linear",
      color: "text-orange-400"
    },
    {
      text: "Pune Regional League Football Champions",
      icon: "solar:football-linear",
      color: "text-blue-400"
    },
    {
      text: "Kabaddi Finalist Pune ZP",
      icon: "solar:medal-star-circle-linear",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-24 px-6 bg-purple-900/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-10">Achievements</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {achievementItems.map((item, idx) => (
              <div key={idx} className="bg-black/40 border border-purple-500/30 px-6 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform cursor-default shadow-lg shadow-purple-500/5">
                <iconify-icon icon={item.icon} className={`${item.color} text-xl`}></iconify-icon>
                <span className="text-gray-200 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-10">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <a key={idx} href="#" className="glass-card p-6 rounded-xl hover:border-purple-500/50 group block">
                <iconify-icon icon={cert.icon} className="text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform"></iconify-icon>
                <h3 className="text-white text-sm font-medium leading-tight">{cert.title}</h3>
                <p className="text-gray-500 text-xs mt-2">{cert.issuer}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
