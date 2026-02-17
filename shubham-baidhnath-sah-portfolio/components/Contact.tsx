import React from 'react';
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

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-purple-900/30 to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter-custom text-white mb-6">Let's Build The Future</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">Open for hackathons, collaborations, and internship opportunities.</p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <MagneticButton href="mailto:shubhamsah176@gmail.com" type="primary" className="px-8 py-4 bg-white text-black text-sm font-bold">
            <span className="flex items-center gap-2">
              <iconify-icon icon="solar:letter-linear"></iconify-icon>
              Email Me
            </span>
          </MagneticButton>
          
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-white">
              <iconify-icon icon="lucide:github" width="20"></iconify-icon>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-blue-400">
              <iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
            </a>
            <a href="https://instagram.com/shubhamsah4726" target="_blank" rel="noopener noreferrer" title="Instagram: shubhamsah4726" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-pink-500">
              <iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
            </a>
            <a href="#" className="px-6 py-4 flex items-center gap-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-300 text-sm font-medium">
              <iconify-icon icon="solar:file-text-linear" width="16"></iconify-icon>
              Resume
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-gray-500 text-sm">
          <p>Instagram Handle: <span className="text-pink-400 font-medium">shubhamsah4726</span></p>
          <p>Email: <span className="text-purple-400 font-medium">shubhamsah176@gmail.com</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;