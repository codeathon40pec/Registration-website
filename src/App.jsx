import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rules from './components/Rules';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Register from './components/Register';
import Footer from './components/Footer';
import Particles from './components/Particles';
import SuspenseFallback from './components/SuspenseFallback';
import BackgroundEffects from './components/BackgroundEffects';
import CodeathonTwo from './components/CodeathonTwo';
import CodeathonThree from './components/CodeathonThree';
import FloatingCountdown from './components/FloatingCountdown';
import { useEffect } from 'react';

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
      <main>
        <Hero />
        <About />
        <Rules />
        <Timeline />
        <Prizes />
        <Gallery />
        <Team />
        <Sponsors />
        <Register />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      {/* App Router */}
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
