import { ShieldAlert, Sparkles, HelpCircle, HardHat, Hammer, FileWarning } from 'lucide-react';

interface ConstructionProps {
  onNavigate: (path: string) => void;
}

export default function PostConstructionCleaning({ onNavigate }: ConstructionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-left" id="post-construction-view">
      
      {/* 1. HERO BLOCK */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
          👷 POST-BUILD & RENOVATION DEBRIS CLEARANCE APPROVED
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
          Post-Construction <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-805 from-amber-600 to-amber-800">
            Air Duct Cleaning
          </span>
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Completed a kitchen remodel, finished a basement, or built a custom home? Traditional building processes release substantial dust into surrounding air. Even if registers are taped, HVAC fans are often run to keep crews comfortable, drawing wood sawdust, drywall plaster, and masonry silica deep into key returns.
        </p>
      </div>

      {/* 2. SPECIFIC CONTAMINANT HAZARDS PANEL */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-650 border border-red-100 flex items-center justify-center">
            <FileWarning size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Drywall Plaster / Silica</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Sanding joint compound produces crystalline silica. This abrasive powder coats inner duct surfaces and can cause throat irritation if recirculated.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
            <HardHat size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Fiberglass Splinters</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Cutting ceiling tile and placing wall batt insulation disperses tiny fiberglass glass rods that irritate eyes, skin, and breathing passages.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-105 flex items-center justify-center">
            <Hammer size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Adhesive VOC Solvents</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Urethane glues, sealers, and fresh paints release chemical vapors. These VOCs cling to metal inner ducts, leaving a chemical odor when heat cycles run.
          </p>
        </div>
      </div>

      {/* 3. TRANSITION CLEARANCE PROCESS REPORT */}
      <div className="bg-white border-2 border-amber-100 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
        <div className="space-y-1">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">EXTRACTION PHASES</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1 uppercase">
            Our Post-Construction Deep-Scrub Solution
          </h2>
          <p className="text-slate-500 text-xs">Standard consumer shop-vacs can release sub-micron construction powder back into rooms. We prevent that with our specialized process:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Abrasive Vacuum Containment</h4>
            <p className="text-slate-600">
              We connect our negative air collection units to your main plenum boards, running at high suction (4,500 CFM) to capture contaminants. This ensures that plaster particles cannot escape into your living areas.
            </p>
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Pneumatic Scrub Whips</h4>
            <p className="text-slate-600">
              Clogged sheet metal corners are cleaned using pneumatic air whips. This breaks up compacted wood and joint compounds, drawing debris into our collection lines.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Blower Motor & Coil Restoration</h4>
            <p className="text-slate-600">
              Plaster dust acts as a thermal insulator. If left on HVAC blowers or air conditioning coils, it forces the system to work harder. We clean these components to restore baseline airflow.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-205 rounded-xl space-y-2 border border-slate-200">
              <span className="text-[10px] font-black text-amber-600 uppercase">9-Year Field Standard Verified</span>
              <p className="text-[11px] text-slate-505 text-slate-500">
                We provide a written satisfaction agreement with every post-construction service to ensure your home is ready for move-in.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CALL TO ACTION TO PRICER */}
      <div className="text-center bg-white border border-slate-200 p-8 rounded-3xl space-y-4 shadow-sm">
        <h3 className="text-xl font-bold text-slate-950 uppercase tracking-wide">
          Ready for a Pristine Transition?
        </h3>
        <p className="text-slate-500 text-xs max-w-xl mx-auto leading-relaxed">
          Clean return air registers are vital to enjoying your newly renovated spaces. View our transparent pricing scales or secure your booking online today.
        </p>
        <button
          onClick={() => {
            onNavigate('/home');
            setTimeout(() => {
              const el = document.getElementById('pricing-booking-widget');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-705 bg-amber-600 hover:bg-amber-700 text-white font-extrabold uppercase rounded-xl tracking-wider text-xs cursor-pointer shadow-sm transition-transform hover:-translate-y-0.5"
        >
          Check Post-Construction Pricing Block
        </button>
      </div>

    </div>
  );
}
