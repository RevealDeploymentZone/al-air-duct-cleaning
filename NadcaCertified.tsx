import { Shield, Award, CheckCircle, Scale, GraduationCap, FileCheck } from 'lucide-react';

interface NadcaCertifiedProps {
  onNavigate: (path: string) => void;
}

export default function NadcaCertified({ onNavigate }: NadcaCertifiedProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-left animate-fade-in" id="nadca-trust-view">
      
      {/* 1. HERO BLOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
            🛡️ NATIONAL TRUST REGISTERS & CERTIFICATIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
            NADCA Certified. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Contractor Integrity
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Air duct cleaning is a complex technical process that requires careful handling. Without proper training, unqualified cleaning companies can easily break evaporator fins, puncture electrical conduits, or rupture flexible heating supply tubes. Hiring a <strong>NADCA (National Air Duct Cleaners Association)</strong> professional prevents those issues.
          </p>
        </div>

        {/* Visual Badge Frame */}
        <div className="lg:col-span-4 bg-white border border-amber-500/35 p-8 rounded-3xl text-center flex flex-col justify-center items-center relative overflow-hidden shadow-xl border-2 border-amber-500/30">
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/5 rounded-full blur-2xl font-semibold"></div>
          <Award size={64} className="text-amber-600 mb-4 animate-pulse" />
          <h3 className="text-xs font-extrabold uppercase text-slate-900 tracking-widest">ASCS CERTIFIED WORKPLACE</h3>
          <p className="text-[11px] text-slate-400 mt-1 font-semibold">Air Systems Cleaning Specialist</p>
          <span className="mt-4 inline-block text-[10px] uppercase font-black text-amber-700 bg-amber-50 border border-amber-200 py-1 px-3 rounded-full">
            NADCA Active Member
          </span>
        </div>
      </div>

      {/* 2. THE THREE NADCA PILLARS WE HONOR */}
      <div className="space-y-6">
        <div>
          <span className="text-xs text-amber-700 font-bold uppercase tracking-widest">COMMITMENT ACCORD</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 uppercase">
            The Three Foundations of our NADCA Licensure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-semibold">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
              <Shield size={18} />
            </div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">ACR Standard Adherence</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              We perform all cleanings in accordance with the ACR-2021 Standard. This includes mechanical source extraction, negative boundary seal-offs, and systematic coil scrubbing.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center">
              <GraduationCap size={18} />
            </div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Annual Continuing Education</h3>
            <p className="text-slate-500 text-xs leading-relaxed font-semibold">
              HVAC technologies evolve. Our technicians receive continuing education credits to stay current on variable-refrigerant systems and smart airflow models.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center">
              <FileCheck size={18} />
            </div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Independent Testing Code</h3>
            <p className="text-slate-500 text-xs leading-relaxed font-semibold">
              We adhere strictly to ethical guidelines. We never invent simulated biological test results or recommend unnecessary services simply to drive sales.
            </p>
          </div>
        </div>
      </div>

      {/* 3. STEP BY STEP ACR-2021 CLEANING PROCEDURE REPORT */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 space-y-8 shadow-sm">
        <div>
          <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">TECHNICAL WHITE PAPER</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1 uppercase">
            Standard NADCA HVAC Cleaning Protocol Workflow
          </h2>
          <p className="text-slate-500 text-xs">This details our systematic source extraction service flow for home or commercial sites.</p>
        </div>

        <div className="space-y-6">
          {[
            { step: '01', title: 'System Boundary Isolation & Negative Setup', desc: 'Our team seals off supply diffuser registers to create secure zone boundaries. We then connect our commercial truck-mounted intake to the main return trunk, using high negative pressure to trap loosened particles.' },
            { step: '02', title: 'Mechanical Sweeping & Pneumatic Air Agitation', desc: 'We insert spinning pneumatic whips and reverse air-sweepers into individual branch lines. This physical dander, soot, drywall powder, and clothing fibers loose from metal duct walls.' },
            { step: '03', title: 'HVAC Component Scouring', desc: 'Duct cleaning is incomplete without treating the HVAC system itself. We scrub and clean fan blowers, heating elements, and evaporator coils to restore peak cooling efficiency.' },
            { step: '04', title: 'Biomorphic Disinfectant Fogging (Optional)', desc: 'For systems showing biological mold growth, we apply a botanical sanitizer mist. This child-and-pet-safe disinfectant neutralizes odor-causing fungal spores.' },
            { step: '05', title: 'Before-And-After Visual Audit Report', desc: 'To provide absolute transparency, our operators compile high-definition endoscopic photos of the duct interiors before resealing access ports.' }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start border-b border-slate-100 pb-6 last:border-0 last:pb-0 font-semibold text-xs text-slate-650">
              <span className="text-xl font-bold font-mono text-amber-700 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-xl">
                {item.step}
              </span>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. EMERGENCY WARNING ON "BLOW AND GO" CRITERIA */}
      <div className="p-6 bg-red-50/50 border border-red-200 rounded-2xl flex flex-col sm:flex-row gap-4 items-start shadow-sm font-semibold">
        <span className="p-2 bg-red-100/50 text-red-655 text-red-700 rounded-lg block flex-shrink-0 text-lg font-bold">
          ⚠️
        </span>
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-red-700 uppercase tracking-wider">Educational Warning: Beware of Low-Tier Vent Cleaners</h4>
          <p className="text-slate-600 text-xs leading-relaxed">
            Many uncertified operators offer flat-rate duct cleanings for very low fees, such as $49. These operators frequently rely on aggressive upsell tactics once inside your home. They may use ungrounded visual probes to suggest expensive biological issues, or simply blow superficial compressed air into your returns, leaving the main supply trunks choked with dirt and allergens.
          </p>
        </div>
      </div>

    </div>
  );
}
