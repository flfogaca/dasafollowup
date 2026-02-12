import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import TechnicalScope from './components/TechnicalScope';
import Architecture from './components/Architecture';
import KPIsDashboard from './components/KPIsDashboard';
import ROICalculator from './components/ROICalculator';
import InteractiveDemo from './components/InteractiveDemo';
import EffortEstimate from './components/EffortEstimate';
import Timeline from './components/Timeline';
import PostPoC from './components/PostPoC';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';
import Documentation from './components/Documentation';
import SolutionExplorer from './components/SolutionExplorer';
import Roadmap from './components/Roadmap';
import PropostaPDF from './pages/PropostaPDF';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProposal, setShowProposal] = useState(
    window.location.hash === '#proposta'
  );

  useEffect(() => {
    const handleHash = () => {
      setShowProposal(window.location.hash === '#proposta');
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (showProposal) return;
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showProposal]);

  if (showProposal) {
    return <PropostaPDF />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 z-50" style={{ width: `${scrollProgress}%` }} />

      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-16">
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="solution-explorer" className="snap-start">
          <SolutionExplorer />
        </section>

        <section id="documentation" className="snap-start bg-slate-900/50">
          <Documentation />
        </section>

        <section id="executive-summary" className="snap-start">
          <ExecutiveSummary />
        </section>

        <section id="technical-scope" className="snap-start">
          <TechnicalScope />
        </section>

        <section id="architecture" className="snap-start bg-slate-900/50">
          <Architecture />
        </section>

        <section id="kpis" className="snap-start">
          <KPIsDashboard />
        </section>

        <section id="roi" className="snap-start bg-slate-900/50">
          <ROICalculator />
        </section>

        <section id="demo" className="snap-start">
          <InteractiveDemo />
        </section>

        <section id="effort-estimate" className="snap-start bg-slate-900/50">
          <EffortEstimate />
        </section>

        <section id="timeline" className="snap-start">
          <Timeline />
        </section>

        <section id="post-poc" className="snap-start bg-slate-900/50">
          <PostPoC />
        </section>

        <section id="roadmap" className="snap-start">
          <Roadmap />
        </section>

        <section id="next-steps" className="snap-start bg-slate-900/50">
          <NextSteps />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
