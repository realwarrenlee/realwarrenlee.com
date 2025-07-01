import React from 'react';
import { ArrowLeft, Baby, GraduationCap, Shield, Building } from 'lucide-react';

interface ArchiveSectionProps {
  onBack: () => void;
}

const ArchiveSection: React.FC<ArchiveSectionProps> = ({ onBack }) => {
  const timeline = [
    {
      year: '2025',
      items: [
        { 
          title: 'National Service - Basic Military Training', 
          description: 'Beginning military service and foundational training in the Singapore Armed Forces',
          type: 'Military', 
          date: '2025', 
          icon: Shield,
          url: 'https://www.mindef.gov.sg/army'
        },
        { 
          title: 'Defence Intelligence Service', 
          description: 'Specialized intelligence training and service with Singapore\'s defense intelligence unit',
          type: 'Intelligence', 
          date: '2025', 
          icon: Building,
          url: 'https://www.mindef.gov.sg/dis'
        },
        { 
          title: 'Nanyang Technological University', 
          description: 'Pursuing higher education at one of Singapore\'s premier technological universities',
          type: 'University', 
          date: '2025', 
          icon: GraduationCap,
          url: 'https://www.ntu.edu.sg/'
        }
      ]
    },
    {
      year: '2019',
      items: [
        { 
          title: 'River Valley High School', 
          description: 'Secondary education and Junior College at a distinguished institution known for academic excellence and holistic development',
          types: ['Secondary', 'Junior College'],
          date: '2019-2024', 
          icon: GraduationCap,
          url: 'https://www.rivervalleyhigh.moe.edu.sg/'
        }
      ]
    },
    {
      year: '2013',
      items: [
        { 
          title: 'Nanyang Primary School', 
          description: 'Primary education foundation at a school renowned for nurturing young minds and character development',
          type: 'Primary', 
          date: '2013-2018', 
          icon: GraduationCap,
          url: 'https://www.nyps.moe.edu.sg/'
        }
      ]
    },
    {
      year: '2006',
      items: [
        { 
          title: 'Born', 
          description: 'The beginning of the journey at Thomson Medical Centre, Singapore',
          type: 'Birth', 
          date: '2006', 
          icon: Baby,
          url: 'https://www.thomsonmedical.com/'
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Military': 'from-green-500 to-emerald-600',
      'Intelligence': 'from-slate-500 to-gray-600',
      'University': 'from-blue-500 to-indigo-600',
      'Secondary': 'from-purple-500 to-violet-600',
      'Junior College': 'from-indigo-500 to-purple-600',
      'Primary': 'from-orange-500 to-amber-600',
      'Birth': 'from-pink-500 to-rose-600'
    };
    return colors[type as keyof typeof colors] || 'from-gray-400 to-gray-600';
  };

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Archive</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
          <p className="text-white/80 mt-4 text-base md:text-lg">
            A timeline of milestones, experiences, and the journey that shaped who I am today.
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {timeline.map((yearGroup) => (
            <div key={yearGroup.year} className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white/90">{yearGroup.year}</h3>
              </div>
              
              <div className="space-y-3 ml-4 md:ml-6 border-l-2 border-white/20 pl-4 md:pl-6">
                {yearGroup.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 rounded-xl p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer backdrop-blur-sm block"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${getTypeColor(item.type || item.types?.[0] || '')} flex items-center justify-center flex-shrink-0`}>
                        <item.icon size={14} className="text-white md:w-4 md:h-4" />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <h4 className="font-semibold text-white group-hover:text-white/90 transition-colors duration-200 text-sm md:text-base">
                            {item.title}
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {item.types ? (
                              item.types.map((type) => (
                                <span key={type} className="bg-white/10 px-2 py-1 rounded-md text-xs text-white/70 border border-white/20">
                                  {type}
                                </span>
                              ))
                            ) : (
                              <span className="bg-white/10 px-2 py-1 rounded-md text-xs text-white/70 border border-white/20">
                                {item.type}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs text-white/50 font-mono">
                            {item.date}
                          </span>
                          <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-200">
                            Learn more →
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-6 border-t border-white/20">
          <p className="text-white/60 text-sm italic">
            "Every milestone is a stepping stone to the next chapter."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArchiveSection;