import React from 'react';
import { ArrowLeft, Heart, Coffee, Code } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 text-white">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group button-shadow hover:button-shadow-hover bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 border border-white/10"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        <span>Back</span>
      </button>
      
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">About Me</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              I'm obsessed with{' '}
              <a 
                href="https://www.darioamodei.com/essay/machines-of-loving-grace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-200"
              >
                <strong>AGI</strong>
              </a>{' '}
              and{' '}
              <a 
                href="https://situational-awareness.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-200"
              >
                <strong>the path to superintelligence</strong>
              </a>
              . To create something <em>more intelligent than us</em> to solve our fundamental problems and unlock{' '}
              <a 
                href="https://ia.samaltman.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-200"
              >
                <strong>an age of abundance</strong>
              </a>
              , where the cost of intelligence 🧠, energy ⚡, and space exploration 🚀 approaches zero.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              I spend most of my time on <strong>Twitter</strong> following AGI breakthroughs, watching people build incredible AI applications, and seeing how AI accelerates <strong>startup growth</strong> and creates <em>massive value</em> 💡. I'm currently in the{' '}
              <a 
                href="https://www.mindef.gov.sg/discareers/careers/digital-specialist-digispec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-200"
              >
                <strong>Digital Specialist programme</strong>
              </a>, but my mind is <em>always</em> on AGI.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              My <strong>optimistic guess</strong> puts AGI around{' '}
              <a 
                href="https://ai-2027.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-200"
              >
                <strong>2027</strong>
              </a>
              , and I want to be part of making that happen ✨.
            </p>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white/10 rounded-xl p-4 md:p-6 border border-white/20 backdrop-blur-sm card-shadow hover:card-shadow-hover transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <Heart size={18} className="text-pink-300 md:w-5 md:h-5" />
                Passions
              </h3>
              <ul className="space-y-2 text-white/80 text-sm md:text-base">
                <li>• Superintelligence</li>
                <li>• Model Behaviour</li>
                <li>• Mechanistic Interpretability</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4 md:p-6 border border-white/20 backdrop-blur-sm card-shadow hover:card-shadow-hover transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <Code size={18} className="text-blue-300 md:w-5 md:h-5" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://docs.python.org/3/tutorial/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                >
                  Python
                </a>
                <a 
                  href="https://x.com/karpathy/status/1886192184808149383" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                >
                  Vibe Coding
                </a>
                <a 
                  href="https://x.com/tobi/status/1935533422589399127" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                >
                  Context Engineering
                </a>
                <a 
                  href="https://x.com/60Minutes/status/1614785392456105985" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                >
                  Taste
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
