import React, { useState, Suspense } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Garden from './components/Garden';
import ArchiveSection from './components/ArchiveSection';
import Contact from './components/Contact';

import backgroundImage from './assets/background.jpg';

const WaterWave = React.lazy(() => import('react-water-wave'));

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

  const renderHomeSection = () => (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <WaterWave
          imageUrl={backgroundImage}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          dropRadius={3}
          perturbance={0.04}
          resolution={256}
        >
          {() => <div style={{ width: '100%', height: '100%' }} />}
        </WaterWave>
      </Suspense>

      <div
        className="min-h-screen w-full font-inter overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <Hero onNavigate={setActiveSection} />
        </div>
      </div>
    </div>
  );

  if (activeSection === 'home') {
    return renderHomeSection();
  }

  return (
    <div className="min-h-screen w-full font-inter overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
      {renderSection()}
    </div>
  );
}

export default App;
