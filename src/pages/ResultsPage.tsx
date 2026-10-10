import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCareerQuiz } from '../context/CareerQuizContext';
import { DimensionBar } from '../components/charts/DimensionBar';
import { StreamCard } from '../components/charts/StreamCard';
import { CareerCard } from '../components/careers/CareerCard';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { 
  Sparkles, 
  RotateCcw, 
  Printer, 
  Map, 
  GitCompare, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  HeartHandshake,
  Compass,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ResultsPage: React.FC = () => {
  const { results, retakeQuiz } = useCareerQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top upon viewing results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!results) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center mx-auto text-amber-400">
          <Compass className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          No Quiz Results Found Yet
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          You haven't completed the 30-question self-discovery assessment yet. Answer the questions to discover your personalized interest profile, stream affinity, and matched careers.
        </p>
        <div>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-primary to-brand-secondary shadow-glow-primary hover:shadow-glow-cyan transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Take the Career Quiz Now</span>
          </Link>
        </div>
      </div>
    );
  }

  const { dimensionResults, streamResults, isBlendedProfile, blendedStreams, careerMatches } = results;

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* HEADER BANNER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Evaluation Complete • Normalized 6-Dimension Profile</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Your Personalized Stream & Career Exploration Report
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Based on your natural problem-solving choices and preferred weekend/project activities.
        </p>

        {/* Action toolbar for Print / Retake */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 no-print">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-brand-surface border border-brand-border hover:text-white hover:bg-slate-700/60 transition-colors"
          >
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>Print / Save PDF</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (window.confirm('Do you want to clear this result and retake the quiz?')) {
                retakeQuiz();
                navigate('/quiz');
              }
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-rose-300 bg-rose-950/20 border border-rose-500/20 hover:bg-rose-900/30 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-rose-400" />
            <span>Retake Quiz</span>
          </button>
        </div>
      </div>

      {/* BLENDED PROFILE ALERT IF APPLICABLE */}
      {isBlendedProfile && (
        <div className="rounded-3xl bg-gradient-to-r from-violet-950/60 via-brand-card to-cyan-950/60 border border-violet-500/40 p-6 sm:p-8 relative overflow-hidden shadow-card-elevated">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/20 text-violet-300 flex items-center justify-center shrink-0 border border-violet-500/30">
              <Layers className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 uppercase tracking-wider">
                Multi-Disciplinary Strength
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                “You have a blended profile.”
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                Your affinity scores for <strong className="text-white">{blendedStreams.join(' & ')}</strong> are within 5 points of each other. This is an exciting asset in today’s economy! You don’t need to force yourself into a narrow traditional silo. Consider interdisciplinary subjects and careers such as Architecture (Science + Design), Corporate Law (Humanities + Commerce), or UI/UX Product Design (Tech + Creative Arts).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 1. YOUR INTEREST PROFILE (6 BARS) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-brand-border/60 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Cognitive Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Your Interest Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Visual scores across the six fundamental interest dimensions (normalized 0–100 scale).
            </p>
          </div>
          <span className="text-xs text-slate-400">
            Formula: rawScore / maxPossibleScore × 100
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dimensionResults.map(item => (
            <DimensionBar key={item.dimension} item={item} />
          ))}
        </div>
      </section>

      {/* 2. YOUR STREAM PROFILE (4 FORMULAS) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-brand-border/60 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Stream Synthesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Your Stream Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Weighted stream affinities calculated directly from your dimensional scores. No stream is considered superior.
            </p>
          </div>
          <span className="text-xs text-slate-400">
            Calculated via exact weighted multi-dimension formulas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {streamResults.map((streamItem, idx) => (
            <StreamCard
              key={streamItem.stream}
              streamResult={streamItem}
              isTopRanked={idx === 0 || (isBlendedProfile && idx === 1)}
              isBlended={isBlendedProfile}
            />
          ))}
        </div>
      </section>

      {/* 3. CAREERS TO EXPLORE (6-8 MATCHES) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-brand-border/60 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
              Data-Driven Matching
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Careers to Explore
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Ranked strictly by <strong className="text-cyan-300">Interest-profile similarity</strong>, explaining why each appears based on your strongest dimensions.
            </p>
          </div>
          <span className="text-xs text-amber-300 font-medium">
            Not a "success probability" or destiny guarantee
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerMatches.map(match => (
            <CareerCard
              key={match.career.id}
              career={match.career}
              similarity={match.similarity}
              rationale={match.rationale}
              primaryMatchDimensions={match.primaryMatchDimensions}
            />
          ))}
        </div>
      </section>

      {/* 4. YOUR NEXT 3 STEPS */}
      <section className="rounded-3xl bg-brand-surface/60 border border-brand-border/80 p-8 sm:p-10 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Recommended Action Plan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Your Next 3 Steps
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            Transform this report into concrete, actionable decisions for Class 11 and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-brand-card/90 border border-brand-border flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg border border-cyan-500/30">
                1
              </div>
              <h3 className="text-lg font-bold text-white">Deep Dive & Explore</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click into 2 or 3 of your top-matched careers above. Read the day-in-the-life walkthroughs, essential school subjects, and entrance exam requirements.
              </p>
            </div>
            <Link
              to="/careers"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-2"
            >
              <span>Browse All Careers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-brand-card/90 border border-brand-border flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-500/30">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Compare Side-by-Side</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Use our interactive Career Comparison tool to weigh up to 3 paths across subjects, work environment, training duration, and entrance routes.
              </p>
            </div>
            <Link
              to="/compare"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 pt-2"
            >
              <span>Open Comparison Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-brand-card/90 border border-brand-border flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-lg border border-rose-500/30">
                3
              </div>
              <h3 className="text-lg font-bold text-white">Discuss with Trusted Adults</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Print or share this report with your parents, favorite teachers, or school career counselor. Use our Parent Conversation Guide for a calm, constructive dialogue.
              </p>
            </div>
            <Link
              to="/resources"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 hover:text-rose-300 pt-2"
            >
              <span>Download Parent Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. ACTION BUTTONS & NAVIGATION */}
      <section className="pt-4 flex flex-wrap items-center justify-center gap-4 no-print">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-brand-surface border border-brand-border hover:bg-slate-700 hover:text-white transition-all shadow-sm"
        >
          <Briefcase className="w-4 h-4 text-cyan-400" />
          <span>Explore Careers</span>
        </Link>

        <Link
          to="/compare"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-brand-surface border border-brand-border hover:bg-slate-700 hover:text-white transition-all shadow-sm"
        >
          <GitCompare className="w-4 h-4 text-amber-400" />
          <span>Compare Careers</span>
        </Link>

        <Link
          to="/roadmap"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-extrabold text-white bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-secondary shadow-glow-primary hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <Map className="w-4 h-4 text-cyan-300" />
          <span>Build My Roadmap</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* MANDATORY PROMINENT DISCLAIMER */}
      <DisclaimerBanner className="mt-8" />

    </div>
  );
};
