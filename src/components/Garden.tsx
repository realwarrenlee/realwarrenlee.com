import React from 'react';
import { ArrowLeft, Scaling as Seedling, BookOpen, Lightbulb, Calendar } from 'lucide-react';

interface GardenProps {
  onBack: () => void;
}

const Garden: React.FC<GardenProps> = ({ onBack }) => {
  const thoughts = [
    {
      title: 'On Creative Constraints',
      excerpt: 'Limitations often become the fertile ground where innovation blooms most beautifully. When we embrace constraints rather than fight them, we discover unexpected pathways to solutions that surprise even ourselves.',
      date: '2024-01-15',
      type: 'Reflection',
      icon: Lightbulb,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'The Art of Intentional Design',
      excerpt: 'Every pixel, every interaction, every moment of pause carries meaning. Design is not just about making things beautiful—it\'s about creating experiences that resonate with the human soul.',
      date: '2024-01-10',
      type: 'Essay',
      icon: BookOpen,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Growing Ideas',
      excerpt: 'Like tending a garden, nurturing creative ideas requires patience, care, and the right environment. Some thoughts need time to germinate before they can bloom into something meaningful.',
      date: '2024-01-05',
      type: 'Thought',
      icon: Seedling,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Digital Minimalism',
      excerpt: 'In a world of infinite possibilities, the power lies not in what we can add, but in what we choose to leave out. Simplicity is the ultimate sophistication.',
      date: '2023-12-28',
      type: 'Philosophy',
      icon: Calendar,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 text-white">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        <span>Back</span>
      </button>
      
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Digital Garden</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
          <p className="text-white/80 mt-4 text-base md:text-lg">
            A collection of growing thoughts, ideas, and reflections. This space evolves as I do.
          </p>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          {thoughts.map((thought, index) => (
            <div key={index} className="group bg-white/10 rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-start gap-3 md:gap-4">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${thought.color} flex items-center justify-center flex-shrink-0`}>
                  <thought.icon size={18} className="text-white md:w-5 md:h-5" />
                </div>
                
                <div className="flex-1 space-y-2 md:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-white/90 transition-colors duration-200">
                      {thought.title}
                    </h3>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs text-white/70 border border-white/20 self-start">
                      {thought.type}
                    </span>
                  </div>
                  
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    {thought.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs md:text-sm text-white/60 font-mono">
                      {thought.date}
                    </span>
                    <span className="text-xs md:text-sm text-white/60 group-hover:text-white/80 transition-colors duration-200">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-6">
          <p className="text-white/60 text-sm italic">
            "In the garden of the mind, every thought is a seed waiting to bloom."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Garden;