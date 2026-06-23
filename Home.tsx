import { useState } from 'react';
import { statesData } from '../data/cities';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import BookingForm from '../components/BookingForm';
import { Shield, Sparkles, Award, Star, ArrowRight, Fan, CheckCircle, Flame, Heart } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [selectedStateSlug, setSelectedStateSlug] = useState('california');

  const activeState = statesData.find(s => s.slug === selectedStateSlug) || statesData[0];

  return (
    <div className="space-y-16 py-8" id="home-view">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="hero-block">
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award size={14} /> National Air Duct Cleaners Association Standard
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-none">
            Science-Backed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Air Duct Cleaning
            </span> <br />
            For Healthier Spaces.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Clean air isn't a luxury—it is basic health. Operating under certified <strong>NADCA ACR Standards</strong>, AL Air Duct Cleaning systematically extracts 99.9% of compacted pet dander, drywall powder, and hidden molds from your ventilation system. We draw on over 9 years of field expertise (Est. 2019) with dispatch in 20+ states.
          </p>

          {/* Social Proof metrics */}
          <div className="grid grid-cols-3 gap-4 border-y border-slate-200 py-4 max-w-lg text-xs">
            <div className="text-left">
              <span className="block text-xl sm:text-2xl font-black text-amber-600">2019</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">ESTABLISHED YEAR</span>
            </div>
            <div className="text-left">
              <span className="block text-xl sm:text-2xl font-black text-slate-800">40+</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">METRO AREAS</span>
            </div>
            <div className="text-left">
              <span className="block text-xl sm:text-2xl font-black text-slate-800">100%</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">HEPA SANITIZED</span>
            </div>
          </div>

          {/* Direct Region Jumper widget */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>📍 Quick Regional Dispatcher</span>
              <span className="text-amber-600 font-extrabold">Pick Your Location Below</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <select 
                  value={selectedStateSlug}
                  onChange={(e) => setSelectedStateSlug(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 py-2.5 px-3 rounded-xl text-xs text-slate-850 uppercase font-bold cursor-pointer"
                >
                  {statesData.map((st) => (
                    <option key={st.slug} value={st.slug}>{st.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 max-h-12">
                <select 
                  onChange={(e) => {
                    if (e.target.value) {
                      onNavigate(`/${selectedStateSlug}/${e.target.value}`);
                    }
                  }}
                  defaultValue=""
                  className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-850 uppercase font-bold cursor-pointer"
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    padding: '10px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: '#1e293b',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}
                >
                  <option value="" disabled>--- Select Active City ---</option>
                  {activeState.cities.map((ct) => (
                    <option key={ct.slug} value={ct.slug}>{ct.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Hero Right Visual Column */}
        <div className="lg:col-span-5 relative" id="hero-estimation-card">
          <BookingForm />
        </div>
      </section>

      {/* 2. DYNAMIC BEFORE/AFTER VISUAL AUDIT SECTION */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">
              Visual proof of work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Watch Over 9 Years of Trapped Debris Extracted
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              We do not just vacuum surface vents. We use spinning pneumatic whips and high-negative displacement collectors to extract deeply rooted contaminants. Audit our side-by-side comparative inspection records below:
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 3. DEDICATED SECTION: RESIDENTIAL DUCT CLEANING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="residential-duct-cleaning">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs text-amber-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse inline-block mr-1"></span>
              Residential Service Deep Dive
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              Residential Air Duct Cleaning Specialists
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your home's heating and cooling system acts as its lung. Every day, the typical 3-bedroom household compiles hair, dead skin blocks, dust, clothing fibers, and smoke residues that sink down into supply trunks. Every time your HVAC cycle activates, those particles are propelled back into bedrooms and living chambers.
            </p>

            <div className="space-y-3">
              {[
                { title: 'Anti-Allergen Eradication', desc: 'Slashes pollen, dander, and respiratory dust-mite triggers by up to 94%.' },
                { title: 'Coil & Blower Scrubbing', desc: 'We clean evaporator coils and furnace blowers, boosting airflow rate and dropping fuel/electric fees.' },
                { title: 'HEPA Negative-Pressure Isolation', desc: 'No dirty air leaks into your home. The entire system is sealed under dynamic negative suction.' },
                { title: 'Mold-Barrier Sanitization Option', desc: 'Applying child-safe, botanical antiseptics inside plenums to prevent mildew re-growth.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-605 mt-1">
                    <CheckCircle size={12} className="stroke-[3px]" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-slate-550 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button 
                onClick={() => {
                  const el = document.getElementById('pricing-booking-widget');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-605 hover:text-amber-700 transition-colors cursor-pointer"
              >
                Estimate My Residential Cleaning Costs <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Interactive features display columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-left space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-650 border border-amber-100 flex items-center justify-center">
                <Fan size={18} className="animate-spin-slow text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">ACR Assessment Standard</h3>
              <p className="text-slate-550 text-xs leading-relaxed">
                We strictly align each residential cleaning with NADCA ACR procedures. This calls for source extraction, mechanical brushing, and fully visual verification.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-left space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-650 border border-amber-205 flex items-center justify-center">
                <Shield size={18} className="text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">No-Chemicals Security Default</h3>
              <p className="text-slate-550 text-xs leading-relaxed">
                Protecting respiratory health. All deep cleaning operates without ozone generators or toxic chemicals, shielding kids and pets.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50/50 to-amber-100/20 border border-amber-200 p-6 rounded-2xl text-left space-y-4 sm:col-span-2 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-650 border border-amber-200">EPA Certified Rules</span>
                <span>When to Clean Air Ducts?</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                The EPA advises cleaning ducts immediately if there is <strong>visible substantial mold</strong>, <strong>rodent infestation</strong>, or if registers are releasing <strong>discernible dust discharges</strong> into the home. Post-construction residue is also a primary indicator.
              </p>
              <button 
                onClick={() => onNavigate('/indoor-air-quality')} 
                className="text-xs font-bold text-amber-650 hover:underline inline-flex items-center gap-1 mt-1 cursor-pointer"
              >
                Learn more at our EPA Air Quality Statistics Hub <ArrowRight size={12} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MAIN CONTENT REGIONAL OPERATION PORTAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center space-y-10" id="regional-operations">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">
            NATIONWIDE OPERATION DEPARTMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Active Regional Dispatch Hubs
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            We operate fully equipped ASCS-certified regional bases across key metropolitan territories. Choose your state hub below to access custom regional air quality reports:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {statesData.slice(0, 8).map((state) => (
            <div 
              key={state.slug} 
              className="bg-white hover:bg-slate-50 border border-slate-205 hover:border-amber-300 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                    {state.name} Base
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    {state.cities.length} Cities
                  </span>
                </div>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  Deep condensation, allergen monitoring and mechanical duct sweeping operating in:
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {state.cities.slice(0, 3).map((city) => (
                    <span 
                      key={city.slug} 
                      onClick={() => onNavigate(`/${state.slug}/${city.slug}`)}
                      className="text-[10px] font-semibold text-slate-600 hover:text-amber-650 bg-slate-100 hover:bg-amber-50 border border-transparent hover:border-amber-200 px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
                    >
                      {city.name}
                    </span>
                  ))}
                  {state.cities.length > 3 && (
                    <span className="text-[10px] font-semibold text-slate-400 px-1 py-1">
                      +{state.cities.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-5 mt-auto">
                <button
                  onClick={() => onNavigate('/service-area')}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-amber-605 hover:text-amber-700 transition-colors group-hover:translate-x-0.5 cursor-pointer"
                >
                  <span>Explore State Branch Directory</span>
                  <ArrowRight size={13} className="text-amber-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <button
            onClick={() => onNavigate('/service-area')}
            className="inline-flex items-center gap-2 group px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-extrabold rounded-2xl shadow-md cursor-pointer text-xs h-12"
          >
            <span>Browse Full National Coverage Map Directory</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 5. CALL ROUTING INFORMATION ACCORD */}
      <section className="bg-slate-100/50 border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">
            NATIONWIDE ONE-NUMBER SYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How Does 1-800-AIR-DUCT Routing Operate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left pt-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-lg font-bold text-amber-650 mb-2 block">1. Dial 1-800-AIR-DUCT</span>
              <p className="text-slate-550 text-xs leading-relaxed">
                Call our nationwide helpline. Our IVR system prompts you to route based on service class. Press 1 for residential setups, press 2 for corporate facilities.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-lg font-bold text-amber-650 mb-2 block">2. Zone Matching</span>
              <p className="text-slate-550 text-xs leading-relaxed">
                The switchboard identifies your local area code or ZIP parameters to route your call seamlessly to the closest regional supervisor.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-lg font-bold text-amber-650 mb-2 block">3. Local Dispatch</span>
              <p className="text-slate-550 text-xs leading-relaxed">
                Your local branch supervisor establishes an arrival window, locks in the estimate price, and coordinates a certified ASCS technician crew.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
