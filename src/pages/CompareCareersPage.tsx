import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CAREERS_DATA } from '../data/careersData';
import { Career, InterestDimension } from '../types';
import { 
  GitCompare, 
  X, 
  Plus, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Target, 
  Building, 
  Clock, 
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const CompareCareersPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Selected careers (up to 3)
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    const c1 = searchParams.get('career1');
    const c2 = searchParams.get('career2');
    const c3 = searchParams.get('career3');
    const list = [c1, c2, c3].filter(Boolean) as string[];
    return list.length > 0 ? list : ['software-developer', 'clinical-psychologist', 'chartered-accountant'];
  });

  const [selectorOpenIndex, setSelectorOpenIndex] = useState<number | null>(null);

  // Sync state to URL params
  useEffect(() => {
    const params: Record<string, string> = {};
    if (selectedIds[0]) params.career1 = selectedIds[0];
    if (selectedIds[1]) params.career2 = selectedIds[1];
    if (selectedIds[2]) params.career3 = selectedIds[2];
    setSearchParams(params, { replace: true });
  }, [selectedIds, setSearchParams]);

  const selectedCareers = selectedIds
    .map(id => CAREERS_DATA.find(c => c.id === id))
    .filter(Boolean) as Career[];

  const handleSelectCareer = (careerId: string, slotIndex: number) => {
    setSelectedIds(prev => {
      const next = [...prev];
      next[slotIndex] = careerId;
      return next;
    });
    setSelectorOpenIndex(null);
  };

  const handleRemoveCareer = (slotIndex: number) => {
    setSelectedIds(prev => prev.filter((_, idx) => idx !== slotIndex));
  };

  const handleAddSlot = () => {
    if (selectedIds.length < 3) {
      // Find a career not yet selected
      const unselected = CAREERS_DATA.find(c => !selectedIds.includes(c.id));
      if (unselected) {
        setSelectedIds(prev => [...prev, unselected.id]);
      }
    }
  };

  const dimensions: InterestDimension[] = [
    'Analytical',
    'Scientific',
    'Business',
    'Social',
    'Creative',
    'Practical'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Neutral Decision Matrix
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Compare Career Pathways
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Compare up to 3 careers side by side. We evaluate each path objectively across 7 key criteria. No career is ranked as "best" or "superior"—every career has distinct cognitive demands and lifestyle trade-offs.
        </p>
      </div>

      {/* Top Career Selection Slots */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[0, 1, 2].map(slotIdx => {
          const career = selectedCareers[slotIdx];

          if (career) {
            return (
              <div 
                key={career.id}
                className="p-6 rounded-3xl bg-brand-card border border-brand-border flex flex-col justify-between space-y-4 relative shadow-sm"
              >
                {selectedCareers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveCareer(slotIdx)}
                    className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    title="Remove from comparison"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 inline-block mb-2">
                    {career.stream} Stream
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {career.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 italic">
                    "{career.tagline}"
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-brand-border/40">
                  <button
                    type="button"
                    onClick={() => setSelectorOpenIndex(selectorOpenIndex === slotIdx ? null : slotIdx)}
                    className="flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold text-slate-300 bg-brand-surface border border-brand-border hover:text-white hover:bg-slate-700/60 transition-colors text-center"
                  >
                    Change Career ▾
                  </button>
                  <Link
                    to={`/careers/${career.id}`}
                    className="py-1.5 px-3 rounded-lg text-xs font-semibold text-cyan-300 hover:underline"
                  >
                    Details &rarr;
                  </Link>
                </div>

                {/* Dropdown to change career */}
                {selectorOpenIndex === slotIdx && (
                  <div className="absolute top-full left-0 right-0 mt-2 z-30 max-h-60 overflow-y-auto rounded-2xl bg-brand-dark/95 border border-brand-border p-2 shadow-card-elevated backdrop-blur-xl">
                    {CAREERS_DATA.map(c => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleSelectCareer(c.id, slotIdx)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-colors ${
                          c.id === career.id 
                            ? 'bg-cyan-500/20 text-cyan-300 font-bold' 
                            : 'text-slate-200 hover:bg-brand-surface'
                        }`}
                      >
                        <span>{c.title}</span>
                        <span className="text-[10px] text-slate-400">({c.stream})</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <button
                key={`empty-${slotIdx}`}
                type="button"
                onClick={handleAddSlot}
                className="p-8 rounded-3xl bg-brand-surface/30 border-2 border-dashed border-brand-border/80 hover:border-cyan-400/60 text-slate-400 hover:text-cyan-300 flex flex-col items-center justify-center gap-3 transition-all min-h-[160px]"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center">
                  <Plus className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Add Career to Compare
                </span>
              </button>
            );
          }
        })}
      </div>

      {/* COMPARISON MATRIX TABLE */}
      <div className="overflow-x-auto rounded-3xl bg-brand-card/90 border border-brand-border shadow-card-elevated">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-brand-border/80 bg-brand-surface/70">
              <th className="p-4 sm:p-6 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                Comparison Dimension
              </th>
              {selectedCareers.map(c => (
                <th key={c.id} className="p-4 sm:p-6 text-sm font-extrabold text-white w-1/4">
                  {c.title}
                </th>
              ))}
              {Array.from({ length: 3 - selectedCareers.length }).map((_, i) => (
                <th key={i} className="p-4 sm:p-6 text-xs text-slate-500 w-1/4 italic">
                  (Select a career)
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border/50 text-xs sm:text-sm">
            
            {/* 1. Primary Interest Areas */}
            <tr className="hover:bg-brand-surface/30 transition-colors">
              <td className="p-4 sm:p-6 font-bold text-cyan-300 align-top">
                <div className="flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span>Cognitive Dimensions</span>
                </div>
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 sm:p-6 align-top space-y-2">
                  <div className="space-y-1.5">
                    {dimensions.map(dim => (
                      <div key={dim} className="flex items-center justify-between text-xs text-slate-300">
                        <span>{dim}:</span>
                        <span className="font-bold text-white">{c.dimensionProfile[dim]}%</span>
                      </div>
                    ))}
                  </div>
                </td>
              ))}
              {Array.from({ length: 3 - selectedCareers.length }).map((_, i) => (
                <td key={i} className="p-4 sm:p-6 text-slate-600">-</td>
              ))}
            </tr>

            {/* 2. School Subjects */}
            <tr className="hover:bg-brand-surface/30 transition-colors">
              <td className="p-4 sm:p-6 font-bold text-amber-300 align-top">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Class 11-12 Subjects</span>
                </div>
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 sm:p-6 align-top space-y-2">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Essential:</span>
                    <div className="flex flex-wrap gap-1">
                      {c.schoolSubjects.essential.map(s => (
                        <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Recommended:</span>
                    <div className="flex flex-wrap gap-1">
                      {c.schoolSubjects.recommended.map(s => (
                        <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
              ))}
              {Array.from({ length: 3 - selectedCareers.length }).map((_, i) => (
                <td key={i} className="p-4 sm:p-6 text-slate-600">-</td>
              ))}
            </tr>

            {/* 3. Target Degrees */}
            <tr className="hover:bg-brand-surface/30 transition-colors">
              <td className="p-4 sm:p-6 font-bold text-emerald-300 align-top">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>College Degrees</span>
                </div>
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 sm:p-6 align-top">
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {c.courses.map((course, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
              {Array.from({ length: 3 - selectedCareers.length }).map((_, i) => (
                <td key={i} className="p-4 sm:p-6 text-slate-600">-</td>
              ))}
            </tr>

            {/* 4. Core Skills */}
            <tr className="hover:bg-brand-surface/30 transition-colors">
              <td className="p-4 sm:p-6 font-bold text-cyan-300 align-top">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Essential Skills</span>
                </div>
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 sm:p-6 align-top space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {c.skills.technical.slice(0, 3).map(skill => (
                      <span key={skill} className="text-[11px] px-2 py-0.5 rounded bg-brand-surface border border-cyan-500/30 text-cyan-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400">
                    {c.skills.soft.slice(0, 2).join(', ')}
                  </p>
                </td>
              ))}
              {Array.from({ length: 3 - selectedCareers.length }).map((_, i) => (
                <td key={i} className="p-4 sm:p-6 text-slate-600">-</td>
              ))}
            </tr>

            {/* 5. Work Style & Rhythm */}
            <tr className="hover:bg-brand-surface/30 transition-colors">
              <td className="p-4 sm:p-6 font-bold text-indigo-300 align-top">
                <div className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-indigo-400" />
                  <span>Work Style & Setting</span>
                </div>
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 sm:p-6 align-top text-xs text-slate-300 space-y-1">
                  <p><strong className="text-white">Style:</strong> {c.workStyle}</p>
                  <p><strong className="text-white">Setting:</strong> {c.workEnvironment}</p>
                </td>
              ))}
              {Array.from({ length: 3 - selectedCareers.length }).map((_, i) => (
                <td key={i} className="p-4 sm:p-6 text-slate-600">-</td>
              ))}
            </tr>

            {/* 6. Education Pathway */}
            <tr className="hover:bg-brand-surface/30 transition-colors">
              <td className="p-4 sm:p-6 font-bold text-rose-300 align-top">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-rose-400" />
                  <span>Primary Pathway</span>
                </div>
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 sm:p-6 align-top text-xs text-slate-200 leading-relaxed">
                  {c.possiblePathways.direct}
                </td>
              ))}
              {Array.from({ length: 3 - selectedCareers.length }).map((_, i) => (
                <td key={i} className="p-4 sm:p-6 text-slate-600">-</td>
              ))}
            </tr>

            {/* 7. Entrance Routes */}
            <tr className="hover:bg-brand-surface/30 transition-colors">
              <td className="p-4 sm:p-6 font-bold text-amber-300 align-top">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Entrance Exams</span>
                </div>
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 sm:p-6 align-top">
                  <div className="flex flex-wrap gap-1">
                    {c.entranceExams.map(exam => (
                      <span key={exam} className="text-[11px] px-2 py-0.5 rounded bg-amber-950/40 text-amber-200 border border-amber-500/30">
                        {exam}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
              {Array.from({ length: 3 - selectedCareers.length }).map((_, i) => (
                <td key={i} className="p-4 sm:p-6 text-slate-600">-</td>
              ))}
            </tr>

            {/* 8. Salary Outlook */}
            <tr className="hover:bg-brand-surface/30 transition-colors">
              <td className="p-4 sm:p-6 font-bold text-emerald-300 align-top">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Salary Outlook (India)</span>
                </div>
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 sm:p-6 align-top text-xs font-semibold text-emerald-200">
                  {c.salaryOutlookIndia}
                </td>
              ))}
              {Array.from({ length: 3 - selectedCareers.length }).map((_, i) => (
                <td key={i} className="p-4 sm:p-6 text-slate-600">-</td>
              ))}
            </tr>

          </tbody>
        </table>
      </div>

      <DisclaimerBanner />

    </div>
  );
};
