import React, { useState } from 'react';
import { FAQ_DATA, FAQItem } from '../data/faqData';
import { Search, ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedIds, setExpandedIds] = useState<string[]>(['stream-hierarchy', 'pcb-without-neet']);

  const categories = ['All', 'Streams', 'Exams', 'Class 10 to 11', 'Parent Doubts', 'NEP 2020'];

  const toggleAccordion = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_DATA.filter(faq => {
    if (selectedCategory !== 'All' && faq.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Got Questions? We’ve Got Answers
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Clear, straightforward answers addressing common Indian high school doubts—stream changes, mathematics requirements, PCB alternatives, and parent alignment.
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. PCB, Math, Law, Parents, Blended Profile)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-brand-surface/80 border border-brand-border text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-primary text-white shadow-glow-primary'
                  : 'bg-brand-surface text-slate-300 border border-brand-border hover:bg-slate-700/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions */}
      <div className="space-y-4">
        {filteredFaqs.map(faq => {
          const isOpen = expandedIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-brand-card/90 border border-brand-border/80 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-brand-surface/40 transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                    {faq.category}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white block leading-snug">
                    {faq.question}
                  </span>
                </div>
                <div className="p-1 rounded-lg text-slate-400 shrink-0 mt-1">
                  {isOpen ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-brand-border/40 pt-4 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <DisclaimerBanner />

    </div>
  );
};
