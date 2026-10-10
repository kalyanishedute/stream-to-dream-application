import React, { useState } from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { Search, GraduationCap, Clock, Award, Building2, Briefcase, Filter } from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const CoursesPage: React.FC = () => {
  const [selectedStream, setSelectedStream] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = COURSES_DATA.filter(course => {
    if (selectedStream !== 'All' && course.stream !== selectedStream) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        course.name.toLowerCase().includes(q) ||
        course.code.toLowerCase().includes(q) ||
        course.overview.toLowerCase().includes(q) ||
        course.careerProspects.some(cp => cp.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Higher Education Guide
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Undergraduate Courses & Degrees
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Compare leading Bachelor's degrees and professional qualifications in India. Review duration, board eligibility requirements, and premier institutions.
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
              placeholder="Search degrees (e.g. B.Tech, MBBS, B.Des, IPM, Law)..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-brand-surface/80 border border-brand-border text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Stream:
            </span>
            {['All', 'Science', 'Commerce', 'Humanities', 'Vocational'].map(s => (
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

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCourses.map(course => (
          <div
            key={course.id}
            className="rounded-3xl bg-brand-card/85 border border-brand-border/80 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-card-elevated transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {course.code}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {course.duration}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {course.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {course.overview}
              </p>

              {/* Eligibility & Admission */}
              <div className="space-y-3 pt-3 border-t border-brand-border/50 text-xs">
                <div className="p-3 rounded-xl bg-brand-surface/70 border border-brand-border/60">
                  <span className="font-bold text-amber-300 block mb-0.5">Board Eligibility:</span>
                  <span className="text-slate-200">{course.eligibility}</span>
                </div>

                <div className="p-3 rounded-xl bg-brand-surface/70 border border-brand-border/60">
                  <span className="font-bold text-cyan-300 block mb-0.5">Admission Route:</span>
                  <span className="text-slate-200">{course.admissionMode}</span>
                </div>
              </div>

              {/* Top Institutions */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                  Premier Institutions in India:
                </span>
                <ul className="text-xs text-slate-300 space-y-1">
                  {course.topInstitutions.map((inst, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-indigo-400">•</span>
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career prospects */}
              <div className="space-y-2 pt-2 border-t border-brand-border/40">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  Direct Career Outcomes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {course.careerProspects.map(cp => (
                    <span key={cp} className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-950/30 text-emerald-200 border border-emerald-500/20">
                      {cp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DisclaimerBanner />

    </div>
  );
};
