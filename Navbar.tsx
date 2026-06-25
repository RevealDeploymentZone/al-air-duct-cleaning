import { useState } from 'react';
import { statesData } from './cities';
import { Menu, X, Phone, Search, ChevronDown, Award } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  activeCityPhone?: string;
}

export default function Navbar({ currentPath, onNavigate, activeCityPhone }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStateSlug, setSelectedStateSlug] = useState('california');
  const [isCitySearchOpen, setIsCitySearchOpen] = useState(false);

  // States
  const activeState = statesData.find(s => s.slug === selectedStateSlug) || statesData[0];

  const mainLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'NADCA Trust', path: '/nadca-certified' },
    { name: 'Air Quality St.', path: '/indoor-air-quality' },
    { name: 'Service Area', path: '/service-area' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ];

  const serviceSubmenu = [
    { name: 'Commercial Duct Cleaning', path: '/commercial-duct-cleaning' },
    { name: 'Post-Construction Clearing', path: '/post-construction-cleaning' },
    { name: 'Mold Remediation & Disinfection', path: '/mold-remediation-ducts' },
  ];

  const handleCitySelect = (stateSlug: string, citySlug: string) => {
    onNavigate(`/${stateSlug}/${citySlug}`);
    setIsCitySearchOpen(false);
    setIsOpen(false);
  };

  // Determine current display phone
  const displayPhone = activeCityPhone || '1-800-247-3828';
  const displayPhoneLabel = activeCityPhone ? activeCityPhone : '1-800-247-3828 (AIR-DUCT)';

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-md shadow-sm" id="master-header">
      {/* Top micro-announcement panel in deep slate */}
      <div className="bg-slate-900 py-1.5 px-4 text-center text-xs font-semibold text-white flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 shadow-sm">
        <span>🏆 Certified NADCA HVAC Assessment & Cleaning Services Nationwide</span>
        <span className="hidden sm:inline-block opacity-45">|</span>
        <span>🛡️ Family Owned & Operated Since 2019 (9 Years of Regional Field Integrity)</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Symmetrical High-Fidelity Company Logo (Matches customer brand precisely) */}
          <div 
            onClick={() => onNavigate('/home')} 
            className="flex items-center cursor-pointer select-none py-1 hover:opacity-90 active:scale-95 transition-all text-left"
            id="brand-logo-button"
          >
            <Logo size="md" className="h-20 w-24" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-colors outline-none cursor-pointer ${
                  currentPath === link.path 
                    ? 'text-amber-600 bg-amber-50/70 border-b-2 border-amber-600' 
                    : 'text-slate-600 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* Specialties Dropdown */}
            <div className="relative group/submenu">
              <button className="px-3 py-2 text-xs font-bold text-slate-600 hover:text-amber-600 hover:bg-slate-50 rounded-lg flex items-center gap-1 outline-none cursor-pointer">
                Specialties
                <ChevronDown size={12} className="group-hover/submenu:rotate-180 transition-transform" />
              </button>
              <div className="absolute right-0 top-11 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl p-2 hidden group-hover/submenu:block animate-fade-in z-50">
                {serviceSubmenu.map((sub) => (
                  <button
                    key={sub.path}
                    onClick={() => onNavigate(sub.path)}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-650 hover:text-amber-600 hover:bg-slate-50 rounded-lg block font-semibold transition-colors"
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Call-routing search & Call CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Local City Selector Trigger */}
            <div className="relative text-left">
              <button
                onClick={() => setIsCitySearchOpen(!isCitySearchOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-slate-50 hover:bg-slate-100 text-amber-600 border border-slate-200 rounded-lg cursor-pointer"
              >
                <Search size={13} />
                Find My City Code
                <ChevronDown size={11} className={isCitySearchOpen ? 'rotate-180' : ''} />
              </button>

              {isCitySearchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-2xl p-3 z-50">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Select Active Region</span>
                  <div className="grid grid-cols-2 gap-1 mb-2">
                    {statesData.map((st) => (
                      <button
                        key={st.slug}
                        onClick={() => setSelectedStateSlug(st.slug)}
                        className={`text-left text-xs font-semibold px-2 py-1 rounded transition-colors ${
                          selectedStateSlug === st.slug ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {st.name}
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 pt-2 max-h-48 overflow-y-auto">
                    <span className="block text-[9px] font-bold text-slate-400 mb-1 px-1">Available Local Nodes ({activeState.name}):</span>
                    {activeState.cities.map((ct) => (
                      <button
                        key={ct.slug}
                        onClick={() => handleCitySelect(activeState.slug, ct.slug)}
                        className="w-full text-left font-bold text-xs px-2.5 py-1.5 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded flex justify-between items-center transition-colors"
                      >
                        <span>{ct.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">{ct.phone.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Click to Call dynamic regional dispatch */}
            <a 
              href={`tel:${displayPhone}`} 
              className="inline-flex items-center gap-1.5 px-5 h-11 rounded-lg bg-amber-600 text-white hover:bg-amber-700 font-bold text-xs shadow-md transition-all hover:-translate-y-0.5"
              id="header-cta-phone"
            >
              <Phone size={13} className="fill-white" />
              {displayPhoneLabel}
            </a>
          </div>

          {/* Mobile hamburger icon */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href={`tel:${displayPhone}`} 
              className="p-2.5 rounded-full bg-amber-600 text-white flex items-center justify-center animate-pulse"
              title="Emergency Hotlines"
            >
              <Phone size={16} className="fill-white" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-800"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 p-4 space-y-4">
          <div className="flex flex-col gap-1.5">
            {mainLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setIsOpen(false);
                }}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
                  currentPath === link.path ? 'bg-amber-50 text-amber-605 border-l-4 border-amber-600 font-black' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-150 pt-3">
            <span className="block text-[10px] uppercase font-bold text-slate-400 mb-2 px-3 tracking-widest">Specialist Portfolios</span>
            <div className="flex flex-col gap-1 pl-3">
              {serviceSubmenu.map((sub) => (
                <button
                  key={sub.path}
                  onClick={() => {
                    onNavigate(sub.path);
                    setIsOpen(false);
                  }}
                  className="text-left text-xs font-bold text-slate-500 py-1.5 hover:text-amber-600 transition-colors"
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-150 pt-3">
            <span className="block text-[10px] uppercase font-bold text-slate-400 mb-2 px-3 tracking-widest">Rapid Dispatch Areas</span>
            <div className="grid grid-cols-2 gap-1.5 px-2">
              {statesData.slice(0, 4).map((state) => (
                <button
                  key={state.slug}
                  onClick={() => {
                    onNavigate(`/service-area`);
                    setIsOpen(false);
                  }}
                  className="text-left text-xs text-slate-500 font-semibold py-1 hover:text-amber-600 transition-colors"
                >
                  📍 {state.name} Hubs
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a 
              href={`tel:${displayPhone}`} 
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-600 text-white font-bold rounded-xl text-center text-xs hover:bg-amber-700"
            >
              <Phone size={14} className="fill-white" />
              {displayPhoneLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
