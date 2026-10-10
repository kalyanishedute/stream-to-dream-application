import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCareerQuiz } from '../context/CareerQuizContext';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { ProgressBar } from '../components/quiz/ProgressBar';
import { QuestionCard } from '../components/quiz/QuestionCard';
import { RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    answers,
    currentQuestionIndex,
    totalQuestions,
    setAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitQuiz,
    retakeQuiz
  } = useCareerQuiz();

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const selectedOptionId = answers[currentQuestion.id];
  const answeredCount = Object.keys(answers).length;

  const handleSubmit = () => {
    // Launch celebratory confetti burst
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    submitQuiz();
    navigate('/results');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Top Header with Quick Jump & Reset */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Self-Discovery Assessment
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Stream & Interest Dimension Quiz
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Choose what energizes you naturally. There are no right or wrong answers.
          </p>
        </div>

        {answeredCount > 0 && (
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Are you sure you want to reset your quiz answers and start over?')) {
                retakeQuiz();
              }
            }}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-300 bg-rose-950/30 border border-rose-500/20 hover:bg-rose-900/40 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart Quiz</span>
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <ProgressBar
        currentIndex={currentQuestionIndex}
        total={totalQuestions}
        categoryHint={currentQuestion.categoryHint}
      />

      {/* Main Question Card */}
      <QuestionCard
        question={currentQuestion}
        selectedOptionId={selectedOptionId}
        onSelectOption={(optId) => setAnswer(currentQuestion.id, optId)}
        onPrev={prevQuestion}
        onNext={nextQuestion}
        canPrev={currentQuestionIndex > 0}
        canNext={currentQuestionIndex < totalQuestions - 1 && Boolean(selectedOptionId)}
        isLastQuestion={currentQuestionIndex === totalQuestions - 1}
        onSubmit={handleSubmit}
      />

      {/* Question Quick-Selector Dots for accessibility and easy jumping */}
      <div className="mt-8 p-4 rounded-2xl bg-brand-surface/50 border border-brand-border/60">
        <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
          <span>Question Navigation Overview:</span>
          <span>{answeredCount} of {totalQuestions} answered</span>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const isAnswered = Boolean(answers[q.id]);
            const isCurrent = idx === currentQuestionIndex;

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => goToQuestion(idx)}
                aria-label={`Jump to question ${idx + 1} ${isAnswered ? '(Answered)' : '(Unanswered)'}`}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-bold transition-all ${
                  isCurrent
                    ? 'ring-2 ring-cyan-400 bg-cyan-400 text-brand-dark'
                    : isAnswered
                    ? 'bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 hover:bg-indigo-500'
                    : 'bg-slate-800 text-slate-400 border border-slate-700/60 hover:bg-slate-700'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Helpful shortcut tips */}
      <div className="mt-6 text-center text-xs text-slate-400 hidden sm:block">
        Tip: You can use your keyboard numbers <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[10px]">1</kbd>-<kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[10px]">4</kbd> to select options, and <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[10px]">&rarr;</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[10px]">&larr;</kbd> to navigate.
      </div>

    </div>
  );
};
