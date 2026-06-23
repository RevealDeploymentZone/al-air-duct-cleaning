import { useState, FormEvent } from 'react';
import { statesData } from '../data/cities';
import { Calculator, CheckCircle2, PhoneCall, Calendar, ShieldCheck } from 'lucide-react';

export default function BookingForm() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('california');
  const [selectedCitySlug, setSelectedCitySlug] = useState<string>('los-angeles');
  const [serviceType, setServiceType] = useState<string>('residential');
  const [propertySize, setPropertySize] = useState<number>(1800); // sqft
  const [ventCount, setVentCount] = useState<number>(12);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');
  const [isCalculated, setIsCalculated] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // States and Cities options
  const activeState = statesData.find(s => s.slug === selectedStateSlug) || statesData[0];
  const activeCity = activeState.cities.find(c => c.slug === selectedCitySlug) || activeState.cities[0];

  // Pricing coefficients
  const calculateEstimate = () => {
    let basePrice = 299;
    let multiplier = 1;

    if (serviceType === 'commercial') {
      basePrice = 499;
      // standard formula based on commercial footprint
      return Math.round(basePrice + propertySize * 0.12);
    } else if (serviceType === 'post-construction') {
      basePrice = 349;
      multiplier = 1.15; // abrasive extraction factor
    } else if (serviceType === 'mold-remediation') {
      basePrice = 499; // chemical sanitization and HEPA containment setups
      multiplier = 1.3;
    }

    // Default residential is registers-based
    const additionalVents = Math.max(0, ventCount - 10);
    const calculated = (basePrice + (additionalVents * 15)) * multiplier;
    return Math.round(calculated);
  };

  const estimatedCost = calculateEstimate();

  const handleStateChange = (stateSlug: string) => {
    setSelectedStateSlug(stateSlug);
    const targetState = statesData.find(s => s.slug === stateSlug);
    if (targetState && targetState.cities.length > 0) {
      setSelectedCitySlug(targetState.cities[0].slug);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!customerEmail || !customerName || !customerPhone || !bookingDate) {
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-205 text-slate-800 rounded-3xl overflow-hidden shadow-xl p-6 lg:p-8 relative border-slate-200" id="pricing-booking-widget">
      {/* Visual background flare */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-1 text-left">
            <span className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold uppercase tracking-wider">
              <Calculator size={14} />
              Instant Cost Calculator
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-1 uppercase">Get an Honest Estimate</h3>
            <p className="text-xs text-slate-500">No hidden dispatch fees. Select your regional metrics for an objective cost matrix.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {/* STATE SELECTION */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Target State</label>
              <select 
                value={selectedStateSlug}
                onChange={(e) => handleStateChange(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm py-2.5 px-3 rounded-lg text-slate-800 cursor-pointer font-semibold"
              >
                {statesData.map((state) => (
                  <option key={state.slug} value={state.slug}>{state.name}</option>
                ))}
              </select>
            </div>

            {/* CITY SELECTION */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Local Service City</label>
              <select 
                value={selectedCitySlug}
                onChange={(e) => setSelectedCitySlug(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm py-2.5 px-3 rounded-lg text-slate-800 cursor-pointer font-semibold"
              >
                {activeState.cities.map((city) => (
                  <option key={city.slug} value={city.slug}>{city.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* SERVICE SELECTION */}
          <div className="text-left">
            <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Ventilation Hygiene Strategy</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { id: 'residential', label: 'Residential Duo' },
                { id: 'commercial', label: 'Commercial HVAC' },
                { id: 'post-construction', label: 'Post-Renovation' },
                { id: 'mold-remediation', label: 'Mold Remediation' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setServiceType(opt.id)}
                  className={`py-2 px-1 text-xs font-semibold rounded-lg flex items-center justify-center transition-all border outline-none cursor-pointer ${
                    serviceType === opt.id 
                    ? 'bg-amber-50 text-amber-700 border-amber-500 font-bold' 
                    : 'bg-slate-50 text-slate-500 border-slate-200 hover:text-slate-800 hover:border-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC FIELD ADJUSTERS */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4 text-left">
            {serviceType === 'commercial' ? (
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-500">Total Commercial Deck Area</span>
                  <span className="text-amber-600 font-black">{propertySize.toLocaleString()} SQ FT</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  step="100"
                  value={propertySize}
                  onChange={(e) => setPropertySize(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600" 
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>500 sq ft</span>
                  <span>15,000 sq ft</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-500">Register Supply Vents (Includes Trunks)</span>
                  <span className="text-amber-600 font-black">{ventCount} Vents</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="35" 
                  step="1"
                  value={ventCount}
                  onChange={(e) => setVentCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600" 
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>5 Registers</span>
                  <span>35 Registers</span>
                </div>
              </div>
            )}

            {/* Live Pricing Breakdown banner */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-200">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">Estimated Cost Range</span>
                <span className="text-2xl font-black text-amber-600">${estimatedCost} - ${Math.round(estimatedCost * 1.15)}</span>
              </div>
              <div className="text-right flex flex-col justify-end">
                <span className="text-[9px] text-slate-500 bg-slate-100 border border-slate-200 py-0.5 px-2 rounded-full inline-block font-bold">
                  NADCA Pricing Matrix
                </span>
                <span className="text-[9px] text-emerald-600 font-bold mt-1 flex items-center justify-end gap-1">
                  <ShieldCheck size={11} />
                  Includes Sanitization
                </span>
              </div>
            </div>
          </div>

          {/* CONTACT INFO FIELDS */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Reserve Priority Slot</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input 
                type="text" 
                placeholder="Your Full Name" 
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs py-2 px-3 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-semibold" 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs py-2 px-3 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-semibold" 
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs py-2 px-3 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-semibold" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-400">
                  <Calendar size={13} />
                </span>
                <input 
                  type="date" 
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-xs py-2 pl-9 pr-3 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 cursor-pointer font-bold uppercase" 
                />
              </div>
              <div className="flex items-center justify-center p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                <span className="text-[10px] text-emerald-700 font-bold">100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-extrabold rounded-xl shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm outline-none cursor-pointer uppercase"
          >
            Submit Slot Booking & Lock-In Price
          </button>
        </form>
      ) : (
        <div className="text-center py-12 px-4 space-y-6">
          <div className="w-16 h-16 bg-emerald-50 border border-emerald-500 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce animate-pulse">
            <CheckCircle2 size={36} />
          </div>
          
          <h3 className="text-2xl font-black text-slate-900 uppercase">Priority Reservation Received!</h3>
          
          <div className="max-w-md mx-auto space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs text-slate-700">
            <p className="font-bold text-amber-600 mb-2">Slot Details Reserved:</p>
            <p><strong>Customer:</strong> {customerName}</p>
            <p><strong>Contact:</strong> {customerPhone} | {customerEmail}</p>
            <p><strong>Local Service Area:</strong> {activeCity.name}, {activeState.name}</p>
            <p><strong>Estimated Quoted Fare:</strong> <span className="text-emerald-650 font-bold">${estimatedCost} - ${Math.round(estimatedCost * 1.15)}</span></p>
            <p><strong>Scheduled Review:</strong> {bookingDate}</p>
            <p className="text-[10px] text-slate-500 pt-3 border-t border-slate-200 mt-3 leading-relaxed">
              Our regional dispatch supervisor for **{activeCity.name} ({activeCity.phone})** is auditing your dimensions. We will contact you shortly to confirm the technician arrival window. Thank you for choosing AL Air Duct Cleaning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 font-bold text-xs uppercase">
            <a 
              href={`tel:${activeCity.phone}`} 
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs"
            >
              <PhoneCall size={14} />
              Call {activeCity.name} Branch: {activeCity.phone}
            </a>
            <button 
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setCustomerName('');
                setCustomerEmail('');
                setCustomerPhone('');
                setBookingDate('');
              }} 
              className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 text-xs cursor-pointer"
            >
              Calculate Another Estimate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
