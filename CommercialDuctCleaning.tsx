import { Building2, Wind, Eye, Users, FileCheck, ShieldAlert, ArrowRight } from 'lucide-react';

interface CommercialProps {
  onNavigate: (path: string) => void;
}

export default function CommercialDuctCleaning({ onNavigate }: CommercialProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-left" id="commercial-duct-view">
      
      {/* 1. HERO MAIN HEADER */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
          🏢 B2B COMPLIANCE & COMMERCIAL GENERAL CONTRACTING
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase animate-fade-in">
          Commercial Duct Cleaning <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-805 from-amber-600 to-amber-800">
            & HVAC Decontamination
          </span>
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Office complexes, clinics, and industrial facilities utilize larger, more complex air handling systems. Stagnant particulate, fibers, and biological molds settling in major loops can trigger widespread sick building syndrome, increasing employee sick leave and straining fans. Our B2B crew restores commercial HVAC installations to original efficiency.
        </p>
      </div>

      {/* 2. THREE COMPLIANCE HIGHLIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
            <Building2 size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Facility Compliance</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            We align all services with OSHA Section 5(a)(1) general duty air quality rules, ASHRAE Standard 62.1 requirements, and local zoning fire standards.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
            <Wind size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Fire Damper Verification</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Grease, fine wood flour, or heavy paper dust inside supply lines pose localized fire hazards. We clean and verify mechanical fire dampers.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
            <Users size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Off-Hours Dispatch</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            We schedule cleanings overnight or during weekends to minimize business disruption and prevent any operational downtime.
          </p>
        </div>
      </div>

      {/* 3. DETAILED TECHNICAL CAPABILITIES */}
      <div className="bg-white border-2 border-amber-100 rounded-3xl p-6 lg:p-8 space-y-8 shadow-sm">
        <div>
          <span className="text-xs text-amber-650 text-amber-600 font-bold uppercase tracking-widest">B2B ENGINEERING SCOPE</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1 uppercase">
            Standard Commercial HVAC Decontamination Procedures
          </h2>
          <p className="text-slate-500 text-xs">A comprehensive breakdown of our commercial services and standards.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs font-semibold">
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-amber-705 text-amber-700 uppercase tracking-wider border-b border-slate-100 pb-2">
              Systems We Maintain
            </h4>
            <ul className="space-y-3 text-slate-650 font-semibold text-xs leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">▪</span>
                <div>
                  <strong>Multi-Zone Air Handlers (AHU)</strong>: Deep structural scrubbing of fan housings, scroll fins, damper plates, and mixing chambers.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">▪</span>
                <div>
                  <strong>Roof-Top Packaged Units (RTU)</strong>: Evaporator descaling, structural lint extraction, and microbial treatment.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">▪</span>
                <div>
                  <strong>VAV Boxes & Reheat Coils</strong>: Pinpoint clearing of delicate micro-fins without compromising airflow balancing.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">▪</span>
                <div>
                  <strong>Hospital and Clinic Supply Trunks</strong>: HEPA-filtered negative suction combined with biological sanitation fogging.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-205 space-y-4 self-center shadow-inner border border-slate-200">
            <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">
              Request a Commercial On-Site Bid
            </h4>
            <p className="text-slate-550 text-xs leading-relaxed font-semibold">
              We provide free, comprehensive on-site inspections for properties over 5,000 sq ft, complete with duct scope videos and custom pricing matrices.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('/home');
                  setTimeout(() => {
                    const el = document.getElementById('pricing-booking-widget');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-extrabold rounded-lg text-center uppercase tracking-wide inline-flex items-center justify-center gap-1 cursor-pointer transition-colors shadow-sm"
              >
                Go to Business Quote Estimator <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. HOSPITALITY / CLINIC HEALTH WARNING */}
      <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col sm:flex-row gap-4 items-start text-xs shadow-sm">
        <span className="p-2 bg-amber-100 text-amber-700 rounded-lg block flex-shrink-0 font-bold">
          ℹ️
        </span>
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">OSHA General Air Guidelines Info</h4>
          <p className="text-slate-600 text-xs leading-relaxed font-semibold">
            According to OSHA guidelines, poor indoor air quality (IAQ) is a leading cause of employee fatigue, respiratory discomfort, and reduced productivity. We coordinate services around the schedules of your commercial tenants, schools, or healthcare facilities to ensure high quality results with zero functional disruption.
          </p>
        </div>
      </div>

    </div>
  );
}
