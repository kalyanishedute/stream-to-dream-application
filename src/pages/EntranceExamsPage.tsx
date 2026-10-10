import React, { useState } from 'react';
import { EXAMS_DATA } from '../data/examsData';
import { Search, Calendar, FileText, CheckCircle2, ExternalLink, Lightbulb, Filter } from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const EntranceExamsPage: React.FC = () => {
  const [selectedStream, setSelectedStream] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExams = EXAMS_DATA.filter(exam => {
    if (selectedStream !== 'All' && exam.stream !== selectedStream && exam.stream !== 'All Streams') {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        exam.name.toLowerCase().includes(q) ||
        exam.shortName.toLowerCase().includes(q) ||
        exam.targetDegrees.some(d => d.toLowerCase().includes(q)) ||
        exam.conductingBody.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          National & State Admissions
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Indian Entrance Examinations Guide
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Everything you need to know about eligibility, examination formats, conducting bodies, key application timelines, and expert preparation strategies.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-brand-card/90 border border-brand-border space-y-4 shadow-card-elevated">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search entrance exam (e.g. JEE, NEET, CUET, CLAT, NIFT, UCEED)..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-brand-surface/80 border border-brand-border text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Target Stream:
            </span>
            {['All', 'Science', 'Commerce', 'All Streams'].map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedStream(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedStream === s
                    ? 'bg-brand-primary text-white shadow-glow-primary'
                    : 'bg-brand-surface text-slate-300 border border-brand-border hover:bg-slate-700/60 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredExams.map(exam => (
          <div
            key={exam.id}
            className="rounded-3xl bg-brand-card/85 border border-brand-border/80 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-card-elevated transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {exam.shortName}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {exam.conductingBody}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {exam.name}
              </h2>

              {/* Target Degrees */}
              <div className="flex flex-wrap gap-1.5">
                {exam.targetDegrees.map(deg => (
                  <span key={deg} className="text-[11px] px-2.5 py-0.5 rounded-lg bg-brand-surface border border-brand-border text-slate-300">
                    {deg}
                  </span>
                ))}
              </div>

              {/* Timeline & Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-brand-surface/70 border border-brand-border/60 space-y-1">
                  <span className="font-bold text-amber-300 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Timeline & Frequency:
                  </span>
                  <span className="text-slate-200 block">{exam.tentativeTimeline}</span>
                  <span className="text-slate-400 block text-[11px]">({exam.frequency})</span>
                </div>

                <div className="p-3 rounded-xl bg-brand-surface/70 border border-brand-border/60 space-y-1">
                  <span className="font-bold text-cyan-300 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Exam Mode:
                  </span>
                  <span className="text-slate-200 block">{exam.mode}</span>
                </div>
              </div>

              {/* Eligibility */}
              <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border/60 text-xs space-y-1">
                <span className="font-bold text-white block uppercase tracking-wider">
                  Eligibility Criteria:
                </span>
                <span className="text-slate-300 leading-relaxed block">
                  {exam.eligibility}
                </span>
              </div>

              {/* Pattern */}
              <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border/60 text-xs space-y-1">
                <span className="font-bold text-white block uppercase tracking-wider">
                  Exam Format & Pattern:
                </span>
                <span className="text-slate-300 leading-relaxed block">
                  {exam.examPattern}
                </span>
              </div>

              {/* Preparation Tips */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  Key Preparation Tips:
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  {exam.keyPreparationTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Official Website Link */}
            {exam.officialSite && (
              <a
                href={exam.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all border border-brand-border text-slate-200 bg-brand-surface hover:text-white hover:bg-slate-700/60"
              >
                <span>Visit Official Portal ({exam.shortName})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        ))}
      </div>

      <DisclaimerBanner />

    </div>
  );
};
