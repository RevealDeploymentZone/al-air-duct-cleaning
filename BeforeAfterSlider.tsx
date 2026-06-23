import { AlertTriangle, Sparkles, ShieldCheck, Fan, Shield, Scale, HelpCircle } from 'lucide-react';

export default function BeforeAfterSlider() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10" id="before-after-static-module">
      
      {/* Visual Header / Sub-title for comparative audit */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
          🔬 Ventilation Hygiene Diagnostic Comparison
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
          Dynamic Ventilation Audit: Side-By-Side Evidence
        </h3>
        <p className="text-slate-500 text-xs max-w-2xl mx-auto">
          Compare 9+ years of accumulated microbiological and particulate load inside uncleaned plenums against our NADCA-certified mechanical source extraction standard.
        </p>
      </div>

      {/* Side-by-Side Bento Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="comparison-bento-deck">
        
        {/* BEFORE: 9-Year Unsanitized Dirt Bed */}
        <div className="bg-white border-2 border-red-200 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between">
          
          {/* Header block with urgent status label */}
          <div className="p-5 border-b border-red-100 bg-red-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-mono text-xs font-black text-red-700 uppercase tracking-wide">BEFORE: Legacy Plenum State</span>
            </div>
            <span className="text-[10px] uppercase font-black text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
              Risk: High
            </span>
          </div>

          {/* Symmetrical Representation of a Dust-Clogged Duct */}
          <div className="p-6 bg-slate-900 flex items-center justify-center relative min-h-[180px] overflow-hidden">
            {/* Grime grid simulating heavy dusty atmosphere */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#d97706_2.5px,transparent_2.5px)] [background-size:16px_16px] bg-red-950/20"></div>
            
            {/* Clogged duct outer metal */}
            <div className="relative w-full max-w-sm h-28 rounded-2xl border-4 border-amber-900 bg-amber-950/25 flex flex-col justify-center px-4 overflow-hidden shadow-inner">
              {/* Dusty warning glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-amber-900/40 to-red-950/20 animate-pulse"></div>

              {/* Thick allergen/dust layer graphics inside */}
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-red-800/50 to-transparent blur-sm"></div>
              <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-red-800/40 to-transparent blur-sm"></div>

              {/* Floating microbiological allergen clusters */}
              <div className="absolute left-10 top-1/4 w-12 h-6 bg-amber-800/60 rounded-full blur-md animate-pulse"></div>
              <div className="absolute right-12 bottom-1/4 w-20 h-8 bg-red-900/50 rounded-full blur-lg"></div>

              {/* Central high-visibility alert icon */}
              <div className="z-10 flex flex-col items-center justify-center space-y-1">
                <AlertTriangle className="text-amber-500 w-10 h-10 stroke-[2.5] animate-bounce" />
                <span className="text-[9px] font-mono font-extrabold text-amber-500 bg-slate-950/95 px-2 py-0.5 rounded border border-amber-800 tracking-wider uppercase">
                  9-Year Unsanitized Grime
                </span>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute bottom-3 left-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-white bg-red-700/90 px-2 py-1 rounded">
                ⚠️ Clogged return vent
              </span>
            </div>
          </div>

          {/* Detailed metrics and compliance risks */}
          <div className="p-6 space-y-4">
            <div className="space-y-1">
              <h4 className="text-base font-extrabold text-slate-900 uppercase tracking-tight">Compacted Biological Sinks</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                As cooling and heating cycles active, static dander, fiberglass threads, and pollen spores are continually drawn into return registers, compiling a dense microbiological layer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-xs font-semibold">
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Suction Restriction</span>
                <span className="text-sm font-black text-red-600">-43% Air Velocity</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Biological Loading</span>
                <span className="text-sm font-black text-red-600">87% Dust Accumulation</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="block text-[9px] uppercase font-black text-slate-400 tracking-wider">Identified Respiratory Irritants:</span>
              <div className="flex flex-wrap gap-1">
                {['Aspergillus Mold Spores', 'Fiberglass Micro-dregs', 'Drywall Fine Dust', 'Dander & Hair Bed'].map((badge) => (
                  <span key={badge} className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-1 rounded border border-red-100">
                    ⚠️ {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* AFTER: AL Sanitary Restoration Standard */}
        <div className="bg-white border-2 border-amber-200 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between">
          
          {/* Header block with sanitary status label */}
          <div className="p-5 border-b border-amber-100 bg-amber-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse"></span>
              <span className="font-mono text-xs font-black text-amber-700 uppercase tracking-wide">AFTER: AL Source-Removal Standard</span>
            </div>
            <span className="text-[10px] uppercase font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Sanitary: Compliant
            </span>
          </div>

          {/* Symmetrical Representation of a Sanitary Clean Duct */}
          <div className="p-6 bg-slate-950 flex items-center justify-center relative min-h-[180px] overflow-hidden">
            {/* Shimmering clean atmosphere dots */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] bg-slate-900/10"></div>
            
            {/* Shimmering spotless metallic duct */}
            <div className="relative w-full max-w-sm h-28 rounded-2xl border-4 border-amber-500 bg-amber-955/10 flex flex-col justify-center px-4 overflow-hidden shadow-inner">
              {/* Silver/Steel metallic gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-amber-200/5 to-slate-800/50"></div>

              {/* Spotless pristine reflection highlights */}
              <div className="absolute left-6 top-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-305 via-amber-400 to-transparent"></div>
              <div className="absolute right-12 bottom-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

              {/* Glowing sanitary stars */}
              <div className="absolute left-8 top-5 animate-pulse">
                <Sparkles className="text-amber-400 w-4 h-4" />
              </div>
              <div className="absolute right-10 bottom-6 animate-pulse delay-500">
                <Sparkles className="text-yellow-400 w-4 h-4" />
              </div>

              {/* Central sanitary badge and icon */}
              <div className="z-10 flex flex-col items-center justify-center space-y-1">
                <ShieldCheck className="text-amber-500 w-10 h-10 stroke-[2.5]" />
                <span className="text-[9px] font-mono font-extrabold text-amber-500 bg-slate-950/95 px-2 py-0.5 rounded border border-amber-500 tracking-wider uppercase">
                  HEPA-Sanitized Metal
                </span>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute bottom-3 left-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-950 bg-amber-500 px-2 py-1 rounded shadow-sm">
                ✨ AL Certified Sterile
              </span>
            </div>
          </div>

          {/* Detailed metrics and compliance solutions */}
          <div className="p-6 space-y-4">
            <div className="space-y-1">
              <h4 className="text-base font-extrabold text-slate-900 uppercase tracking-tight">Glistening Galvanized Sheets</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Our high-velocity mechanical agitation whips systematically break all surface cling, extracting allergens directly into closed high-lift collectors. Botanical foggers neutralize remaining microscopic mold roots.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-xs font-semibold">
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">HVAC Efficiency</span>
                <span className="text-sm font-black text-amber-600">+99.8% Air Capacity</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Residual Loading</span>
                <span className="text-sm font-black text-amber-600">0.01% Sterile Cleared</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="block text-[9px] uppercase font-black text-slate-400 tracking-wider">Accreted Field Standards:</span>
              <div className="flex flex-wrap gap-1">
                {['NADCA ACR Standard Verified', '100% HEPA Captive Suction', 'EP-Compliant Plenums', 'Botanical Sterilized'].map((badge) => (
                  <span key={badge} className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-100">
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Trust reassurance panel */}
      <div className="p-5 bg-slate-950 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-amber-600 text-slate-950 flex items-center justify-center font-bold">
            <Scale size={18} />
          </div>
          <div>
            <h4 className="font-extrabold text-amber-500 uppercase tracking-wider">Independent Visual Verification Guarantee</h4>
            <p className="text-slate-400 text-[11px]">We capture real-time, inner-terminal video records before and after work is performed.</p>
          </div>
        </div>
        <span className="text-[10px] bg-slate-900 text-slate-400 uppercase font-bold px-3 py-1.5 rounded-lg border border-slate-800">
          📜 NADCA ACR-2021 ACCREDITED
        </span>
      </div>

    </div>
  );
}
