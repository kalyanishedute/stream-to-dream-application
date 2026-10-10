import React from 'react';
import { Link } from 'react-router-dom';
import { STREAMS_DATA } from '../data/streamsData';
import { ArrowRight, BookOpen, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const ExploreStreamsPage: React.FC = () => {
  const streams = Object.values(STREAMS_DATA);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Academic Foundations • Classes 11 & 12
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Explore All Four Academic Streams
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          In 21st-century India, every academic stream offers extraordinary, prestigious, and financially rewarding careers. We present each stream with complete parity, dismantling legacy biases.
        </p>
      </div>

      {/* Grid of 4 Streams */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {streams.map(stream => (
          <div
            key={stream.id}
            className="rounded-3xl bg-brand-card/85 border border-brand-border/80 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-card-elevated transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span 
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${stream.color}20`,
                    color: stream.color,
                    border: `1px solid ${stream.color}40`
                  }}
                >
                  {stream.title}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {stream.badge}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white tracking-tight">
                {stream.title}
              </h2>
              <p className="text-xs font-semibold text-slate-300 italic">
                "{stream.tagline}"
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {stream.overview}
              </p>

              {/* Sub tracks */}
              <div className="space-y-2 pt-2 border-t border-brand-border/50">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Popular Sub-Tracks & Focus Areas:
                </h4>
                <div className="space-y-2">
                  {stream.subTracks.map(sub => (
                    <div key={sub.name} className="p-3 rounded-xl bg-brand-surface/60 border border-brand-border/50 text-xs">
                      <strong className="text-cyan-300 block mb-0.5">{sub.name}</strong>
                      <span className="text-slate-300">{sub.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who may enjoy */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Who May Enjoy Exploring This?
                </h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  {stream.whoMayEnjoy.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <Link
              to={`/streams/${stream.id.toLowerCase()}`}
              className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-bold transition-all border border-brand-border text-white bg-brand-surface hover:bg-slate-700/60"
            >
              <span>Explore In-Depth {stream.title} Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      {/* Stream Comparison Callout */}
      <div className="rounded-3xl bg-gradient-to-r from-brand-card via-indigo-950/40 to-brand-card border border-brand-border/80 p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Still wondering which stream aligns with your mind?
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Our 30-question interactive quiz measures your interest dimensions across real-world problem scenarios to reveal your tailored affinity.
        </p>
        <Link
          to="/quiz"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-brand-primary hover:bg-indigo-600 shadow-glow-primary transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Take the Career Quiz</span>
        </Link>
      </div>

      <DisclaimerBanner />

    </div>
  );
};
