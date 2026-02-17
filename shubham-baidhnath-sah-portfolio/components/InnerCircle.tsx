
import React from 'react';
import TiltCard from './TiltCard';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'iconify-icon': any;
      }
    }
  }
}

const InnerCircle: React.FC = () => {
  return (
    <section id="circle" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter-custom text-white mb-4">The Inner Circle</h2>
        <p className="text-gray-500 max-w-xl mx-auto">Honoring the anchors of my life and the brotherhood that keeps me grounded.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Life's Greatest Person */}
        <div className="md:col-span-1 reveal">
          <TiltCard className="h-full glass-card p-8 rounded-3xl border-purple-500/20 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:heart-angle-bold" className="text-4xl text-purple-400"></iconify-icon>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">My Anchor</h3>
            <p className="text-purple-400 text-sm font-medium mb-4">Life's Greatest Person</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              The guiding light behind every success, the source of resilience, and the heartbeat of my journey.
            </p>
          </TiltCard>
        </div>

        {/* ASM Group */}
        <div className="md:col-span-1 reveal delay-100">
          <TiltCard className="h-full glass-card p-8 rounded-3xl border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute top-4 right-4 px-2 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Core Trio</div>
            <div className="mb-6">
              <iconify-icon icon="solar:users-group-two-rounded-bold" className="text-3xl text-indigo-400"></iconify-icon>
              <h3 className="text-2xl font-bold text-white mt-2">ASM</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group/member">
                <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-300 border border-indigo-500/30 group-hover/member:bg-indigo-500 group-hover/member:text-white transition-all">A</span>
                <span className="text-gray-300 font-medium">Aditya</span>
              </div>
              <div className="flex items-center gap-3 group/member">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-300 border border-purple-500/30 group-hover/member:bg-purple-500 group-hover/member:text-white transition-all">S</span>
                <span className="text-white font-semibold">Shubham</span>
              </div>
              <div className="flex items-center gap-3 group/member">
                <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-300 border border-indigo-500/30 group-hover/member:bg-indigo-500 group-hover/member:text-white transition-all">M</span>
                <span className="text-gray-300 font-medium">Manjunath</span>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-500 leading-relaxed italic">
              "Bound by ambition, driven by logic."
            </p>
          </TiltCard>
        </div>

        {/* Sapiens Group */}
        <div className="md:col-span-1 reveal delay-200">
          <TiltCard className="h-full glass-card p-8 rounded-3xl border-amber-500/20 relative overflow-hidden group">
            <div className="absolute top-4 right-4 px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-[10px] font-bold text-amber-400 uppercase tracking-widest">Sapiens</div>
            <div className="mb-6">
              <iconify-icon icon="solar:crown-minimalistic-bold" className="text-3xl text-amber-400"></iconify-icon>
              <h3 className="text-2xl font-bold text-white mt-2">The Brotherhood</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "Shubham", c: "amber" },
                { n: "Manjunath", c: "gray" },
                { n: "Aditya", c: "gray" },
                { n: "Padmalochan", c: "gray" },
                { n: "Prince", c: "gray" },
                { n: "Suhas", c: "gray" }
              ].map((member, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${member.n === 'Shubham' ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-gray-600'}`}></span>
                  <span className={`text-xs ${member.n === 'Shubham' ? 'text-white font-bold' : 'text-gray-400'}`}>{member.n}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest font-bold mb-1">Status</p>
              <p className="text-xs text-amber-200/70">Thinkers, Creators, Warriors.</p>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
};

export default InnerCircle;