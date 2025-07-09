import React, { useState } from 'react';
import { User, Code, Flower, Archive, Mail, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Garden from './components/Garden';
import ArchiveSection from './components/ArchiveSection';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About onBack={() => setActiveSection('home')} />;
      case 'projects':
        return <Projects onBack={() => setActiveSection('home')} />;
      case 'garden':
        return <Garden onBack={() => setActiveSection('home')} />;
      case 'archive':
        return <ArchiveSection onBack={() => setActiveSection('home')} />;
      case 'contact':
        return <Contact onBack={() => setActiveSection('home')} />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen w-full font-inter bg-gradient-radial from-pink-300 via-purple-300 to-blue-300 overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
      {renderSection()}
    </div>
  );
}

export default App;