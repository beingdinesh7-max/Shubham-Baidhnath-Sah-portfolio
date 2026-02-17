
import React, { useState } from 'react';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

interface Comment {
  name: string;
  text: string;
  date: string;
}

const Comments: React.FC = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    { name: "Aditya", text: "Amazing portfolio, Shubham! The logic behind Mr365 is brilliant.", date: "Just now" },
    { name: "Manjunath", text: "Proud of the work we do. Sapiens for life!", date: "2 hours ago" }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newComment: Comment = {
        name,
        text,
        date: "Just now"
      };
      setComments([newComment, ...comments]);
      setName('');
      setText('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="comments" className="py-24 px-6 max-w-5xl mx-auto relative">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter-custom text-white mb-4">Guestbook</h2>
        <p className="text-gray-500">Leave a note or share your feedback.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Form */}
        <div className="md:col-span-2 reveal">
          <TiltCard className="glass-panel p-8 rounded-3xl border-white/10 sticky top-24">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Your Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Message</label>
                <textarea 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Write something..."
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 bg-white text-black text-sm font-bold rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Posting...' : 'Post Comment'}
                  {!isSubmitting && <iconify-icon icon="solar:chat-round-line-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>}
                </span>
              </button>
            </form>
          </TiltCard>
        </div>

        {/* List */}
        <div className="md:col-span-3 space-y-6 reveal delay-100 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {comments.map((comment, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border-white/5 group hover:border-purple-500/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-purple-500/20">
                    {comment.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{comment.name}</h4>
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">{comment.date}</span>
                  </div>
                </div>
                <iconify-icon icon="solar:quote-bold" className="text-white/10 text-2xl"></iconify-icon>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed italic">"{comment.text}"</p>
            </div>
          ))}
          
          {comments.length === 0 && (
            <div className="text-center py-20 opacity-30">
              <iconify-icon icon="solar:ghost-linear" className="text-5xl mb-4"></iconify-icon>
              <p className="text-sm italic">No comments yet. Be the first!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comments;
