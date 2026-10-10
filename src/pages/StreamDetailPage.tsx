import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { STREAMS_DATA } from '../data/streamsData';
import { CAREERS_DATA } from '../data/careersData';
import { CareerCard } from '../components/careers/CareerCard';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  Layers, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const StreamDetailPage: React.FC = () => {
  const { streamId } = useParams<{ streamId: string }>();
  const streamKey = streamId?.toLowerCase() || '';
  const stream = STREAMS_DATA[streamKey];

  if (!stream) {
    return <Navigate to="/streams" replace />;
  }

  // Filter careers associated with this stream
  const associatedCareers = CAREERS_DATA.filter(c => c.stream === stream.id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Back button */}
      <div>
        <Link
          to="/streams"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Streams</span>
        </Link>
      </div>

      {/* Stream Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
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

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {stream.title} Guide
        </h1>
        <p className="text-base sm:text-lg text-slate-300 italic">
          "{stream.tagline}"
        </p>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
          {stream.overview}
        </p>
      </div>

      {/* SUB-TRACKS / SUBJECT COMBINATIONS */}
      <section className="space-y-6">
        <div className="border-b border-brand-border/60 pb-3">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Class 11–12 Sub-Tracks & Subjects</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Common subject combinations across CBSE, ICSE, and Indian State Boards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stream.subTracks.map(sub => (
            <div key={sub.name} className="p-6 rounded-2xl bg-brand-card/90 border border-brand-border/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white leading-snug">
                  {sub.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {sub.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/40">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1.5 uppercase tracking-wider">
                  Typical Subjects:
                </span>
                <div className="flex flex-wrap gap-1">
                  {sub.popularSubjects.map(subj => (
                    <span key={subj} className="text-[10px] px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-slate-300">
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KEY SKILLS & "WHO MAY ENJOY EXPLORING THIS?" */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Core Skills Developed */}
        <div className="p-8 rounded-3xl bg-brand-card/80 border border-brand-border space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Core Cognitive Skills Developed</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            The intellectual habits, reasoning capabilities, and practical proficiencies you will build in this stream:
          </p>
          <ul className="space-y-2.5 pt-2">
            {stream.keySkills.map((skill, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who May Enjoy Exploring This? */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-card to-brand-surface/70 border border-cyan-500/30 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span>“Who May Enjoy Exploring This?”</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Students who thrive in this stream frequently resonate with these personal traits and interests:
          </p>
          <ul className="space-y-2.5 pt-2">
            {stream.whoMayEnjoy.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* POPULAR DEGREES & TOP ENTRANCE EXAMS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Undergraduate Degrees */}
        <div className="p-8 rounded-3xl bg-brand-card/80 border border-brand-border space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <span>Key Undergraduate Degrees</span>
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {stream.undergraduateCourses.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link to="/courses" className="text-xs font-bold text-cyan-400 hover:underline">
              View Detailed Course Requirements &rarr;
            </Link>
          </div>
        </div>

        {/* Top Entrance Exams in India */}
        <div className="p-8 rounded-3xl bg-brand-card/80 border border-brand-border space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-rose-400" />
            <span>Major Entrance Exams in India</span>
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {stream.topEntranceExams.map((e, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-400 mt-0.5">•</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link to="/entrance-exams" className="text-xs font-bold text-cyan-400 hover:underline">
              View All Indian Entrance Exams Timelines &rarr;
            </Link>
          </div>
        </div>

      </div>

      {/* MYTHS VS FACTS */}
      <section className="space-y-6">
        <div className="border-b border-brand-border/60 pb-3">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span>Stream Myths & Realities</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Debunking cultural stereotypes with facts about modern Indian careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stream.mythsAndFacts.map((mf, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-brand-surface/60 border border-brand-border space-y-3">
              <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs">
                <span className="font-bold text-rose-300 uppercase tracking-wider block mb-1">Common Myth:</span>
                <span className="text-slate-200">“{mf.myth}”</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs">
                <span className="font-bold text-emerald-300 uppercase tracking-wider block mb-1">Factual Reality:</span>
                <span className="text-slate-200">{mf.fact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAREERS IN THIS STREAM */}
      <section className="space-y-6">
        <div className="border-b border-brand-border/60 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Career Paths in {stream.id}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Explore in-depth pathways, required exams, and salaries.
            </p>
          </div>
          <Link to="/careers" className="text-xs font-bold text-cyan-400 hover:underline">
            View All Careers &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {associatedCareers.map(career => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </section>

      {/* Bottom CTA to Quiz */}
      <div className="rounded-3xl bg-gradient-to-r from-brand-card via-indigo-950/40 to-brand-card border border-brand-border/80 p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Is {stream.title} your ideal match?
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Find out your objective affinity score using our 30-question interactive quiz.
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
