import React, { useState } from 'react';
import { RESOURCES_DATA, ResourceItem } from '../data/resourcesData';
import { BookOpen, Users, HeartHandshake, CheckCircle2, FileText, Download, ArrowRight } from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<ResourceItem | null>(RESOURCES_DATA[0]);

  const categories = ['All', 'Parents', 'Counselors', 'Students', 'Policy'];

  const filteredResources = RESOURCES_DATA.filter(res => {
    if (selectedCategory !== 'All' && res.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Guides, Checklists & Worksheets
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Guidance & Counseling Resources
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Practical conversation tools, myth-busters, and intake worksheets designed to foster alignment between students, parents, and school guidance counselors.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-brand-primary text-white shadow-glow-primary'
                : 'bg-brand-surface text-slate-300 border border-brand-border hover:bg-slate-700/60 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredResources.map(res => (
          <div
            key={res.id}
            className="rounded-3xl bg-brand-card/90 border border-brand-border/80 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-card-elevated transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {res.category}
                </span>
                <span className="text-xs text-slate-400">
                  {res.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {res.title}
              </h2>
              <p className="text-xs font-medium text-slate-300 italic">
                {res.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {res.description}
              </p>

              {/* Key points */}
              <div className="space-y-2 pt-2 border-t border-brand-border/50">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Core Insights:
                </span>
                <ul className="space-y-2 text-xs text-slate-200">
                  {res.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Steps if available */}
              {res.actionSteps && (
                <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border/60 text-xs space-y-2">
                  <span className="font-bold text-cyan-300 block uppercase tracking-wider">
                    Recommended Action Steps:
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    {res.actionSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action button */}
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all border border-brand-border text-white bg-brand-surface hover:bg-slate-700/60"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Print / Download Guide</span>
            </button>
          </div>
        ))}
      </div>

      <DisclaimerBanner />

    </div>
  );
};
