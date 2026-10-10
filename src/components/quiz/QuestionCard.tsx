import React, { useEffect } from 'react';
import { QuizQuestion } from '../../types';
import { ArrowLeft, ArrowRight, CheckCircle2, Save } from 'lucide-react';

interface QuestionCardProps {
  question: QuizQuestion;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  isLastQuestion: boolean;
  onSubmit: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptionId,
  onSelectOption,
  onPrev,
  onNext,
  canPrev,
  canNext,
  isLastQuestion,
  onSubmit
}) => {

  // Keyboard shortcut listener (keys 1-4 for options, arrows for navigation)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (['1', '2', '3', '4'].includes(e.key)) {
        const index = parseInt(e.key, 10) - 1;
        if (question.options[index]) {
          onSelectOption(question.options[index].id);
        }
      } else if (e.key === 'ArrowRight' && canNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && canPrev) {
        onPrev();
      } else if (e.key === 'Enter') {
        if (isLastQuestion && selectedOptionId) {
          onSubmit();
        } else if (selectedOptionId && canNext) {
          onNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [question, canNext, canPrev, isLastQuestion, selectedOptionId, onSelectOption, onNext, onPrev, onSubmit]);

  return (
    <div className="w-full rounded-3xl bg-brand-card/90 border border-brand-border/80 p-6 sm:p-8 md:p-10 shadow-card-elevated backdrop-blur-xl transition-all">
      
      {/* Scenario Header */}
      <div className="mb-8">
        <span className="text-xs uppercase tracking-wider font-bold text-cyan-400 block mb-2">
          Scenario #{question.id}
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
          {question.scenario}
        </h2>
        {question.subtitle && (
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            {question.subtitle}
          </p>
        )}
      </div>

      {/* Answer Options */}
      <fieldset className="space-y-3.5 mb-8">
        <legend className="sr-only">Select your preferred response</legend>
        
        {question.options.map((option, idx) => {
          const isSelected = selectedOptionId === option.id;
          const letterLabel = ['A', 'B', 'C', 'D'][idx];

          return (
            <label
              key={option.id}
              onClick={() => onSelectOption(option.id)}
              className={`w-full flex items-start gap-4 p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-left ${
                isSelected
                  ? 'bg-gradient-to-r from-brand-primary/20 via-indigo-950/40 to-cyan-950/20 border-cyan-400 shadow-glow-cyan/20 ring-1 ring-cyan-400'
                  : 'bg-brand-surface/50 border-brand-border/70 hover:border-slate-400 hover:bg-brand-surface/80'
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.id}
                checked={isSelected}
                onChange={() => onSelectOption(option.id)}
                className="sr-only"
                aria-labelledby={`option-text-${option.id}`}
              />

              {/* Letter badge */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition-colors ${
                  isSelected
                    ? 'bg-cyan-400 text-brand-dark shadow-sm'
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}
              >
                {isSelected ? <CheckCircle2 className="w-5 h-5 text-brand-dark" /> : letterLabel}
              </div>

              {/* Text */}
              <div className="flex-1">
                <span id={`option-text-${option.id}`} className={`text-sm sm:text-base leading-relaxed block ${isSelected ? 'text-white font-semibold' : 'text-slate-200'}`}>
                  {option.text}
                </span>
              </div>

              {/* Keyboard indicator for desktop */}
              <span className="hidden md:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                Key {idx + 1}
              </span>
            </label>
          );
        })}
      </fieldset>

      {/* Navigation and Auto-save footer */}
      <div className="pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Auto-save indicator */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Save className="w-3.5 h-3.5 text-emerald-400" />
          <span>Auto-saved to localStorage</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onPrev}
            disabled={!canPrev}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
              canPrev
                ? 'border-brand-border bg-brand-surface text-slate-200 hover:text-white hover:bg-slate-700/60 active:scale-95'
                : 'border-slate-800 bg-slate-900/50 text-slate-600 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {isLastQuestion ? (
            <button
              type="button"
              onClick={onSubmit}
              disabled={!selectedOptionId}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white transition-all shadow-glow-primary ${
                selectedOptionId
                  ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-95 active:scale-95'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>Calculate My Results</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onNext}
              disabled={!selectedOptionId}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all ${
                selectedOptionId
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary hover:shadow-glow-cyan active:scale-95'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>Next Question</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
