import React from 'react';
import { DimensionResult } from '../../types';
import { Cpu, Microscope, TrendingUp, Users, Palette, Wrench } from 'lucide-react';

interface DimensionBarProps {
  item: DimensionResult;
  animate?: boolean;
}

export const DimensionBar: React.FC<DimensionBarProps> = ({ item, animate = true }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Microscope': return <Microscope className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  const getClassificationBadgeClass = (classification: string) => {
    switch (classification) {
      case 'Very Strong':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Strong':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'Moderate':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'Developing':
        return 'bg-orange-500/15 text-orange-300 border-orange-500/30';
      default:
        return 'bg-slate-500/15 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border/60 hover:border-brand-border transition-all">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
            style={{ backgroundColor: `${item.color}25`, color: item.color, border: `1px solid ${item.color}40` }}
            aria-hidden="true"
          >
            {getIcon(item.iconName)}
          </div>
          <div>
            <h4 className="font-bold text-white text-base leading-tight">
              {item.dimension}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Raw points: {item.rawScore} / {item.maxScore}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-lg font-black text-white">
            {item.score}<span className="text-xs text-slate-400 font-normal">/100</span>
          </span>
          <div className="mt-0.5">
            <span 
              className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getClassificationBadgeClass(item.classification)}`}
            >
              {item.classification}
            </span>
          </div>
        </div>
      </div>

      {/* Visual Score Bar */}
      <div 
        className="w-full h-3 rounded-full bg-slate-800/80 overflow-hidden relative border border-slate-700/50"
        role="progressbar"
        aria-valuenow={item.score}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${item.dimension} score: ${item.score} out of 100, classified as ${item.classification}`}
      >
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: `${item.score}%`,
            backgroundColor: item.color,
            boxShadow: `0 0 12px ${item.color}60`
          }}
        />
      </div>

      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};
