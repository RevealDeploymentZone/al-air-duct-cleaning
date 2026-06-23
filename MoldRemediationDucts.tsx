import { Shield, Sparkles, HelpCircle, AlertTriangle, Eye, Activity, Heart } from 'lucide-react';

interface MoldProps {
  onNavigate: (path: string) => void;
}

export default function MoldRemediationDucts({ onNavigate }: MoldProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-left" id="mold-remediation-view">
      
      {/* 1. HERO DESCRIPTION */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
          🦠 METICULOUS BIOTIC SANITIZATION & MOLD REMEDIATION
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase animate-fade-in">
          Mold Remediation in Ducts <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
            & Botanical Sanitization
          </span>
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Air conditioning units naturally create water condensation on cooling coils. If attic ducts are poorly insulated, temperature differences can cause condensation to form inside the metal conduits. When combined with organic household dust, these damp conditions create an ideal environment for biological mold growth.
        </p>
      </div>

      {/* 2. DYNAMIC MOLD TRIGGER WARNINGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-650 border border-red-100 flex items-center justify-center">
            <AlertTriangle size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Mycotoxical Spore Distribution</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Active mold colonies disperse thousands of microscopic spores into your living areas every time your HVAC blower cycles, bypassing standard filters.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
            <Activity size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Asthma & Sinus Reactions</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            According to the EPA, inhaled biological dander is a primary trigger for unexplained chronic headaches, congestion, and asthma symptoms.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-105 flex items-center justify-center">
            <Heart size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Musty Odor Mitigation</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Our treatment targets musty odors in attics and crawlspaces at the source, rather than temporarily masking them with artificial scents.
          </p>
        </div>
      </div>

      {/* 3. SCIENTIFIC REMEDIATION REPORT ACCORD */}
      <div className="bg-white border-2 border-amber-100 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
        <div className="space-y-1">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">BENCH QUALITY STATEMENT</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1 uppercase">
            Our 4-Stage Mechanical & Botanical Remediation Approach
          </h2>
          <p className="text-slate-500 text-xs">Simply spraying duct openings with bleach is ineffective because the fungal roots remain. We use a thorough mitigation process:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed text-slate-650">
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-605 text-amber-700 font-bold font-mono">1</span>
              <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Secure Boundary Containment</h4>
                <p className="text-slate-600 mt-1">
                  We isolate service sections under negative pressure and seal off supply registers, preventing mold spores from spreading into other rooms during agitation.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-705 text-amber-750 text-amber-700 font-bold font-mono">2</span>
              <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Pneumatic Scrubbing & Extraction</h4>
                <p className="text-slate-600 mt-1">
                  We use automated spinning whips and mechanical scrapers to loosen mold layers from metal duct walls, drawing them directly into our HEPA negative collectors.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold font-mono">3</span>
              <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">EPA Botanical Disinfection Fogging</h4>
                <p className="text-slate-600 mt-1">
                  We treat the duct interiors with a professional, pet-and-child-safe botanical sanitizer. This disinfectant neutralizes lingering micro-spores on contact.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold font-mono">4</span>
              <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Sealing Access Ports</h4>
                <p className="text-slate-600 mt-1">
                  We verify clear airflows before sealing access ports with durable gaskets and fasteners, maintaining your system's pressure integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CLINIC LEVEL SAFETY ACCORD */}
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row gap-4 items-start text-xs shadow-sm">
        <span className="p-2 bg-emerald-100 text-emerald-650 rounded-lg block flex-shrink-0 font-bold">
          🌿
        </span>
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-emerald-850 uppercase tracking-wider">100% Non-Toxic Botanical Sanitizers Only</h4>
          <p className="text-slate-650 text-xs leading-relaxed">
            Our treatment is designed with safety in mind. Our EPA-registered botanical sanitizers utilize thyme-oil extract bases and are free of toxic synthetic chemicals and chlorine, making them safe for kids, elderly residents, and indoor pets.
          </p>
        </div>
      </div>

      {/* CALL TO ACTION BUTTON FOR SERVICE BOOKING */}
      <div className="text-center bg-white border border-slate-205 p-8 rounded-3xl space-y-4 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 uppercase">Request Biological Sanitation Review</h3>
        <p className="text-slate-500 text-xs max-w-lg mx-auto">Coordinate with a supervisor to map active humidity profiles and confirm our botanical sanitization options.</p>
        <button
          onClick={() => {
            onNavigate('/home');
            setTimeout(() => {
              const el = document.getElementById('pricing-booking-widget');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-extrabold uppercase rounded-xl text-xs"
        >
          Calculate Mold Treatment Cost
        </button>
      </div>

    </div>
  );
}
