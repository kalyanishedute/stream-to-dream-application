import React from 'react';
import { Compass, Sparkles, Heart, Shield, Award, Users, BookOpen } from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white mx-auto shadow-glow-primary">
          <Compass className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Our Mission & Vision
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          About Stream to Dream
        </h1>
        <p className="text-base sm:text-lg text-slate-300 italic">
          “Discover your stream. Understand your strengths. Build your dream.”
        </p>
      </div>

      {/* Main Narrative */}
      <div className="rounded-3xl bg-brand-card/90 border border-brand-border/80 p-8 sm:p-10 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Why We Built Stream to Dream
        </h2>
        <p>
          Every academic year in India, over <strong>20 million students</strong> transition from Class 10 to Class 11. For decades, this pivotal milestone has been clouded by an unhealthy cultural hierarchy: pushing high-scorers blindly into Science engineering or medical coaching, relegating Commerce to business backgrounds, and dismissing Humanities as a backup.
        </p>
        <p>
          The consequence is heartbreaking: millions of young Indians suffer academic burnout, lose confidence, or realize years later in college that their genuine talents lay in design, economics, law, psychology, or creative media.
        </p>
        <p>
          <strong>Stream to Dream was founded to change this forever.</strong> We believe that every student has a unique cognitive fingerprint. By replacing high-pressure coaching sales with transparent psychometric modeling and concrete educational roadmaps, we empower Indian teenagers to make informed, dignified choices.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-brand-surface/70 border border-brand-border space-y-3">
          <Shield className="w-6 h-6 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Stream Parity</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            No stream is superior to another. Science, Commerce, Humanities, and Vocational Arts receive equal dignity and rigor.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-brand-surface/70 border border-brand-border space-y-3">
          <Award className="w-6 h-6 text-amber-400" />
          <h3 className="text-lg font-bold text-white">Zero Commercial Bias</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            We do not sell expensive coaching packages or push specific private universities. Our guidance is 100% objective.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-brand-surface/70 border border-brand-border space-y-3">
          <Users className="w-6 h-6 text-rose-400" />
          <h3 className="text-lg font-bold text-white">Family Harmony</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            We provide practical conversation guides to help parents and students replace confrontation with constructive alignment.
          </p>
        </div>
      </div>

      <DisclaimerBanner />

    </div>
  );
};
