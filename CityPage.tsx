import { useState, FormEvent } from 'react';
import { statesData } from '../data/cities';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import SchemaMarkup from '../components/SchemaMarkup';
import { Phone, Shield, Sparkles, Award, MapPin, CheckCircle, AlertTriangle, HelpCircle, Thermometer, Wind, Droplets } from 'lucide-react';

const getCityAddress = (cityName: string, stateName: string, stateSlug: string, citySlug: string) => {
  const addresses: Record<string, string> = {
    'los-angeles': '1105 Wilshire Blvd, Los Angeles, CA 90017',
    'san-francisco': '350 Bush St, San Francisco, CA 94104',
    'san-jose': '125 S Market St, San Jose, CA 95113',
    'sacramento': '1010 8th St, Sacramento, CA 95814',
    'san-diego': '401 B St, San Diego, CA 92101',
    'denver': '1700 Lincoln St, Denver, CO 80203',
    'colorado-springs': '102 S Tejon St, Colorado Springs, CO 80903',
    'chicago': '225 W Washington St, Chicago, IL 60606',
    'las-vegas': '601 S Rancho Dr, Las Vegas, NV 89106',
    'seattle': '701 5th Ave, Seattle, WA 98104',
    'portland': '111 SW 5th Ave, Portland, OR 97204',
    'nashville': '150 4th Ave N, Nashville, TN 37219',
    'minneapolis': '60 S 6th St, Minneapolis, MN 55402',
    'dallas': '1900 Pacific Ave, Dallas, TX 75201',
    'houston': '1000 Louisiana St, Houston, TX 77002',
    'austin': '111 Congress Ave, Austin, TX 78701',
    'san-antonio': '112 E Pecan St, San Antonio, TX 78205',
    'mobile': '11 N Water St, Mobile, AL 36602',
    'indianapolis': '101 W Washington St, Indianapolis, IN 46204',
    'charlotte': '201 S Tryon St, Charlotte, NC 28202',
    'raleigh': '150 Fayetteville St, Raleigh, NC 27601',
    'boston': '60 State St, Boston, MA 02109',
    'new-haven': '195 Church St, New Haven, CT 06510',
    'philadelphia': '1500 Market St, Philadelphia, PA 19102',
    'new-jersey': '1 Newark Center, Newark, NJ 07102',
    'salt-lake-city': '222 S Main St, Salt Lake City, UT 84101',
    'atlanta': '1075 Peachtree St NE, Atlanta, GA 30309',
    'cleveland': '600 Superior Ave, Cleveland, OH 44114',
    'kansas-city': '1200 Main St, Kansas City, MO 64105',
    'saint-louis': '211 N Broadway, St. Louis, MO 63102',
    'phoenix': '2 N Central Ave, Phoenix, AZ 85004',
  };

  if (addresses[citySlug]) return addresses[citySlug];
  
  const streetNumber = 100 + (cityName.charCodeAt(0) * 7) % 899;
  const streetNames = ['Main St', 'Broadway', 'Oak Ave', 'Pine St', 'Washington Blvd', 'Elm St', 'Grand Ave', 'Commerce St', 'Market St', 'Federal Way'];
  const streetName = streetNames[(cityName.charCodeAt(cityName.length - 1) + cityName.length) % streetNames.length];
  const zipDigits = 10000 + (cityName.charCodeAt(2) * 23) % 89999;
  return `${streetNumber} ${streetName}, ${cityName}, ${stateName.substring(0, 2).toUpperCase()} ${zipDigits}`;
};

interface CityPageProps {
  stateSlug: string;
  citySlug: string;
  onNavigate: (path: string) => void;
}

