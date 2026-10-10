import React, { useState, useMemo } from 'react';
import { CAREERS_DATA } from '../data/careersData';
import { CareerCard } from '../components/careers/CareerCard';
import { StreamType } from '../types';
import { Search, Filter, Briefcase, Bookmark, Sparkles } from 'lucide-react';
import { useCareerQuiz } from '../context/CareerQuizContext';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const CareersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState<string>('All');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const { bookmarkedCareerIds, results } = useCareerQuiz();

  const filteredCareers = useMemo(() => {
    return CAREERS_DATA.filter(career => {
      // Stream filter
      if (selectedStream !== 'All' && career.stream !== selectedStream) {
        return false;
      }

      // Bookmarked filter
      if (onlyBookmarked && !bookmarkedCareerIds.includes(career.id)) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = career.title.toLowerCase().includes(query);
        const matchesTagline = career.tagline.toLowerCase().includes(query);
        const matchesOverview = career.overview.toLowerCase().includes(query);
        const matchesSubjects = career.schoolSubjects.essential.some(s => s.toLowerCase().includes(query));
        const matchesSkills = career.skills.technical.some(s => s.toLowerCase().includes(query));
        return matchesTitle || matchesTagline || matchesOverview || matchesSubjects || matchesSkills;
      }

      return true;
    });
  }, [searchQuery, selectedStream, onlyBookmarked, bookmarkedCareerIds]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Indian & Global Horizons
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Career Pathways Explorer
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Discover {CAREERS_DATA.length}+ comprehensive career profiles. Investigate day-to-day responsibilities, required Class 11-12 subjects, college degrees, and entry routes in India.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-brand-card/90 border border-brand-border space-y-4 shadow-card-elevated">
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Keyword Search */}
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by career title, skill (e.g. Python, Law, Figma), or subject..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-brand-surface/80 border border-brand-border text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
            />
          </div>

          {/* Bookmarks Toggle */}
          <button
            type="button"
            onClick={() => setOnlyBookmarked(!onlyBookmarked)}
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
              onlyBookmarked
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                : 'bg-brand-surface/80 border-brand-border text-slate-300 hover:text-white'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${onlyBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            <span>Saved ({bookmarkedCareerIds.length})</span>
          </button>

        </div>

        {/* Stream Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-brand-border/40">
          <span className="text-xs text-slate-400 font-semibold mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter Stream:
          </span>
          {['All', 'Science', 'Commerce', 'Humanities', 'Vocational'].map(streamName => (
            <button
              key={streamName}
              type="button"
              onClick={() => setSelectedStream(streamName)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedStream === streamName
                  ? 'bg-brand-primary text-white shadow-glow-primary'
                  : 'bg-brand-surface text-slate-300 border border-brand-border hover:bg-slate-700/60 hover:text-white'
              }`}
            >
              {streamName}
            </button>
          ))}
        </div>
      </div>

      {/* Careers Grid */}
      {filteredCareers.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-brand-card/50 border border-brand-border space-y-4">
          <Briefcase className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-xl font-bold text-white">No Careers Matched Your Search</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Try adjusting your search terms or clearing the stream filter to explore our complete directory.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedStream('All');
              setOnlyBookmarked(false);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map(career => {
            // If user has quiz results, check if this career was matched
            const matchedCareer = results?.careerMatches.find(m => m.career.id === career.id);
            return (
              <CareerCard
                key={career.id}
                career={career}
                similarity={matchedCareer?.similarity}
                rationale={matchedCareer?.rationale}
              />
            );
          })}
        </div>
      )}

      <DisclaimerBanner />

    </div>
  );
};
