import { useState } from 'react';
import { blogPosts } from '../data/blog';
import { BlogPost } from '../types';
import { Search, Calendar, User, Clock, ArrowLeft, BookOpen, Facebook, Twitter, Link } from 'lucide-react';

interface BlogProps {
  onNavigate: (path: string) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Industry Standards', 'Health & Air Quality', 'Property Restoration'];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const activeArticle = blogPosts.find(p => p.slug === selectedArticleSlug);

  const handleLinkClick = (path: string) => {
    // Check if it's an internal link
    if (path.startsWith('/')) {
      onNavigate(path);
      setSelectedArticleSlug(null);
      // scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left animate-fade-in" id="blog-view">
      
      {activeArticle ? (
        // ARTICLE DETAIL VIEW
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in" id="active-article">
          
          <button 
            onClick={() => setSelectedArticleSlug(null)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors uppercase cursor-pointer mb-2 font-semibold"
          >
            <ArrowLeft size={14} /> Back to Article List
          </button>

          {/* Article Header Metadata */}
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold uppercase tracking-wider rounded-lg">
              {activeArticle.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              {activeArticle.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-y border-slate-150 py-3 font-semibold">
              <span className="flex items-center gap-1"><Calendar size={13} /> {activeArticle.date}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1"><User size={13} /> {activeArticle.author}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {activeArticle.readTime}</span>
            </div>
          </div>

          {/* Article Body Content with dynamic rendering of markdown links */}
          <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-6 max-w-full font-semibold">
            {activeArticle.content.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.trim().startsWith('###')) {
                return (
                  <h3 key={pIdx} className="text-lg font-bold text-slate-900 uppercase tracking-wider pt-4 border-b border-slate-200 pb-1">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.trim().startsWith('*')) {
                return (
                  <ul key={pIdx} className="list-disc pl-5 space-y-2 mt-2">
                    {paragraph.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx} className="text-slate-600">
                        {item.replace('*', '').trim()}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.trim().startsWith('1.')) {
                return (
                  <ol key={pIdx} className="list-decimal pl-5 space-y-2 mt-2">
                    {paragraph.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx} className="text-slate-600 font-medium">
                        {item.replace(/^\d+\.\s*/, '').trim()}
                      </li>
                    ))}
                  </ol>
                );
              }

              // Parse customized markdown links: [Label](/path)
              const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
              let parts = [];
              let lastIndex = 0;
              let match;

              while ((match = linkRegex.exec(paragraph)) !== null) {
                // Add preceding text
                if (match.index > lastIndex) {
                  parts.push(paragraph.substring(lastIndex, match.index));
                }
                // Add parsed link button
                const label = match[1];
                const dest = match[2];
                parts.push(
                  <button
                    key={match.index}
                    onClick={() => handleLinkClick(dest)}
                    className="text-amber-600 hover:text-amber-700 hover:underline font-extrabold cursor-pointer inline-block"
                  >
                    {label}
                  </button>
                );
                lastIndex = linkRegex.lastIndex;
              }

              if (lastIndex < paragraph.length) {
                parts.push(paragraph.substring(lastIndex));
              }

              return (
                <p key={pIdx} className="text-slate-650 leading-relaxed text-xs sm:text-sm font-semibold">
                  {parts.length > 0 ? parts : paragraph}
                </p>
              );
            })}
          </div>

          {/* Social and Share Widgets */}
          <div className="border-t border-slate-200 pt-6 flex justify-between items-center text-xs text-slate-505 text-slate-500 font-bold uppercase">
            <span>Tags: {activeArticle.tags.join(', ')}</span>
            <div className="flex gap-3">
              <button onClick={() => alert("Copied page title citation!")} className="p-2 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 text-slate-500 hover:text-amber-600 cursor-pointer" title="Copy reference">
                <Link size={12} className="stroke-[2.5px]" />
              </button>
            </div>
          </div>

        </div>
      ) : (
        // COMPREHENSIVE ARTICLE DIRECTORY LIST VIEW
        <div className="space-y-12 animate-fade-in" id="article-directory">
          
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
              <BookOpen size={14} /> SCIENCE & HYGIENE ADVISORY PORTAL
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
              The Air Duct Cleaning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Educational Registry
              </span>
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed text-slate-500 font-semibold">
              We compile and synthesize findings from the EPA, NADCA, and environmental biologists. Read our detailed, keywords-dense research guides to protect your home.
            </p>
          </div>

          {/* Search and Category Filters */}
          <div className="bg-white border border-slate-205 p-6 rounded-3xl space-y-4 max-w-4xl shadow-sm border border-slate-200">
            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 py-2.5 pl-11 pr-4 rounded-xl text-xs text-slate-805 uppercase font-bold focus:outline-none focus:border-amber-600"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-1.5 px-3 rounded-lg text-[10px] font-bold font-mono transition-all outline-none border cursor-pointer uppercase ${
                    activeCategory === cat 
                      ? 'bg-amber-600 text-white border-amber-650 shadow-sm border-amber-600' 
                      : 'bg-slate-50 text-slate-500 border-slate-205 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Directory listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl animate-fade-in font-semibold">
            {filteredPosts.map((post) => (
              <div 
                key={post.slug}
                className="bg-white border border-slate-200 hover:border-amber-300 rounded-2xl overflow-hidden p-6 text-left flex flex-col justify-between space-y-4 group transition-all shadow-sm"
              >
                <div className="space-y-2">
                  <span className="inline-block text-[10px] uppercase font-extrabold text-amber-600 font-mono">
                    {post.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug uppercase">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 flex items-center justify-between mt-auto">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{post.readTime}</span>
                  <button 
                    onClick={() => {
                      setSelectedArticleSlug(post.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-amber-600 group-hover:text-amber-750 font-bold text-xs uppercase inline-flex items-center gap-1 cursor-pointer"
                  >
                    Read Article &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