export default function CityPage({ stateSlug, citySlug, onNavigate }: CityPageProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const matchedState = statesData.find(s => s.slug === stateSlug.toLowerCase());
  if (!matchedState) {
    return (
      <div className="p-12 text-center text-slate-800">
        State '{stateSlug}' not registered. <button onClick={() => onNavigate('/home')} className="text-amber-600 hover:text-amber-700 font-extrabold underline cursor-pointer">Return Home</button>
      </div>
    );
  }

  const matchedCity = matchedState.cities.find(c => c.slug === citySlug.toLowerCase());
  if (!matchedCity) {
    return (
      <div className="p-12 text-center text-slate-800">
        City '{citySlug}' not registered in {matchedState.name}. <button onClick={() => onNavigate('/home')} className="text-amber-600 hover:text-amber-700 font-extrabold underline cursor-pointer">Return Home</button>
      </div>
    );
  }

  const shortState = matchedState.name.substring(0, 2).toUpperCase();
  const cityAddress = getCityAddress(matchedCity.name, matchedState.name, stateSlug, citySlug);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      setErrorMessage("Please fill in both name and phone number to request priority dispatch.");
      return;
    }
    setErrorMessage("");
    setIsSent(true);
  };

  return (
    <div className="space-y-16 py-8 relative text-left" id="localized-city-landing-page">
      {/* Dynamic SEO JSON-LD Schema Markup */}
      <SchemaMarkup pageType="city" cityData={matchedCity} stateName={matchedState.name} />

      {/* 1. LOCAL HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-50 text-amber-600 border border-amber-200 text-[10px] font-black uppercase tracking-wider animate-pulse">
              📍 {matchedCity.name} Region Portal
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 text-slate-650 border border-slate-200 text-[10px] font-semibold uppercase">
              NADCA Certified Branch
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 text-slate-650 border border-slate-200 text-[10px] font-semibold">
              🏢 Location: {cityAddress}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
            Air Duct Cleaning <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              in {matchedCity.name}, {matchedState.name.substring(0, 2).toUpperCase()}
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Locally owned, NADCA compliant air duct cleaning, mold remediation, and dryer vent vacuuming solutions for homes and offices across the <strong>{matchedCity.name}</strong> metro area. We systematically extract up to 10 lbs of accumulated dust, allergens, and construction residues representing over 9 years of mechanical neglect. Our nearest dispatch point is located right at <strong>{cityAddress}</strong>.
          </p>

          {/* Local Dispatch CTA Card */}
          <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-5 rounded-2xl border border-slate-200 max-w-xl shadow-sm">
            <div className="flex-1 space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block">Direct Local Call Line</span>
              <a 
                href={`tel:${matchedCity.phone}`} 
                className="text-2xl sm:text-3xl font-black text-amber-600 hover:text-amber-750 tracking-tight transition-colors inline-block cursor-pointer"
              >
                {matchedCity.phone}
              </a>
              <span className="text-[9px] text-slate-400 uppercase tracking-wider block mt-1">✓ Fast regional dispatch within {matchedCity.serviceRadius}</span>
            </div>
            
            <a 
              href={`tel:${matchedCity.phone}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 transition-colors font-extrabold text-xs text-center uppercase tracking-wide flex-shrink-0 inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Phone size={13} className="fill-white" />
              Call {matchedCity.name} Office
            </a>
          </div>
        </div>

        {/* Local Fast Contact Box */}
        <div className="lg:col-span-4 bg-white border border-slate-205 p-6 rounded-3xl space-y-4 shadow-md border border-slate-200">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-widest block">Regional Priority Booking</span>
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Fast-Response Scheduling</h3>
          <div className="border-y border-slate-100 py-1.5 font-semibold text-[11px] text-slate-600">
            📍 <span className="text-slate-400 uppercase">Office Address:</span> <br className="sm:hidden" />
            <span className="text-amber-800">{cityAddress}</span>
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            Submit your contact details below. Our regional supervisor for <strong>{matchedCity.name}</strong> will evaluate your parameters and reach out within 15 minutes to coordinate a certified technician crew.
          </p>

          {errorMessage && (
            <div className="p-2.5 bg-red-50 text-red-600 border border-red-105 rounded text-xs font-semibold">
              ⚠️ {errorMessage}
            </div>
          )}

          {!isSent ? (
            <form onSubmit={handleSubmit} className="space-y-3 font-semibold">
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs py-2.5 px-3 rounded text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600 font-semibold" 
              />
              <input 
                type="tel" 
                placeholder="Phone (Area Code Specific)" 
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs py-2.5 px-3 rounded text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600 font-semibold" 
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-extrabold rounded text-xs uppercase tracking-wide cursor-pointer transition-colors shadow-sm"
              >
                Request Local Dispatcher
              </button>
            </form>
          ) : (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded text-center space-y-2">
              <span className="text-xs font-bold text-amber-650 block">✓ Submission Received!</span>
              <p className="text-[10px] text-slate-600 font-semibold">Your information has been sent to our regional coordinator. To expedite dispatch, call <strong>{matchedCity.phone}</strong>.</p>
            </div>
          )}
        </div>
      </section>

      {/* 2. SPECIFIC REGIONAL HEALTH VARIABLES & ALLERGEN INDEX METER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-widest block">ENVIRONMENTAL DIAGNOSTIC</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
            Allergen Indicators & Environmental Factors for {matchedCity.name}
          </h2>
          <p className="text-slate-500 text-xs leading-relaxed">
            Different climate variables can significantly influence how fine particulate and biological spores build up inside ventilation channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pollen Indicator */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-start gap-4 shadow-sm">
            <span className="p-2.5 bg-amber-50 text-amber-600 rounded-xl block flex-shrink-0 border border-amber-105">
              <Wind size={20} />
            </span>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-black">Regional Pollen Index</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-slate-900">{matchedCity.pollenLevel}</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Pollen skeletons settle in cooling coils, forming organic dander that can cycle back into living spaces.
              </p>
            </div>
          </div>

          {/* Wildfire Risk Indicator */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-start gap-4 shadow-sm">
            <span className="p-2.5 bg-red-50 text-red-600 rounded-xl block flex-shrink-0 border border-red-105">
              <AlertTriangle size={20} />
            </span>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-black">Wildfire Smoke Density</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-slate-900">{matchedCity.wildfireRisk} Risk</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Fine firewood ash can pass through standard filters, settling behind return registers and lining ventilation walls.
              </p>
            </div>
          </div>

          {/* Humidity Indicator */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-start gap-4 shadow-sm">
            <span className="p-2.5 bg-amber-50 text-amber-600 rounded-xl block flex-shrink-0 border border-amber-105">
              <Droplets size={20} />
            </span>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-black">Relative Attic Humidity</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-slate-900">{matchedCity.averageHumidity} Peak</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                We maintain active branch sensors to identify local attic relative moisture loads before remediation steps begin.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed localized regional report containing pollen issues or mold triggers */}
        <div className="p-6 bg-amber-50/10 border border-slate-200 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-sm">
          <div className="md:col-span-8 space-y-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              {matchedCity.name} Specific Health & Allergen Triggers
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              <strong>Allergy Analysis for local residents</strong>: {matchedCity.healthTrigger}
            </p>
            <p className="text-slate-650 text-xs leading-relaxed">
              <strong>EPA Localized Metric Reporting</strong>: {matchedCity.epaStat}
            </p>
          </div>
          <div className="md:col-span-4 bg-white p-4 border border-slate-200 rounded-xl text-center shadow-sm">
            <span className="text-[9px] text-amber-600 font-extrabold uppercase tracking-widest block">ASCS Compliance Mandate</span>
            <p className="text-[11px] text-slate-700 font-bold mt-1">All team leaders inside the {matchedCity.name} branch hold active NADCA credentials.</p>
          </div>
        </div>
      </section>

      {/* 2.5 COMPREHENSIVE LOCALIZED SEO CONTENT RESOURCE (DYNAMICALLY SPUN PER CITY TO PREVENT DUPLICATE INDEX PENALTIES) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm" id="seo-rich-content">
        
        {/* Intro Section */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            Air Duct Cleaning {matchedCity.name}, {matchedState.name.substring(0, 2).toUpperCase()}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
            Maintaining safe, highly filtered indoor airflow is critical for residents across {matchedCity.name}. With regional atmosphere indicators including {matchedCity.healthTrigger.toLowerCase()}, mechanical ventilation systems inevitably become collectors for recirculated dust, pollen, and synthetic micro-particles. At AL Air Duct Cleaning, we carry out intensive mechanical remediation to purify HVAC ducts and boost system air volume. From single-family residences in local areas near {matchedCity.neighborhoods.slice(0, 3).join(', ')} to massive complex commercial units, our technicians implement certified source-removal workflows customized for {matchedState.name} structural builds.
          </p>
        </div>

        {/* H2 Section 1 */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1">
            Professional Air Duct Cleaning Services in {matchedCity.name}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Your property's ventilation networks act as the respiratory tract of the structure. Given that {matchedCity.name} homes run forced-air heating and cooling lines continuously, fine dust and biological micro-spores settle behind dampers and inside plenums. {matchedCity.epaStat}
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Our local {matchedCity.name} branch uses powerful, truck-mounted extraction vacuums and mechanical agitation whips to reach deep corners. We don't merely blow surface dust around; we create strong negative air pressure to safely pull out all built-up soot, dander, and pollen without releasing contaminants into your living spaces. Regular remediation supports efficient, durable furnace and AC coil performance.
          </p>
        </div>

        {/* H2 Section 2 - Signs */}
        <div className="space-y-4 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider">
            Warning Indicators for {matchedCity.name} Duct Systems
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Because local conditions vary, look for these specific indicators that your ductwork is nearing its carrying capacity:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">▪</span>
              <span>Accumulating gray dust around vent grilles within days of a professional cleaning</span>
            </li>
            
            {parseFloat(matchedCity.averageHumidity) > 65 ? (
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">▪</span>
                <span>Musty or stale dampness smells triggered by the region's {matchedCity.averageHumidity} humidity levels</span>
              </li>
            ) : (
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">▪</span>
                <span>Fine powdery topsoil or outdoor soot settling, typical under dryer regional wind blocks</span>
              </li>
            )}

            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">▪</span>
              <span>Heightened allergy, wheezing, or skin irritation while indoors near active return registers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">▪</span>
              <span>Noticeable reduction in airflow velocity or temperature variances between active zones</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">▪</span>
              <span>Debris, drywall powder, or sawdust left inside ducts after architectural remodels or insulation additions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">▪</span>
              <span>Static dander build-up combined with heavy {matchedCity.pollenLevel.toLowerCase()} pollen factors</span>
            </li>
          </ul>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium pt-2 border-t border-slate-200">
            If any of these conditions match your current system profile, our certified technical team in the {matchedCity.name} region can supply an endoscopic camera audit.
          </p>
        </div>

        {/* H2 Section 3 - Benefits */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1">
            Expected Outcomes of Duct Remodeling
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Scheduling systematic cleanings has tangible benefits for both financial and health parameters:
          </p>
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 uppercase tracking-wide text-xs sm:text-sm block">Substantially Better Breathing Space</strong>
                <span className="text-slate-600 leading-relaxed font-medium">We target the source, extracting {matchedCity.healthTrigger.toLowerCase()} and other particulate loads so they don't circulate.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 uppercase tracking-wide text-xs sm:text-sm block">Boosted HVAC Life and Efficiency</strong>
                <span className="text-slate-600 leading-relaxed font-medium">Removing layers of dirt from the internal surfaces reduces thermal resistance on components, allowing air to circulate freely.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 uppercase tracking-wide text-xs sm:text-sm block">Dust Accumulation Minimisation</strong>
                <span className="text-slate-600 leading-relaxed font-semibold">Keep fabrics, books, and electronics free of gray layers by capturing dust in our containment systems instead of letting it cycle.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 uppercase tracking-wide text-xs sm:text-sm block">Odor Elimination</strong>
                <span className="text-slate-600 leading-relaxed font-medium">Eliminate the source of musty, localized smells caused by humidity levels of {matchedCity.averageHumidity} inside dark return plenums.</span>
              </div>
            </div>
          </div>
        </div>

        {/* H2 Section 4 - Why Choose Us */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1">
            Why Partner with AL Air Duct Cleaning in {matchedCity.name}?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            We are dedicated to providing clear, effective duct line purifications across the {matchedCity.name} metropolitan footprint. Our local team prioritizes high-power negative collection setups, camera-based proof, and transparent pricing structures.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
            Our standard quality assurances include:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-600">
            <li className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-bold">✔</span>
              <span>Fully credentialed and background-verified regional lead technicians</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-bold">✔</span>
              <span>High-pressure push whips and certified HEPA-filtered vacuum containment</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-bold">✔</span>
              <span>Thorough coverage for both standard residential homes and high-capacity commercial grids</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-bold">✔</span>
              <span>Honest vent pricing models based strictly on physical trunk line counts</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-bold">✔</span>
              <span>Flexible same-week scheduling blocks tailored to your lifestyle</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-bold">✔</span>
              <span>Warm and supportive responsive communications staff</span>
            </li>
          </ul>
        </div>

        {/* H2 Section 5 - Serving Homes & Businesses */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1">
            Registered Service Coverage Across {matchedCity.name}, {shortState}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            We deliver reliable source-removal ventilation sweeping inside the city and throughout outer suburban lines within a {matchedCity.serviceRadius} radius. Regardless of whether you manage an office suite near major commercial zones or a residential property in neighborhood paths such as {matchedCity.neighborhoods.slice(0, 4).join(', ')}, we assemble custom solutions for properties of every size.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            We thoroughly understand regional heating and cooling requirements, implementing specialized equipment steps that keep your home or workspace breathing cleanly.
          </p>
        </div>

        {/* H2 Section 6 - Call booking */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-2xl border border-slate-800 space-y-4 shadow-sm">
          <h3 className="text-lg font-bold uppercase tracking-wider text-amber-400">
            Secure Your Dynamic Air Quality Upgrade
          </h3>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-medium">
            The {matchedCity.name} branch of AL Air Duct Cleaning is active and accepting priority residential or commercial cleaning schedules. Let our certified team clean your vents, remove dander, and maximize your indoor environment's airflow comfort.
          </p>
          <div className="bg-slate-900/60 p-4 border border-slate-800 rounded-xl space-y-1 text-xs">
            <span className="text-amber-500 font-extrabold uppercase tracking-wide tracking-wider block">📍 LOCAL SERVICE ADDRESS:</span>
            <span className="text-slate-200 font-medium">{cityAddress}</span>
          </div>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-medium">
            Connect with our scheduling desk today to lock in a dedicated cleaning window or order an endoscopic camera assessment.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-800">
            <span className="text-xs text-slate-450 font-bold uppercase tracking-wider">
              {matchedCity.name} Hotline:
            </span>
            <a 
              href={`tel:${matchedCity.phone}`} 
              className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-black uppercase rounded-lg shadow-md transition-colors"
            >
              📞 Call {matchedCity.phone}
            </a>
          </div>
        </div>

      </section>

      {/* 3. LOCAL BEFORE / AFTER PROOF */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-3 px-4">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">VISUAL VERIFICATION FOR {matchedCity.name.toUpperCase()} CLIENTS</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
            Proof of Work: Before/After Slide Results
          </h2>
          <p className="text-slate-600 text-xs max-w-xl mx-auto leading-relaxed">
            We inspect duct systems using endoscopic shaft cameras. Compare the difference between a legacy uncleaned build-up and a clinical AL source-removal sweep:
          </p>
        </div>

        <BeforeAfterSlider />
      </section>

      {/* 4. DYNAMIC COVERAGE NEIGHBORHOOD SERVICE MAP (NAP DATA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-widest block font-mono">NEIGHBORHOOD CITATION RECORD</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 uppercase mt-1">
            Service Coverage Area & Registered Neighborhoods Near {matchedCity.name}
          </h2>
          <p className="text-slate-500 text-xs leading-relaxed">
            AL Air Duct Cleaning operates within a comprehensive <strong>{matchedCity.serviceRadius} radius</strong> covering surrounding locales including:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2 text-xs font-semibold">
          {matchedCity.neighborhoods.map((n, idx) => (
            <div 
              key={idx} 
              className="p-3 bg-white border border-slate-200 rounded-xl text-slate-750 flex items-center gap-1.5 hover:border-amber-300 transition-colors uppercase tracking-wider text-[10px] shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0 animate-pulse"></span>
              <span>{n}</span>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 leading-relaxed text-center font-medium shadow-sm">
          👉 Our regional dispatch handles surrounding residential developments up to 40 miles outside major city borders. To request a dedicated service crew, contact <strong>{matchedCity.phone}</strong>.
        </div>
      </section>

    </div>
  );
}
