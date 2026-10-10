import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CAREERS_DATA } from '../data/careersData';
import { CareerCard } from '../components/careers/CareerCard';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { useCareerQuiz } from '../context/CareerQuizContext';
import { 
  ArrowLeft, 
  ArrowRight,
  Bookmark, 
  BookmarkCheck, 
  GitCompare, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  ShieldCheck,
  Building,
  Target
} from 'lucide-react';

export const CareerDetailPage: React.FC = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const { bookmarkedCareerIds, toggleBookmark, results } = useCareerQuiz();

  const career = CAREERS_DATA.find(c => c.id === careerId);

  if (!career) {
    return <Navigate to="/careers" replace />;
  }

  const isBookmarked = bookmarkedCareerIds.includes(career.id);
  const matchedData = results?.careerMatches.find(m => m.career.id === career.id);

  // Find related career objects
  const relatedCareers = CAREERS_DATA.filter(c => career.relatedCareerIds.includes(c.id));

  const getStreamColor = (stream: string) => {
    switch (stream) {
      case 'Science': return '#06B6D4';
      case 'Commerce': return '#F59E0B';
      case 'Humanities': return '#10B981';
      case 'Vocational': return '#EC4899';
      default: return '#8B5CF6';
    }
  };

  const streamColor = getStreamColor(career.stream);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/careers"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Careers</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to={`/compare?career1=${career.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors"
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>Compare Career</span>
          </Link>

          <button
            type="button"
            onClick={() => toggleBookmark(career.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
              isBookmarked
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                : 'bg-brand-surface border-brand-border text-slate-300 hover:text-white'
            }`}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-400" /> : <Bookmark className="w-4 h-4" />}
            <span>{isBookmarked ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Header Banner */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span 
            className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${streamColor}20`,
              color: streamColor,
              border: `1px solid ${streamColor}40`
            }}
          >
            {career.stream} Stream
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {career.subStream}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {career.title}
        </h1>
        <p className="text-lg sm:text-xl text-cyan-300 font-medium italic">
          "{career.tagline}"
        </p>

        {/* If matched with quiz */}
        {matchedData && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-cyan-950/60 border border-cyan-500/40 space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Interest-Profile Similarity: {matchedData.similarity}%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              {matchedData.rationale}
            </p>
          </div>
        )}

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
          {career.overview}
        </p>
      </div>

      {/* WHAT THEY DO */}
      <section className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-cyan-400" />
          <span>What They Do (Core Responsibilities)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {career.whatTheyDo.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border/60 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span className="text-sm text-slate-200 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS & SUBJECTS MATRIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* School Subjects */}
        <section className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span>Recommended School Subjects (Class 11-12)</span>
          </h2>

          <div>
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-2">
              Essential Prerequisites:
            </span>
            <div className="flex flex-wrap gap-2">
              {career.schoolSubjects.essential.map(s => (
                <span key={s} className="px-3 py-1 rounded-xl bg-cyan-950/40 text-cyan-200 border border-cyan-500/30 text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
              Recommended Electives:
            </span>
            <div className="flex flex-wrap gap-2">
              {career.schoolSubjects.recommended.map(s => (
                <span key={s} className="px-3 py-1 rounded-xl bg-brand-surface text-slate-300 border border-brand-border text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Required Skills */}
        <section className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            <span>Key Skill Profile</span>
          </h2>

          <div>
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-2">
              Technical & Domain Competencies:
            </span>
            <div className="flex flex-wrap gap-2">
              {career.skills.technical.map(s => (
                <span key={s} className="px-3 py-1 rounded-xl bg-emerald-950/40 text-emerald-200 border border-emerald-500/30 text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
              Interpersonal & Cognitive Skills:
            </span>
            <div className="flex flex-wrap gap-2">
              {career.skills.soft.map(s => (
                <span key={s} className="px-3 py-1 rounded-xl bg-brand-surface text-slate-300 border border-brand-border text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* STEP-BY-STEP PATHWAYS */}
      <section className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-400" />
            <span>Possible Educational Pathways in India</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Different educational routes you can take to enter this profession.
          </p>
        </div>

        <div className="space-y-4">
          {/* Direct pathway */}
          <div className="p-5 rounded-2xl bg-brand-surface/70 border border-brand-border/80 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 inline-block">
              Primary Direct Pathway
            </span>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {career.possiblePathways.direct}
            </p>
          </div>

          {/* Alternative pathway */}
          <div className="p-5 rounded-2xl bg-brand-surface/70 border border-brand-border/80 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 inline-block">
              Alternative Route
            </span>
            <p className="text-sm text-slate-200 leading-relaxed">
              {career.possiblePathways.alternative}
            </p>
          </div>

          {/* Lateral pathway */}
          {career.possiblePathways.lateral && (
            <div className="p-5 rounded-2xl bg-brand-surface/70 border border-brand-border/80 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 inline-block">
                Lateral / Multidisciplinary Route
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {career.possiblePathways.lateral}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* DEGREES & ENTRANCE EXAMS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Recommended Degrees */}
        <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <span>Target Undergraduate Degrees</span>
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {career.courses.map((course, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Entrance Exams */}
        <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <span>Relevant Entrance Examinations</span>
          </h3>
          <div className="flex flex-wrap gap-2 pt-1">
            {career.entranceExams.map((exam, idx) => (
              <Link
                key={idx}
                to="/entrance-exams"
                className="px-3 py-1.5 rounded-xl bg-amber-950/40 text-amber-200 border border-amber-500/30 text-xs font-semibold hover:bg-amber-900/40 transition-colors"
              >
                {exam}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* WORK STYLE & SALARY OUTLOOK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Work Environment */}
        <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Building className="w-5 h-5 text-indigo-400" />
            <span>Work Style & Environment</span>
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <p>
              <strong className="text-white block mb-0.5">Typical Work Rhythm:</strong>
              {career.workStyle}
            </p>
            <p>
              <strong className="text-white block mb-0.5">Physical Setting:</strong>
              {career.workEnvironment}
            </p>
          </div>
        </div>

        {/* Salary & Future Scope */}
        <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span>Indian Salary Trajectory & Future Scope</span>
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <p>
              <strong className="text-emerald-300 block mb-0.5">Industry Salary Estimates (India):</strong>
              {career.salaryOutlookIndia}
            </p>
            <p>
              <strong className="text-cyan-300 block mb-0.5">Emerging Technological Scope:</strong>
              {career.futureScope}
            </p>
          </div>
        </div>

      </div>

      {/* DIMENSION BENCHMARK PROFILE */}
      <section className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            Ideal Interest Profile Benchmark for {career.title}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            How this career maps onto the six interest dimensions based on cognitive demands.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Object.entries(career.dimensionProfile).map(([dim, score]) => (
            <div key={dim} className="p-4 rounded-2xl bg-brand-surface/60 border border-brand-border text-center">
              <span className="text-xs text-slate-400 block mb-1">{dim}</span>
              <span className="text-2xl font-black text-white">{score}%</span>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mt-2">
                <div className="h-full rounded-full bg-cyan-400" style={{ width: `${score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED CAREERS */}
      {relatedCareers.length > 0 && (
        <section className="space-y-6">
          <div className="border-b border-brand-border/60 pb-3">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Related Career Pathways
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Careers that share cognitive skills and subject combinations with {career.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCareers.map(rc => (
              <CareerCard key={rc.id} career={rc} />
            ))}
          </div>
        </section>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          to={`/compare?career1=${career.id}`}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-brand-surface border border-brand-border hover:bg-slate-700 hover:text-white transition-all shadow-sm"
        >
          <GitCompare className="w-4 h-4 text-cyan-400" />
          <span>Compare With Other Careers</span>
        </Link>

        <Link
          to="/roadmap"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-white bg-gradient-to-r from-brand-primary to-brand-secondary shadow-glow-primary hover:shadow-glow-cyan transition-all"
        >
          <span>Add to My Roadmap</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <DisclaimerBanner />

    </div>
  );
};
