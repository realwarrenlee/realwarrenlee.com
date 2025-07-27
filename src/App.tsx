import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Garden from './components/Garden';
import ArchiveSection from './components/ArchiveSection';
import Contact from './components/Contact';

const HomeRoute = () => {
  const navigate = useNavigate();
  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };
  return <Hero onNavigate={handleNavigate} />;
};

const createBackRoute = (Component: React.FC<{ onBack: () => void }>) => {
  return () => {
    const navigate = useNavigate();
    const handleBack = () => navigate('/');
    return <Component onBack={handleBack} />;
  };
};

const AboutRoute = createBackRoute(About);
const ProjectsRoute = createBackRoute(Projects);
const GardenRoute = createBackRoute(Garden);
const ArchiveRoute = createBackRoute(ArchiveSection);
const ContactRoute = createBackRoute(Contact);

function App() {
  return (
    <div className="min-h-screen w-full font-inter bg-gradient-radial from-pink-300 via-purple-300 to-blue-300 overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/projects" element={<ProjectsRoute />} />
        <Route path="/garden" element={<GardenRoute />} />
        <Route path="/archive" element={<ArchiveRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
    </div>
  );
}

export default App;