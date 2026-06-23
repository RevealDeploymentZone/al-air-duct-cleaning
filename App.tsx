import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { statesData } from './data/cities';

// Pages
import Home from './pages/Home';
import WhyChooseUs from './pages/WhyChooseUs';
import NadcaCertified from './pages/NadcaCertified';
import IndoorAirQuality from './pages/IndoorAirQuality';
import CommercialDuctCleaning from './pages/CommercialDuctCleaning';
import PostConstructionCleaning from './pages/PostConstructionCleaning';
import MoldRemediationDucts from './pages/MoldRemediationDucts';
import ServiceArea from './pages/ServiceArea';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import CityPage from './pages/CityPage';

import { ArrowUp, Sparkles, Award, ShieldAlert } from 'lucide-react';

export default function App() {
  const [currentHash, setCurrentHash] = useState<string>('/home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor URL hash for client-side routing
  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.substring(1);
      if (!hash || hash === '/') {
        hash = '/home';
        window.location.hash = '#/home';
      }
      setCurrentHash(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initialize
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for floating helper button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (pathStr: string) => {
    window.location.hash = `#${pathStr}`;
  };

  // Determine if we are on a specific city page
  const pathParts = currentHash.split('/').filter(Boolean);
  let activeCityPhone: string | undefined = undefined;

  if (pathParts.length === 2) {
    const [stateSlug, citySlug] = pathParts;
    const stateObj = statesData.find(s => s.slug === stateSlug.toLowerCase());
    const cityObj = stateObj?.cities.find(c => c.slug === citySlug.toLowerCase());
    if (cityObj) {
      activeCityPhone = cityObj.phone;
    }
  }

  const renderCurrentPage = () => {
    if (pathParts.length === 2) {
      const [stateSlug, citySlug] = pathParts;
      return (
        <CityPage 
          stateSlug={stateSlug} 
          citySlug={citySlug} 
          onNavigate={handleNavigation} 
        />
      );
    }

    switch (currentHash) {
      case '/home':
        return <Home onNavigate={handleNavigation} />;
      case '/why-choose-us':
        return <WhyChooseUs onNavigate={handleNavigation} />;
      case '/nadca-certified':
        return <NadcaCertified onNavigate={handleNavigation} />;
      case '/indoor-air-quality':
        return <IndoorAirQuality />;
      case '/commercial-duct-cleaning':
        return <CommercialDuctCleaning onNavigate={handleNavigation} />;
      case '/post-construction-cleaning':
        return <PostConstructionCleaning onNavigate={handleNavigation} />;
      case '/mold-remediation-ducts':
        return <MoldRemediationDucts onNavigate={handleNavigation} />;
      case '/service-area':
        return <ServiceArea onNavigate={handleNavigation} />;
      case '/faq':
        return <Faq />;
      case '/blog':
        return <Blog onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between selection:bg-amber-600 selection:text-white overflow-x-hidden antialiased">
      
      {/* Dynamic Navigation Header */}
      <Navbar currentPath={currentHash} onNavigate={handleNavigation} activeCityPhone={activeCityPhone} />

      {/* Primary Transition Screen Stage */}
      <main className="flex-grow pb-16">
        {renderCurrentPage()}
      </main>

      {/* Dynamic Footer Citation Block */}
      <Footer onNavigate={handleNavigation} activeCityPhone={activeCityPhone} />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-amber-600 text-white shadow-2xl hover:bg-amber-700 hover:scale-105 active:scale-95 transition-all text-xs font-bold flex items-center justify-center cursor-pointer z-40 outline-none"
          title="Scroll To Top"
        >
          <ArrowUp size={18} className="stroke-[3px]" />
        </button>
      )}

    </div>
  );
}
