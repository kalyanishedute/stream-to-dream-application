import React from 'react';
import { Sparkles } from 'lucide-react';

interface ProgressBarProps {
  currentIndex: number;
  total: number;
  categoryHint?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentIndex, total, categoryHint }) => {
  const currentNumber = currentIndex + 1;
  const percentage = Math.round((currentNumber / total) * 100);

  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-brand-primary/20 text-indigo-300 border border-brand-primary/30">
            Question {currentNumber} of {total}
          </span>
          {categoryHint && (
            <span className="hidden sm:inline-block text-slate-400 text-xs font-normal">
              • {categoryHint}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{percentage}% Completed</span>
        </div>
      </div>

      {/* Progress Track */}
      <div 
        className="w-full h-3 rounded-full bg-slate-800/80 border border-slate-700/60 overflow-hidden relative"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Quiz progress: ${currentNumber} of ${total} questions`}
      >
        <div 
          className="h-full bg-gradient-to-r from-brand-primary via-indigo-500 to-cyan-400 rounded-full transition-all duration-300 ease-out shadow-glow-primary"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
