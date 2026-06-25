import { statesData } from './cities';
import { Award, ShieldAlert, Heart, Phone, MapPin, Building2, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (path: string) => void;
  activeCityPhone?: string;
}

export default function Footer({ onNavigate, activeCityPhone }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Determine current display phone
  const displayPhone = activeCityPhone || '1-800-247-3828';
  const displayPhoneLabel = activeCityPhone ? activeCityPhone : '1-800-247-3828 (AIR-DUCT)';

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8" id="master-footer">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Upper Brand Profile & Accords Block */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('/home')}>
              <Logo variant="dark" size="sm" />
            </div>
            <p className="text-slate-500 leading-relaxed text-xs">
              Established in 2019, AL Air Duct Cleaning has delivered residential, commercial, and post-renovation ventilation hygiene for over 9 years. We ensure complete particulate source-removal under certified NADCA regulations.
            </p>
            <div className="flex gap-3 pt-1">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-slate-400 bg-slate-900 border border-slate-800 px-2 py-1 rounded">
                <Award size={11} className="text-amber-500" /> NADCA ACR-2021
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-slate-400 bg-slate-900 border border-slate-800 px-2 py-1 rounded">
                🛡️ EPA Standards Compliant
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Ventilation Solutions</h4>
            <div className="flex flex-col gap-2 font-medium">
              <button onClick={() => onNavigate('/home')} className="text-left text-slate-400 hover:text-amber-400 transition-colors cursor-pointer">Residential Duct Scrubbing</button>
              <button onClick={() => onNavigate('/commercial-duct-cleaning')} className="text-left text-slate-400 hover:text-amber-400 transition-colors cursor-pointer">Commercial HVAC Decontamination</button>
              <button onClick={() => onNavigate('/post-construction-cleaning')} className="text-left text-slate-400 hover:text-amber-400 transition-colors cursor-pointer">Post-Renovation Fiber Removal</button>
              <button onClick={() => onNavigate('/mold-remediation-ducts')} className="text-left text-slate-400 hover:text-amber-400 transition-colors cursor-pointer">Biological Mold Sweeping</button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Trust & Guidelines</h4>
            <div className="flex flex-col gap-2 font-medium">
              <button onClick={() => onNavigate('/why-choose-us')} className="text-left text-slate-400 hover:text-amber-400 transition-colors cursor-pointer">Our 9-Year Heritage Quality</button>
              <button onClick={() => onNavigate('/nadca-certified')} className="text-left text-slate-400 hover:text-amber-400 transition-colors cursor-pointer">NADCA Certification Protocols</button>
              <button onClick={() => onNavigate('/indoor-air-quality')} className="text-left text-slate-400 hover:text-amber-400 transition-colors cursor-pointer">EPA Statistics Hub</button>
              <button onClick={() => onNavigate('/faq')} className="text-left text-slate-400 hover:text-amber-400 transition-colors cursor-pointer">Client Support & Video FAQs</button>
              <button onClick={() => onNavigate('/blog')} className="text-left text-slate-400 hover:text-amber-400 transition-colors cursor-pointer">Science & Air Safety Blog</button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Contact NAP Center</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-1.5 leading-relaxed text-slate-400">
                <MapPin size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>AL Air Duct Cleaning Corporate Headquarters<br />Nationwide Central dispatch, USA</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone size={14} className="text-amber-500 flex-shrink-0" />
                <a href={`tel:${displayPhone}`} className="hover:text-white font-bold text-amber-400">{displayPhoneLabel}</a>
              </p>
              {!activeCityPhone && (
                <p className="flex items-center gap-1.5 text-slate-500 text-[11px] font-mono">
                  <Building2 size={13} className="flex-shrink-0" />
                  <span>IVR Routing: residential (1) | commercial (2)</span>
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Sizable and highly polished, compact service area directory block */}
        <div className="border-t border-slate-900 pt-6 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <h4 className="text-white font-bold text-sm tracking-tight flex items-center gap-1.5">
                📍 National Localized Dispatch Centers
              </h4>
              <p className="text-slate-500 text-[11px]">
                Active regional dispatch coverage in 20+ states to extract mildew, allergen particulates, and fiber.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/service-area')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-850 hover:border-amber-500 rounded-xl transition-all font-bold text-[11px] cursor-pointer"
            >
              <span>View All 40+ Active Service Areas</span>
              <ArrowRight size={13} className="text-amber-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
            {statesData.map((state) => (
              <div key={state.slug} className="space-y-2 bg-slate-900/10 p-4 rounded-xl border border-slate-900/60">
                <span className="text-white font-bold text-[10px] uppercase tracking-widest block border-b border-slate-800/80 pb-1">
                  📍 {state.name}
                </span>
                <div className="flex flex-wrap gap-x-2 gap-y-1.5 pt-1">
                  {state.cities.map((city, idx) => (
                    <span key={city.slug} className="inline-flex items-center">
                      <button
                        onClick={() => onNavigate(`/${state.slug}/${city.slug}`)}
                        className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold text-[11px]"
                      >
                        {city.name}
                      </button>
                      {idx < state.cities.length - 1 && (
                        <span className="text-slate-800 ml-2 font-light">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lower compliance block */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} AL Air Duct Cleaning. All Rights Reserved.</span>
            <span className="text-slate-800">|</span>
            <span>Est. 2019</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-500 hover:text-slate-400 cursor-pointer">Privacy Statement</span>
            <span className="text-slate-500 hover:text-slate-400 cursor-pointer">Terms & Conditions Agreement</span>
            <span className="text-slate-500 hover:text-slate-400 cursor-pointer">EPA Site Index</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart size={10} className="fill-amber-900 stroke-amber-800" />
            <span>Under NADCA ACR Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
