import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rules from './components/Rules';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Gallery from './components/Gallery';
import CoreCrew from './components/Team';
import Partners from './components/Partners';
import Register from './components/Register';
import Footer from './components/Footer';
import Particles from './components/Particles';
import SuspenseFallback from './components/SuspenseFallback';
import BackgroundEffects from './components/BackgroundEffects';
import CodeathonTwo from './components/CodeathonTwo';
import CodeathonThree from './components/CodeathonThree';
import FloatingCountdown from './components/FloatingCountdown';
import { useEffect } from 'react';
import { useAudio } from './context/AudioContext';

// Wrapper to handle scroll-to-hash
const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function MainContent() {
  return (
    <>
      <Navbar />
      <main className="relative z-30">
        <Hero />
        <About />
        <Rules />
        <Timeline />
        <Prizes />
        <Gallery />
        <CoreCrew />
        <Partners />
        <Register />
      </main>
      <Footer />
    </>
  );
}

// Component to handle audio state based on current route
const AudioRouteHandler = () => {
  const location = useLocation();
  // Safe check for useAudio in case it's used outside provider (shouldn't happen here)
  const audioContext = useAudio ? useAudio() : null;

  useEffect(() => {
    if (!audioContext) return;

    const { suspendAudio, resumeAudio } = audioContext;
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      resumeAudio();
    } else {
      suspendAudio();
    }
  }, [location.pathname, audioContext?.suspendAudio, audioContext?.resumeAudio]);

  return null;
};

function App() {
  return (
    <Router>
      {/* App Router */}
      <AudioRouteHandler />
      <ScrollToHashElement />
      <BackgroundEffects />
      <Particles />
      <FloatingCountdown />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/codeathon2" element={<CodeathonTwo />} />
        <Route path="/codeathon3" element={<CodeathonThree />} />
      </Routes>
    </Router>
  );
}

export default App;
