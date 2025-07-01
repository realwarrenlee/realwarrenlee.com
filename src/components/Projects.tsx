import React from 'react';
import { ArrowLeft, ExternalLink, Github, Star } from 'lucide-react';

interface ProjectsProps {
  onBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  const projects = [
    {
      title: 'Dreams of a Machine',
      description: 'An AI-powered creative platform that transforms ideas into visual narratives.',
      tags: [
        { name: 'Vibe Coding', url: null },
        { name: 'Context Engineering', url: null },
        { name: 'Bolt', url: 'https://bolt.new/' }
      ],
      status: 'Featured',
      gradient: 'from-pink-400 to-purple-600',
      demoUrl: 'https://dreamsofamachine.netlify.app/'
      codeUrl: 'https://github.com/realwarrenlee/dreamsofamachine'
    },
    {
      title: 'Mindful Moments',
      description: 'A minimalist meditation app focused on micro-moments of mindfulness.',
      tags: [
        { name: 'React Native', url: null },
        { name: 'Expo', url: null },
        { name: 'Design', url: null }
      ],
      status: 'Live',
      gradient: 'from-blue-400 to-teal-600'
    },
    {
      title: 'CodePoetry',
      description: 'Interactive code visualization tool that turns algorithms into beautiful art.',
      tags: [
        { name: 'D3.js', url: null },
        { name: 'WebGL', url: null },
        { name: 'TypeScript', url: null }
      ],
      status: 'Open Source',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      title: 'Harmony Hub',
      description: 'Collaborative music creation platform for remote artists.',
      tags: [
        { name: 'WebRTC', url: null },
        { name: 'Node.js', url: null },
        { name: 'Socket.io', url: null }
      ],
      status: 'Beta',
      gradient: 'from-orange-400 to-red-600'
    },
    {
      title: 'Zen Focus',
      description: 'Distraction-free writing environment with ambient soundscapes.',
      tags: [
        { name: 'Electron', url: null },
        { name: 'React', url: null },
        { name: 'Web Audio', url: null }
      ],
      status: 'Live',
      gradient: 'from-indigo-400 to-purple-600'
    },
    {
      title: 'DataFlow',
      description: 'Visual data pipeline builder for non-technical users.',
      tags: [
        { name: 'React Flow', url: null },
        { name: 'Python', url: null },
        { name: 'FastAPI', url: null }
      ],
      status: 'In Development',
      gradient: 'from-teal-400 to-cyan-600'
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
      
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Projects</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white/10 rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <Star size={18} className="text-white md:w-5 md:h-5" />
                  </div>
                  <span className="bg-white/10 px-2 py-1 rounded-full text-xs text-white/80 border border-white/20">
                    {project.status}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    tag.url ? (
                      <a
                        key={tag.name}
                        href={tag.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 px-2 py-1 rounded-md text-xs text-white/70 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tag.name}
                      </a>
                    ) : (
                      <span key={tag.name} className="bg-white/10 px-2 py-1 rounded-md text-xs text-white/70 border border-white/20">
                        {tag.name}
                      </span>
                    )
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <button 
                    onClick={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm">
                    <Github size={14} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
