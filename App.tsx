import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { statesData } from './cities';

// Pages
import Home from './Home';
import WhyChooseUs from './WhyChooseUs';
import NadcaCertified from './NadcaCertified';
import IndoorAirQuality from './IndoorAirQuality';
import CommercialDuctCleaning from './CommercialDuctCleaning';
import PostConstructionCleaning from './PostConstructionCleaning';
import MoldRemediationDucts from './MoldRemediationDucts';
import ServiceArea from './ServiceArea';
import Faq from './Faq';
import Blog from './Blog';
import CityPage from './CityPage';

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
