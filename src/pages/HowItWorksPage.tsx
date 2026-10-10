import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Microscope, 
  TrendingUp, 
  Users, 
  Palette, 
  Wrench,
  ShieldAlert,
  Compass
} from 'lucide-react';
import { DIMENSIONS } from '../utils/scoring';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Transparent Methodology
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          How Stream to Dream Works
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Built on principles of psychometric evaluation and contextualized for Indian high school students. Learn about our 6 interest dimensions, scoring algorithms, and blended-profile logic.
        </p>
      </div>

      {/* 3-STEP JOURNEY */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-center">
          The 3-Step Guided Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xl border border-cyan-500/30">
              1
            </div>
            <h3 className="text-xl font-bold text-white">Scenario-Based Quiz</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Answer 30 questions rooted in everyday student choices—weekend projects, lab experiments, debate topics, and natural curiosities. We intentionally avoid asking "Which stream do you want?" to prevent preconceived bias.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xl border border-indigo-500/30">
              2
            </div>
            <h3 className="text-xl font-bold text-white">Mathematical Profiling</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Your choices contribute points across 6 dimensions. Scores are normalized to 0–100 and classified from "Less Prominent" to "Very Strong." Our transparent formulas synthesize your affinity for Science, Commerce, Humanities, and Vocational arts.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xl border border-rose-500/30">
              3
            </div>
            <h3 className="text-xl font-bold text-white">Objective Exploration</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Receive 6–8 matched careers with "Interest-profile similarity" percentages. If two streams are within 5 points, we highlight your Blended Profile. Compare careers side by side and generate an actionable roadmap for family discussion.
            </p>
          </div>

        </div>
      </section>

      {/* THE SIX INTEREST DIMENSIONS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Cognitive Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            The Six Interest Dimensions
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Adapted from vocational psychology research to match Indian school environments and modern career trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIMENSIONS.map(dim => (
            <div 
              key={dim.key}
              className="p-6 rounded-3xl bg-brand-card/80 border border-brand-border space-y-3"
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white mb-2"
                style={{ backgroundColor: `${dim.color}25`, color: dim.color, border: `1px solid ${dim.color}40` }}
              >
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {dim.label}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {dim.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BLENDED PROFILE EXPLANATION */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-card via-brand-surface to-brand-card border border-brand-border space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
            Multidisciplinary Synergy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            What is a “Blended Profile”?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            In the past, Indian students were pressured to label themselves strictly as "a Science student", "a Commerce student", or "an Arts student." However, real innovation happens at the intersections.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border/70 space-y-1">
              <strong className="text-cyan-300 block text-sm">Science + Creative (Design)</strong>
              <p className="text-slate-300">
                Thrives in Architecture, UI/UX Product Design, Computer Graphics, and Biomedical Innovation.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border/70 space-y-1">
              <strong className="text-amber-300 block text-sm">Commerce + Humanities (Law)</strong>
              <p className="text-slate-300">
                Thrives in Corporate Law (M&A), Public Policy Economics, and Financial Investigative Journalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          to="/quiz"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-brand-primary to-brand-secondary shadow-glow-primary hover:shadow-glow-cyan transition-all"
        >
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span>Experience the Evaluation Quiz</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <DisclaimerBanner />

    </div>
  );
};
