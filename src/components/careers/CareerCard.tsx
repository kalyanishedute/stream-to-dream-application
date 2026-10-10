import React from 'react';
import { Link } from 'react-router-dom';
import { Career, InterestDimension } from '../../types';
import { 
  Bookmark, 
  BookmarkCheck, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Compass,
  GitCompare,
  TrendingUp
} from 'lucide-react';
import { useCareerQuiz } from '../../context/CareerQuizContext';

interface CareerCardProps {
  career: Career;
  similarity?: number;
  rationale?: string;
  primaryMatchDimensions?: InterestDimension[];
}

export const CareerCard: React.FC<CareerCardProps> = ({
  career,
  similarity,
  rationale,
  primaryMatchDimensions
}) => {
  const { bookmarkedCareerIds, toggleBookmark } = useCareerQuiz();
  const isBookmarked = bookmarkedCareerIds.includes(career.id);

  const getStreamColor = (stream: string) => {
    switch (stream) {
      case 'Science': return '#06B6D4'; // Cyan
      case 'Commerce': return '#F59E0B'; // Amber
      case 'Humanities': return '#10B981'; // Emerald
      case 'Vocational': return '#EC4899'; // Pink
      default: return '#8B5CF6';
    }
  };

  const streamColor = getStreamColor(career.stream);

  return (
    <div className="group rounded-2xl bg-brand-card/85 border border-brand-border/70 hover:border-cyan-500/50 p-5 md:p-6 transition-all duration-300 hover:shadow-card-elevated flex flex-col justify-between relative">
      
      {/* Top Header Row */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span 
              className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              style={{
                backgroundColor: `${streamColor}20`,
                color: streamColor,
                border: `1px solid ${streamColor}40`
              }}
            >
              {career.stream}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {career.subStream}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={() => toggleBookmark(career.id)}
            className={`p-2 rounded-lg border transition-all ${
              isBookmarked 
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' 
                : 'bg-brand-surface/60 border-brand-border/60 text-slate-400 hover:text-white hover:bg-brand-surface'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark this career'}
            aria-label={isBookmarked ? `Unbookmark ${career.title}` : `Bookmark ${career.title}`}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-400" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>

        {/* Similarity Badge if part of quiz results */}
        {similarity !== undefined && (
          <div className="mb-3 p-2.5 rounded-xl bg-gradient-to-r from-indigo-950/60 to-cyan-950/60 border border-cyan-500/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Interest-Profile Similarity
              </span>
              <span className="text-sm font-extrabold text-cyan-200">
                {similarity}%
              </span>
            </div>
            {rationale && (
              <p className="mt-1 text-xs text-slate-300 leading-snug">
                {rationale}
              </p>
            )}
          </div>
        )}

        {/* Career Title & Tagline */}
        <Link to={`/careers/${career.id}`} className="group-hover:text-cyan-300 transition-colors">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-1">
            {career.title}
          </h3>
        </Link>
        <p className="text-xs font-medium text-slate-300 italic mb-3">
          "{career.tagline}"
        </p>

        {/* Overview snippet */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {career.overview}
        </p>

        {/* School Subjects */}
        <div className="mb-4">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-300 mb-1.5">
            <BookOpen className="w-3 h-3 text-cyan-400" />
            <span>Key Class 11-12 Subjects:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {career.schoolSubjects.essential.slice(0, 3).map(subj => (
              <span 
                key={subj}
                className="text-[10px] px-2 py-0.5 rounded bg-brand-surface border border-brand-border/60 text-slate-300"
              >
                {subj}
              </span>
            ))}
          </div>
        </div>

        {/* Salary Outlook */}
        <div className="mb-5 flex items-center gap-1.5 text-xs text-slate-400">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">{career.salaryOutlookIndia}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-brand-border/50 flex items-center gap-2">
        <Link
          to={`/careers/${career.id}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-brand-primary hover:bg-indigo-600 transition-colors shadow-sm"
        >
          <span>View Pathway</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        
        <Link
          to={`/compare?career1=${career.id}`}
          className="inline-flex items-center justify-center p-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-brand-surface border border-brand-border/60 hover:bg-slate-700/60 transition-colors"
          title="Compare this career"
          aria-label={`Compare ${career.title}`}
        >
          <GitCompare className="w-4 h-4 text-cyan-400" />
        </Link>
      </div>

    </div>
  );
};
