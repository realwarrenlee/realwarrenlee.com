import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageCircle, Send, Twitter, Instagram, Youtube, Linkedin, Music } from 'lucide-react';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/realwarrenlee' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/realwarrenlee' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@realwarrenlee' },
    { icon: Music, label: 'TikTok', href: 'https://tiktok.com/@realwarrenlee' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/realwarrenlee' }
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
          <p className="text-white/80 mt-4 text-base md:text-lg">
            I'd love to hear from you. Whether it's a project, collaboration, or just a hello.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-sm md:text-base"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-sm md:text-base"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200 backdrop-blur-sm resize-none text-sm md:text-base"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl px-4 md:px-6 py-2.5 md:py-3 text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 backdrop-blur-sm text-sm md:text-base"
              >
                <Send size={16} className="md:w-[18px] md:h-[18px]" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white/10 rounded-xl p-4 md:p-6 border border-white/20 backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <Mail size={18} className="text-blue-300 md:w-5 md:h-5" />
                Direct Contact
              </h3>
              <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
                Prefer email? You can reach me directly at:
              </p>
              <a 
                href="mailto:realwarrenlee@gmail.com" 
                className="text-blue-300 hover:text-blue-200 transition-colors duration-200 font-mono text-sm md:text-base break-all"
              >
                realwarrenlee@gmail.com
              </a>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4 md:p-6 border border-white/20 backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <MessageCircle size={18} className="text-green-300 md:w-5 md:h-5" />
                Connect
              </h3>
              <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
                Find me on social platforms:
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;