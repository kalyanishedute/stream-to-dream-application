import React from 'react';
import { Link } from 'react-router-dom';
import { StreamResult } from '../../types';
import { ArrowRight, BookOpen, Briefcase } from 'lucide-react';

interface StreamCardProps {
  streamResult: StreamResult;
  isTopRanked?: boolean;
  isBlended?: boolean;
}

export const StreamCard: React.FC<StreamCardProps> = ({ streamResult, isTopRanked = false, isBlended = false }) => {
  const getStreamPath = (stream: string) => {
    switch (stream) {
      case 'Science': return '/streams/science';
      case 'Commerce': return '/streams/commerce';
      case 'Humanities': return '/streams/humanities';
      case 'Vocational': return '/streams/vocational';
      default: return '/streams';
    }
  };

  return (
    <div 
      className={`rounded-2xl p-5 md:p-6 transition-all duration-300 relative flex flex-col justify-between ${
        isTopRanked
          ? 'bg-gradient-to-b from-brand-card to-brand-surface/90 border-2 shadow-card-elevated'
          : 'bg-brand-card/70 border border-brand-border/70 hover:border-brand-border hover:bg-brand-card'
      }`}
      style={{
        borderColor: isTopRanked ? streamResult.color : undefined
      }}
    >
      {/* Top Banner tags */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span 
          className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
          style={{ 
            backgroundColor: `${streamResult.color}20`, 
            color: streamResult.color, 
            border: `1px solid ${streamResult.color}40` 
          }}
        >
          {streamResult.stream} Stream
        </span>

        {isBlended && isTopRanked ? (
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
            Blended Strong Match
          </span>
        ) : isTopRanked ? (
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Strongest Alignment
          </span>
        ) : null}
      </div>

      {/* Title & Score */}
      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl font-extrabold text-white">
            {streamResult.displayName}
          </h3>
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-black text-white" style={{ color: streamResult.color }}>
              {streamResult.score}%
            </span>
            <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Affinity</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-800/80 overflow-hidden mt-2 border border-slate-700/50">
          <div 
            className="h-full rounded-full transition-all duration-1000"
            style={{ 
              width: `${streamResult.score}%`, 
              backgroundColor: streamResult.color,
              boxShadow: `0 0 10px ${streamResult.color}50` 
            }}
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
        {streamResult.description}
      </p>

      {/* Key Subjects */}
      <div className="mb-4 pt-3 border-t border-brand-border/40">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>Core Class 11-12 Subjects:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {streamResult.topSubjects.map(subj => (
            <span 
              key={subj}
              className="text-[11px] px-2 py-0.5 rounded-md bg-brand-surface/80 border border-brand-border/50 text-slate-300"
            >
              {subj}
            </span>
          ))}
        </div>
      </div>

      {/* Sample Careers */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
          <Briefcase className="w-3.5 h-3.5 text-amber-400" />
          <span>Associated Career Paths:</span>
        </div>
        <p className="text-xs text-slate-400">
          {streamResult.sampleCareers.join(' • ')}
        </p>
      </div>

      {/* Link to detail */}
      <Link
        to={getStreamPath(streamResult.stream)}
        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all border border-brand-border hover:border-slate-400 text-white bg-brand-surface hover:bg-slate-700/50"
      >
        <span>Explore {streamResult.stream} Stream Guide</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
