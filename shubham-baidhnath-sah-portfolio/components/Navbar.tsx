
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'top' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'top')}
          className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] group-hover:scale-125 transition-transform"></span>
          SS
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            href="#skills" 
            onClick={(e) => scrollToSection(e, 'skills')}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a 
            href="#circle" 
            onClick={(e) => scrollToSection(e, 'circle')}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Circle
          </a>
          <a 
            href="#comments" 
            onClick={(e) => scrollToSection(e, 'comments')}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Comments
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>

        <a 
          href="mailto:shubhamsah176@gmail.com"
          className="px-4 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-500/30 transition-all text-white"
        >
          Email Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
