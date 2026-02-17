
import React, { useRef } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  // Fix: Updated onClick type to accept React.MouseEvent for compatibility with various event handlers
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'secondary' | 'ghost';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = "", href, onClick, type = 'ghost' }) => {
  const btnRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0, 0)';
  };

  const baseStyles = "group relative overflow-hidden rounded-full font-medium transition-all duration-300 flex items-center justify-center";
  
  const typeStyles = {
    primary: "bg-white text-black hover:scale-105",
    secondary: "bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 hover:border-purple-500/30 btn-glow",
    ghost: "text-white/70 hover:text-white"
  };

  const content = (
    <span className="relative z-10">
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        className={`${baseStyles} ${typeStyles[type]} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={`${baseStyles} ${typeStyles[type]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
};

export default MagneticButton;
