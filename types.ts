export interface CityData {
  slug: string;
  name: string;
  phone: string;
  epaStat: string;
  healthTrigger: string;
  serviceRadius: string;
  neighborhoods: string[];
  pollenLevel: string;
  wildfireRisk: 'Low' | 'Moderate' | 'High' | 'Extreme';
  averageHumidity: string;
}

export interface StateData {
  slug: string;
  name: string;
  cities: CityData[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'NADCA' | 'Health' | 'Commercial' | 'Mold' | 'Pricing' | 'General';
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullBody: string[];
  ctaText: string;
  highlights: string[];
}
