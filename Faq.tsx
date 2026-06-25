import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldQuestion, ArrowRight } from 'lucide-react';
import { FAQItem } from './types';

export default function Faq() {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How frequently does NADCA recommend cleaning air ducts?',
      answer: 'The National Air Duct Cleaners Association (NADCA) recommends having your air ducts inspected annually and thoroughly cleaned every 3 to 5 years. However, this timeline can shorten to 1 to 2 years if you have indoor pets, smoke in the home, have recently completed a renovation, or have family members with chronic throat or dander allergies.',
      category: 'NADCA'
    },
    {
      id: 'faq-2',
      question: 'What is the EPA recommendation on chemical sanitizers in air ducts?',
      answer: 'The Environmental Protection Agency (EPA) advises only using chemical sanitizers that are registered specifically for HVAC system use. It is important to note that these treatments should be considered after physical brushing and negative-air extraction have successfully removed loose debris. We utilize highly effective, non-toxic botanical disinfectants derived from thyme oil extracts, which are safe for households with children and pets.',
      category: 'Health'
    },
    {
      id: 'faq-3',
      question: 'Why does your post-construction service cost more than standard residential cleaning?',
      answer: 'Post-construction cleaning addresses abrasive drywall plaster dust and silica powders that bypass standard household filters. These fine compounds tend to settle on the grease-treated interior of metal ducting. Clearing them requires continuous high-volume negative air pressure coupled with mechanical agitation, rather than just simple suction sweeps, to protect your fan motors from potential wear.',
      category: 'Pricing'
    },
    {
      id: 'faq-4',
      question: 'Does duct cleaning damage flexible fiberglass air duct systems?',
      answer: 'When performed by uncertified contractors using overly aggressive tools, damage is a risk. However, our NADCA-certified ASCS technicians are trained in the specific handling of flexible duct lines. We adjust the rotation speeds of our brush systems and use specialized soft-bristle poly-whips to safely clean the system without puncturing the inner core.',
      category: 'General'
    },
    {
      id: 'faq-5',
      question: 'Can you clean commercial systems during off-hours to avoid downtime?',
      answer: 'Yes, we coordinate all B2B and commercial cleanings to take place during business off-hours, such as overnight or on weekends. This setup minimizes operational disruption, maintains tenant comfort, and prevents any potential work interference or retail downtime.',
      category: 'Commercial'
    },
    {
      id: 'faq-6',
      question: 'What is your satisfaction guarantee for mold remediation services?',
      answer: 'We provide a comprehensive written satisfaction guarantee with all our mold remediation services. If musty odors or visible biological deposits reappear within 180 days of our structural sanitization and botanical fogging treatment, our certified ASCS crew will re-inspect and re-treat the system at no additional cost.',
      category: 'Mold'
    },
    {
      id: 'faq-7',
      question: 'How do you calculate your pricing estimates upfront?',
      answer: 'We rely on a transparent and honest pricing model based on the total count of return registers, supply vents, and main plenum trunks in your home or building. This straightforward approach provides an accurate cost breakdown upfront, helping clients avoid unexpected dispatch fees or last-minute upsells at their door.',
      category: 'Pricing'
    },
    {
      id: 'faq-8',
      question: 'How do you manage call routing through your 1-800-AIR-DUCT system?',
      answer: 'Our main hotline utilizes IVR routing to respond to inquiries efficiently. Dialing 1-800-247-3828 prompts you to select either residential or commercial service lines. The system then automatically routes your call to our closest local dispatch center based on your regional area code, ensuring you connect with a nearby supervisor.',
      category: 'General'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'General', label: 'General Care' },
    { id: 'NADCA', label: 'NADCA Rules' },
    { id: 'Health', label: 'Health Indicators' },
    { id: 'Mold', label: 'Mold Remediation' },
    { id: 'Pricing', label: 'Pricing Transparency' }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left" id="faq-view">
      
      {/* 1. HEADER DESCRIPTION */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
          <ShieldQuestion size={14} /> KNOWLEDGEBASE & RESPONSIVE ANSWER ENGINE
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
          Frequently Answered <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
            Duct Hygiene Questions
          </span>
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Need quick, clear answers? We maintain open transparency regarding our pricing, equipment capabilities, biological remediation safety records, and local scheduling options.
        </p>
      </div>

      {/* 2. CATEGORY BUTTONS ROW */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`py-2 px-4 rounded-xl text-xs font-bold font-mono transition-all outline-none border cursor-pointer ${
              selectedCategory === cat.id 
                ? 'bg-amber-600 text-white border-amber-650 shadow-md border-amber-600' 
                : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. FAQS LIST */}
      <div className="space-y-4 max-w-4xl font-semibold">
        {filteredFaqs.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div 
              key={item.id}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 shadow-sm ${
                isOpen ? 'border-amber-500 bg-amber-50/5' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? '' : item.id)}
                className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 text-slate-800 hover:text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wide cursor-pointer outline-none select-none"
              >
                <span className="flex-1 leading-snug">{item.question}</span>
                <span className="text-slate-500 flex-shrink-0 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
                  {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed text-left border-t border-slate-100 mt-1 animate-fade-in font-medium">
                  {item.answer}
                  
                  <div className="flex justify-between items-center pt-4 mt-4 border-t border-slate-100 text-[10px] text-slate-400 font-bold">
                    <span className="font-bold uppercase tracking-wider">Category: {item.category}</span>
                    <span className="text-amber-650 font-bold flex items-center gap-1">✓ NADCA Approved Answer</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. EMERGENCY ASK BANNER */}
      <div className="bg-white border border-slate-205 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 max-w-4xl shadow-sm border border-slate-200">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Have a specific question?</h4>
          <p className="text-slate-500 text-xs leading-relaxed font-semibold">
            Reach out to our central routing staff at <strong>1-800-247-3828</strong> for direct, straightforward help.
          </p>
        </div>
        <a 
          href="tel:1-800-247-3828" 
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs uppercase rounded-xl shadow-sm hover:-translate-y-0.5 transition-transform cursor-pointer"
        >
          Dial Central Office <ArrowRight size={14} />
        </a>
      </div>

    </div>
  );
}
