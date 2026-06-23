import { Award, ShieldAlert, Sparkles, Clock, CheckCircle2, Heart, Scale, ShieldCheck } from 'lucide-react';

interface WhyChooseUsProps {
  onNavigate: (path: string) => void;
}

export default function WhyChooseUs({ onNavigate }: WhyChooseUsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-left" id="why-choose-us-view">
      
      {/* 1. HEADER HERO */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
          🏆 OVER 9 YEARS OF FIELD QUALITY
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
          Rooted in Quality. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
            Founded in 2019.
          </span>
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          AL Air Duct Cleaning was established in 2019 with a transparent goal: bringing precision, scientific integrity, and compliance to an industry crowded with uncertified sweeps. Over the last 9 years, we have scaled from a single regional truck in California to a nationwide dispatch operation without losing our family-owned service standard.
        </p>
      </div>

      {/* 2. CORE DIFFERENTIATOR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center">
            <Clock size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">9-Year Field Legacy</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Founded in 2019, our tenure guarantees deep familiarity with various building formats, furnace designs, fire dampers, and attic duct profiles across state borders.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center">
            <Award size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">ASCS Certified Staff</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Our teams are headed by Air Systems Cleaning Specialists. We don't dispatch untrained day-laborers; every team is vetted for structural HVAC safety.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center">
            <Scale size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Transparent Quotes</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Forget dispatch bait-and-switch. We utilize standard, upfront, per-vent and per-trunk parameters. The cost estimate we calculate here is respected at your door.
          </p>
        </div>
      </div>

      {/* 3. SCIENTIFIC DIFFERENCE TABLE */}
      <div className="bg-white border-2 border-amber-100 rounded-3xl overflow-hidden p-6 lg:p-8 space-y-6 shadow-sm">
        <div className="space-y-1">
          <span className="text-xs text-amber-650 text-amber-600 font-bold uppercase tracking-widest">INDUSTRY QUALITY REGISTER</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1 uppercase">
            Compare Our Systems vs. Consumer Cleaners
          </h2>
          <p className="text-slate-550 text-xs">A comparison of uncertified vacuum operators vs. our NADCA-aligned suction platforms.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase font-bold text-[10px]">
                <th className="py-3 px-4">Technical Parameter</th>
                <th className="py-3 px-4 text-red-650 bg-red-50/50 rounded-t-lg">Uncertified Contractors</th>
                <th className="py-3 px-4 text-amber-700 bg-amber-50/50 rounded-t-lg">AL Air Duct Core Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-slate-650">
              <tr>
                <td className="py-4 px-4 text-slate-800 font-bold">Vacuum Suction Level</td>
                <td className="py-4 px-4 bg-red-50/10 text-slate-550">Portable Shop-Vacs (~400 CFM) — merely stirs fine dander</td>
                <td className="py-4 px-4 bg-amber-50/10 text-slate-800">High-Displacement Negative Collector (4,000-5,000 CFM)</td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-slate-800 font-bold">Main Trunk Insertion</td>
                <td className="py-4 px-4 bg-red-50/10 text-slate-550">Only cleans register boots — leaves main lines blocked</td>
                <td className="py-4 px-4 bg-amber-50/10 text-slate-800">Pneumatic access ports cut directly to main supply trunks</td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-slate-800 font-bold">Agitation Tools</td>
                <td className="py-4 px-4 bg-red-50/10 text-slate-550">Manual hand brushes that brush surface vents superficially</td>
                <td className="py-4 px-4 bg-amber-50/10 text-slate-800">Spinning air-whips, scraper nozzles, & reverse sweeping balls</td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-slate-800 font-bold">Mold Treatment Sanitizer</td>
                <td className="py-4 px-4 bg-red-50/10 text-slate-550">Retail chemical bleach (damages coils and corrodes silver plating)</td>
                <td className="py-4 px-4 bg-amber-50/10 text-slate-800">EPA-Registered, pet-safe, non-toxic botanical disinfectants</td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-slate-800 font-bold">Work Verification</td>
                <td className="py-4 px-4 bg-red-50/10 text-slate-550">"Take our word for it"</td>
                <td className="py-4 px-4 bg-amber-50/10 text-amber-700 font-black">Before & After fiber-endoscopic photos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. HERITAGE STORY & CITIZEN MISSION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
            Family Roots & Nationwide Scaling
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">
            9 Years of Dedicated Air Quality Advocacy
          </h2>
          <p className="text-slate-600 text-xs leading-relaxed">
            When we established ourselves in 2019, a major goal was educating building owners about the link between dirty ventilation systems and chronic illness. Mold and mildew can thrive in sealed attic systems, and conventional filters struggle to trap tiny allergens.
          </p>
          <p className="text-slate-600 text-xs leading-relaxed">
            By investing in commercial truck-mounted negative-air vacuum equipment, we provided a deep-cleaning alternative that completely extracts particulate. Over the last 9 years, we have helped thousands of families reduce indoor airborne dust.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/nadca-certified')}
              className="inline-flex items-center gap-1.5 text-xs font-black text-amber-605 hover:text-amber-750 transition-colors cursor-pointer"
            >
              Verify Our National Standards Credibility →
            </button>
          </div>
        </div>

        {/* Big Anniversary Banner Box */}
        <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl p-8 text-white space-y-4 relative overflow-hidden shadow-xl flex flex-col justify-center">
          <div className="absolute top-0 right-0 opacity-10 font-bold text-[180px] leading-none pointer-events-none translate-x-12 translate-y-6">
            9
          </div>
          <span className="inline-block px-3 py-1 bg-slate-900/30 text-amber-100 text-[10px] font-black uppercase tracking-widest rounded-full self-start">
            Special Jubilee Promo
          </span>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-none uppercase">
            Celebrating 9 Years of Breathing Healthier Air
          </h3>
          <p className="text-amber-50 text-xs font-medium leading-relaxed">
            To show appreciation for the regions that have supported us since 2019, we are offering an anniversary special: lock in an extra <strong>15% Off</strong> sanitizing fog treatments for any confirmed residential booking this month.
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
              className="px-5 py-2.5 bg-white text-amber-700 hover:bg-amber-50 transition-colors text-xs font-black uppercase rounded-lg shadow-md cursor-pointer"
            >
              Lock-In Anniversary Deal
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
