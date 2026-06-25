import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Monitor scroll for floating helper button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (pathStr: string) => {
    navigate(pathStr);
  };

  // Determine if we are on a specific city page
  const pathParts = location.pathname.split('/').filter(Boolean);
  let activeCityPhone: string | undefined = undefined;

  if (pathParts.length === 2) {
    const [stateSlug, citySlug] = pathParts;
    const stateObj = statesData.find(s => s.slug === stateSlug.toLowerCase());
    const cityObj = stateObj?.cities.find(c => c.slug === citySlug.toLowerCase());
    if (cityObj) {
      activeCityPhone = cityObj.phone;
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between selection:bg-amber-600 selection:text-white overflow-x-hidden antialiased">

      {/* Dynamic Navigation Header */}
      <Navbar currentPath={location.pathname} onNavigate={handleNavigation} activeCityPhone={activeCityPhone} />

      {/* Primary Transition Screen Stage */}
      <main className="flex-grow pb-16">
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigation} />} />
          <Route path="/home" element={<Home onNavigate={handleNavigation} />} />
          <Route path="/why-choose-us" element={<WhyChooseUs onNavigate={handleNavigation} />} />
          <Route path="/nadca-certified" element={<NadcaCertified onNavigate={handleNavigation} />} />
          <Route path="/indoor-air-quality" element={<IndoorAirQuality />} />
          <Route path="/commercial-duct-cleaning" element={<CommercialDuctCleaning onNavigate={handleNavigation} />} />
          <Route path="/post-construction-cleaning" element={<PostConstructionCleaning onNavigate={handleNavigation} />} />
          <Route path="/mold-remediation-ducts" element={<MoldRemediationDucts onNavigate={handleNavigation} />} />
          <Route path="/service-area" element={<ServiceArea onNavigate={handleNavigation} />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog onNavigate={handleNavigation} />} />
          <Route path="/:stateSlug/:citySlug" element={<CityPage onNavigate={handleNavigation} />} />
        </Routes>
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
