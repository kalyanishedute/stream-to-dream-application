import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCareerQuiz } from '../context/CareerQuizContext';
import { CAREERS_DATA } from '../data/careersData';
import { EXAMS_DATA } from '../data/examsData';
import { StreamType, Career } from '../types';
import { 
  Map, 
  CheckSquare, 
  Square, 
  Plus, 
  Trash2, 
  Printer, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Compass,
  RotateCcw
} from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const RoadmapPage: React.FC = () => {
  const { roadmap, updateRoadmap, resetRoadmap, results } = useCareerQuiz();
  const [newGoalInput, setNewGoalInput] = useState('');

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGoalInput.trim()) {
      updateRoadmap(prev => ({
        ...prev,
        customGoals: [...prev.customGoals, newGoalInput.trim()]
      }));
      setNewGoalInput('');
    }
  };

  const handleRemoveGoal = (index: number) => {
    updateRoadmap(prev => ({
      ...prev,
      customGoals: prev.customGoals.filter((_, i) => i !== index)
    }));
  };

  const selectedCareerObjects = roadmap.chosenCareers
    .map(id => CAREERS_DATA.find(c => c.id === id))
    .filter((c): c is Career => c !== undefined);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Personalized Career Navigation
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          My Educational Roadmap
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Trace your multi-stage journey from high school to professional career: Class &rarr; Subjects &rarr; Stream/Course &rarr; Entrance/Eligibility &rarr; Degree/Training &rarr; Career Options.
        </p>

        {/* Action Toolbar */}
        <div className="pt-2 flex items-center justify-center gap-3 no-print">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-brand-surface border border-brand-border hover:bg-slate-700 hover:text-white transition-colors"
          >
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>Print / Save PDF</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (window.confirm('Reset roadmap back to default?')) {
                resetRoadmap();
              }
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-rose-300 bg-rose-950/20 border border-rose-500/20 hover:bg-rose-900/30 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-rose-400" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* CUSTOMIZE YOUR PROFILE FORM */}
      <div className="p-6 sm:p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-6 shadow-card-elevated no-print">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          <span>Customize Your Journey Settings</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Student Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Your Name (Optional):
            </label>
            <input
              type="text"
              value={roadmap.studentName || ''}
              onChange={(e) => updateRoadmap({ studentName: e.target.value })}
              placeholder="e.g. Aarav Sharma"
              className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          {/* Current Class */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Current Class:
            </label>
            <select
              value={roadmap.targetClass}
              onChange={(e) => updateRoadmap({ targetClass: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10 (Stream Selection Year)</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12 (Board & Exam Year)</option>
            </select>
          </div>

          {/* Target Stream */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Target Stream:
            </label>
            <select
              value={roadmap.targetStream}
              onChange={(e) => updateRoadmap({ targetStream: e.target.value as StreamType | 'Undecided' })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              <option value="Undecided">Undecided / Exploring</option>
              <option value="Science">Science (STEM / PCM / PCB)</option>
              <option value="Commerce">Commerce & Business</option>
              <option value="Humanities">Humanities & Social Sciences</option>
              <option value="Vocational">Vocational & Creative Arts</option>
            </select>
          </div>

        </div>
      </div>

      {/* INTERACTIVE MULTI-STAGE ROADMAP TIMELINE */}
      <div className="space-y-6">
        
        {/* Stage 1: Class 8 - 10 */}
        <div className="relative pl-8 sm:pl-10 border-l-2 border-cyan-500/40 space-y-3 pb-8">
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-cyan-500 text-brand-dark flex items-center justify-center font-bold text-xs shadow-glow-cyan">
            1
          </div>
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              Stage 1 • Foundation (Classes 8–10)
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Discovery & Foundation Building
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Focus on broad exploration across science, mathematics, language, and social studies. Identify whether you learn best through analytical logic, hands-on building, creative art, or human interaction.
          </p>
          <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border text-xs space-y-2 max-w-2xl">
            <span className="font-bold text-white block">Key Milestones:</span>
            <ul className="space-y-1 text-slate-300">
              <li>• Complete the Stream to Dream 30-Question Quiz</li>
              <li>• Evaluate Standard Math vs Basic Math choice in Class 10 (CBSE)</li>
              <li>• Discuss subject affinities openly with teachers and parents</li>
            </ul>
          </div>
        </div>

        {/* Stage 2: Subjects & Stream (Classes 11-12) */}
        <div className="relative pl-8 sm:pl-10 border-l-2 border-indigo-500/40 space-y-3 pb-8">
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-xs shadow-glow-primary">
            2
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
              Stage 2 • Specialization (Classes 11–12)
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Subject Combination & Stream Selection: {roadmap.targetStream}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Select 5 core subjects aligning with university entrance requirements. Under NEP 2020, verify if your school allows cross-stream electives (e.g. Physics + Economics, or Commerce + Psychology).
          </p>
          <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border text-xs space-y-2 max-w-2xl">
            <span className="font-bold text-white block">Selected Core Subjects:</span>
            <div className="flex flex-wrap gap-2">
              {['Mathematics', 'Physics', 'Accountancy', 'Economics', 'Psychology', 'Computer Science', 'Legal Studies', 'Fine Arts'].map(subj => {
                const isSelected = roadmap.selectedSubjects.includes(subj);
                return (
                  <button
                    key={subj}
                    type="button"
                    onClick={() => {
                      updateRoadmap(prev => ({
                        ...prev,
                        selectedSubjects: isSelected
                          ? prev.selectedSubjects.filter(s => s !== subj)
                          : [...prev.selectedSubjects, subj]
                      }));
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-400'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    {isSelected ? `✓ ${subj}` : `+ ${subj}`}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stage 3: Entrance & Eligibility */}
        <div className="relative pl-8 sm:pl-10 border-l-2 border-amber-500/40 space-y-3 pb-8">
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-amber-500 text-brand-dark flex items-center justify-center font-bold text-xs">
            3
          </div>
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Stage 3 • College Admissions
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Target Entrance Exams & Eligibility
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Track registration deadlines, exam formats, and minimum percentage requirements for your targeted degree programs in India.
          </p>
          <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border text-xs space-y-2 max-w-2xl">
            <span className="font-bold text-white block">Selected Target Exams:</span>
            <div className="flex flex-wrap gap-2">
              {['JEE Main', 'NEET-UG', 'CUET-UG', 'CLAT', 'UCEED', 'IPMAT', 'CA Foundation', 'NIFT', 'NATA', 'NDA'].map(examName => {
                const isSelected = roadmap.targetExams.includes(examName);
                return (
                  <button
                    key={examName}
                    type="button"
                    onClick={() => {
                      updateRoadmap(prev => ({
                        ...prev,
                        targetExams: isSelected
                          ? prev.targetExams.filter(e => e !== examName)
                          : [...prev.targetExams, examName]
                      }));
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-brand-dark font-bold border-amber-400'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    {isSelected ? `✓ ${examName}` : `+ ${examName}`}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stage 4: Degree & Training */}
        <div className="relative pl-8 sm:pl-10 border-l-2 border-emerald-500/40 space-y-3 pb-8">
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-emerald-500 text-brand-dark flex items-center justify-center font-bold text-xs">
            4
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Stage 4 • Higher Education (Years 1–4)
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Undergraduate Degree & Professional Certifications
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Acquire foundational domain theory, complete hands-on internships, join campus clubs (E-cells, debate societies, robotics labs), and build your real-world portfolio.
          </p>
        </div>

        {/* Stage 5: Career Options */}
        <div className="relative pl-8 sm:pl-10 border-l-2 border-rose-500/40 space-y-3">
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-xs shadow-glow-rose">
            5
          </div>
          <div>
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
              Stage 5 • Career Horizons
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Target Career Goals
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Careers you are actively working towards. Review their skill benchmarks and salary outlooks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {selectedCareerObjects.map(career => (
              <div key={career.id} className="p-4 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">{career.stream}</span>
                  <h4 className="font-bold text-white text-sm">{career.title}</h4>
                  <span className="text-xs text-slate-400">{career.salaryOutlookIndia}</span>
                </div>
                <Link to={`/careers/${career.id}`} className="text-xs text-cyan-300 hover:underline">
                  View &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CUSTOM ACTIONABLE GOALS / CHECKLIST */}
      <section className="p-6 sm:p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-6 shadow-card-elevated">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-emerald-400" />
              <span>Personal Action Items & Goals</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Add your immediate milestones (e.g., talk with parents, research colleges, solve sample papers).
            </p>
          </div>
        </div>

        {/* Add Goal Input */}
        <form onSubmit={handleAddGoal} className="flex gap-2 no-print">
          <input
            type="text"
            value={newGoalInput}
            onChange={(e) => setNewGoalInput(e.target.value)}
            placeholder="Add a new milestone or action step..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-primary hover:bg-indigo-600 transition-colors shrink-0"
          >
            Add Goal
          </button>
        </form>

        {/* Goals List */}
        <ul className="space-y-2">
          {roadmap.customGoals.map((goal, idx) => (
            <li
              key={idx}
              className="p-3 rounded-xl bg-brand-surface/60 border border-brand-border flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-200"
            >
              <div className="flex items-center gap-3">
                <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{goal}</span>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveGoal(idx)}
                className="p-1 rounded text-slate-400 hover:text-rose-400 transition-colors no-print"
                title="Remove goal"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <DisclaimerBanner />

    </div>
  );
};
