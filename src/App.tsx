import React, { useState, Suspense, PropsWithChildren } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Garden from './components/Garden';
import ArchiveSection from './components/ArchiveSection';
import Contact from './components/Contact';

import backgroundImage from './assets/background.jpg';

const WaterWave = React.lazy(() => import('react-water-wave'));

// --- Type Definitions and Constants (No changes here) ---
const SECTION_NAMES = {
  home: 'home',
  about: 'about',
  projects: 'projects',
  garden: 'garden',
  archive: 'archive',
  contact: 'contact',
} as const;

type SectionName = typeof SECTION_NAMES[keyof typeof SECTION_NAMES];

// --- Reusable Layout Component (No changes here) ---
const MainLayout = ({ children, className = '', ...props }: PropsWithChildren<{ className?: string; [key: string]: any }>) => (
  <div 
    className={`min-h-screen w-full font-inter overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8 ${className}`}
    {...props}
  >
    {children}
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState<SectionName>(SECTION_NAMES.home);

  const handleNavigate = (section: SectionName) => setActiveSection(section);
  const handleBackToHome = () => setActiveSection(SECTION_NAMES.home);

  const renderSectionContent = () => {
    switch (activeSection) {
      case SECTION_NAMES.about:
        return <About onBack={handleBackToHome} />;
      case SECTION_NAMES.projects:
        return <Projects onBack={handleBackToHome} />;
      case SECTION_NAMES.garden:
        return <Garden onBack={handleBackToHome} />;
      case SECTION_NAMES.archive:
        return <ArchiveSection onBack={handleBackToHome} />;
      case SECTION_NAMES.contact:
        return <Contact onBack={handleBackToHome} />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  if (activeSection === SECTION_NAMES.home) {
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh', background: '#000' }}>
        {/* === THE NEW LAYERING LOGIC === */}

        {/* Layer 1: Static Background Image. Renders immediately, preventing a black screen. */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        />

        {/* Layer 2: WaterWave Effect. Lazy-loads and renders on top of the static image. */}
        {/* The `fallback={null}` is key. We don't need a visual fallback because the static image is already there. */}
        <Suspense fallback={null}>
          <WaterWave
            imageUrl={backgroundImage} // It uses the same image for a seamless transition
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2, // Sits on top of the static image
            }}
            dropRadius={3}
            perturbance={0.04}
            resolution={256}
          >
            {() => <></>}
          </WaterWave>
        </Suspense>

        {/* Layer 3: UI Content (Hero). Renders immediately on the highest layer. */}
        <MainLayout
          className="absolute top-0 left-0"
          style={{ zIndex: 3, pointerEvents: 'none' }}
        >
          <div style={{ pointerEvents: 'auto' }}>
            <Hero onNavigate={handleNavigate} />
          </div>
        </MainLayout>
      </div>
    );
  }

  // Render all other sections with the gradient background (no changes here)
  return (
    <MainLayout className="bg-gradient-radial from-pink-300 via-purple-300 to-blue-300">
      {renderSectionContent()}
    </MainLayout>
  );
}

export default App;
