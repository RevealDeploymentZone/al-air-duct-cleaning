import { useState } from 'react';
import { statesData } from '../data/cities';
import { MapPin, Phone, Search, Globe, ChevronRight } from 'lucide-react';

interface ServiceAreaProps {
  onNavigate: (path: string) => void;
}

export default function ServiceArea({ onNavigate }: ServiceAreaProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Flattened list of cities for quick search filtering
  const allCities = statesData.flatMap(state => 
    state.cities.map(city => ({
      ...city,
      stateName: state.name,
      stateSlug: state.slug
    }))
  );

  const filteredCities = allCities.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.stateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.neighborhoods.some(n => n.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left animate-fade-in" id="service-area-view">
      
      {/* 1. HEADER DESCRIPTION */}
      <div className="max-w-4xl space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
          📍 NATIONAL COVERAGE DISPATCH REGISTERS
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
          Active Service Areas <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
            & Localized Area Codes
          </span>
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          AL Air Duct Cleaning dispatch teams operate regional service centers in more than 40 metro areas across the United States. Each site maintains a local supervisor, specialized negative-air extraction trucks, and Area-Code-specific IVR phone lines.
        </p>
      </div>

      {/* 2. INSTANT SEARCH BAR */}
      <div className="p-6 bg-white border border-slate-205 rounded-3xl space-y-4 shadow-sm border border-slate-200">
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
          Search Your City, State, or Neighborhood Area
        </label>
        <div className="relative">
          <span className="absolute left-4 top-3.5 text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Type your state or city (e.g. Los Angeles, Texas, Seattle, Lincoln Park)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 hover:border-slate-350 focus:border-amber-600 text-sm py-3 pl-12 pr-4 rounded-xl text-slate-800 focus:outline-none transition-colors font-semibold"
          />
        </div>
      </div>

      {/* 3. DYNAMIC SEARCH RESULTS OR COMPREHENSIVE STATES GRID */}
      {searchQuery ? (
        <div className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
            Filtered Search Results ({filteredCities.length} Matches Found)
          </span>
          {filteredCities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCities.map((city) => (
                <div 
                  key={`${city.stateSlug}-${city.slug}`}
                  onClick={() => onNavigate(`/${city.stateSlug}/${city.slug}`)}
                  className="p-5 bg-white border border-slate-200 hover:border-amber-300 rounded-2xl cursor-pointer group transition-all text-left space-y-2 shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold text-amber-600 uppercase">{city.stateName}</span>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-605 transition-colors uppercase tracking-wider">{city.name}</h3>
                    </div>
                    <span className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:text-amber-600 group-hover:bg-amber-50 transition-colors">
                      <ChevronRight size={14} />
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2">{city.epaStat}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100 font-semibold">
                    <Phone size={12} className="text-amber-655" />
                    <span>{city.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-2xl text-slate-400 text-sm shadow-sm animate-fade-in">
              No regional dispatch centers matched "{searchQuery}". Please call our primary hotline at <strong>1-800-247-3828</strong>.
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-12">
          {statesData.map((state) => (
            <div key={state.slug} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <Globe size={18} className="text-amber-600" />
                <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{state.name} Regional Portals</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs font-semibold">
                {state.cities.map((city) => (
                  <div
                    key={city.slug}
                    onClick={() => onNavigate(`/${state.slug}/${city.slug}`)}
                    className="p-4 bg-white hover:bg-slate-50/50 border border-slate-200 hover:border-amber-300 rounded-xl cursor-pointer transition-all flex flex-col justify-between h-32 text-left group shadow-sm"
                  >
                    <div>
                      <h3 className="font-extrabold text-slate-900 group-hover:text-amber-655 transition-colors uppercase tracking-wider">{city.name}</h3>
                      <p className="text-[10px] text-slate-500 mt-1">Coverage: Up to {city.serviceRadius}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-600 pt-2 border-t border-slate-100 mt-2 font-bold font-mono">
                      <Phone size={11} className="fill-transparent" />
                      <span>{city.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. EMERGENCY DISPATCH ACCORD */}
      <div className="p-6 bg-amber-50/50 border border-amber-200 rounded-2xl text-xs space-y-2 shadow-sm">
        <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest">Active Coverage Boundary Audit</h4>
        <p className="text-slate-600 leading-relaxed font-semibold">
          Our standard dispatch covers all highlighted municipal addresses including a <strong>15 to 25 mile service radius</strong>. For remote, mountain-cedar, or coastal regions falling slightly beyond highlighted limits, please contact our central switchboard at <strong>1-800-247-3828</strong> to request a specialized field assessment team.
        </p>
      </div>

    </div>
  );
}
