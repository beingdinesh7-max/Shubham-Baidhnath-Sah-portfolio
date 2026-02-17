
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-white/5 relative bg-black">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      <p className="text-xs text-gray-600 font-medium tracking-wide">
        Designed & Developed by Shubham Baidhnath Sah
      </p>
    </footer>
  );
};

export default Footer;
