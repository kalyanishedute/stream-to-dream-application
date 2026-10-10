import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  CheckCircle2, 
  Layers, 
  Briefcase, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Award, 
  HeartHandshake,
  ShieldAlert,
  Brain,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { CAREERS_DATA } from '../data/careersData';
import { CareerCard } from '../components/careers/CareerCard';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const HomePage: React.FC = () => {
  const popularCareers = CAREERS_DATA.slice(0, 6);

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 overflow-hidden">
        {/* Decorative background glow spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-secondary/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface/80 border border-brand-border text-cyan-300 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Dedicated to Indian Students in Classes 8–12 • CBSE, ICSE & State Boards</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
            Your Future Starts With <br />
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-200 to-rose-300 bg-clip-text text-transparent">
              Knowing Yourself.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            “Explore your interests, discover suitable streams, and find career paths that match the way you think, create, solve and communicate.”
          </p>

          {/* Hero Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quiz"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-secondary shadow-glow-primary hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Take the Career Quiz</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/careers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base sm:text-lg font-semibold text-slate-200 bg-brand-surface/80 border border-brand-border/80 hover:bg-slate-700/60 hover:text-white transition-all"
            >
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Explore Careers</span>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-brand-border/40 text-left">
            <div className="p-3">
              <span className="block text-2xl font-black text-white">30 Qs</span>
              <span className="text-xs text-slate-400">Scientific Interest Dimensions</span>
            </div>
            <div className="p-3">
              <span className="block text-2xl font-black text-cyan-300">4 Streams</span>
              <span className="text-xs text-slate-400">Zero Hierarchy or Bias</span>
            </div>
            <div className="p-3">
              <span className="block text-2xl font-black text-amber-300">25+ Careers</span>
              <span className="text-xs text-slate-400">Indian Educational Pathways</span>
            </div>
            <div className="p-3">
              <span className="block text-2xl font-black text-rose-300">NEP 2020</span>
              <span className="text-xs text-slate-400">Blended Profile Support</span>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            A Clear, Structured Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Stream to Dream Works
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            No pressure. No rigid boxes. Just scientific self-discovery adapted for Indian schooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="rounded-3xl bg-brand-card/80 border border-brand-border/80 p-8 relative flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-xl border border-cyan-500/30">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Answer Everyday Scenarios</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Take our 30-question interactive quiz. Questions focus on what energizes you—weekend experiments, school exhibitions, favorite challenges—not rigid stream tests.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border/40 text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Measures 6 cognitive dimensions</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-3xl bg-brand-card/80 border border-brand-border/80 p-8 relative flex flex-col justify-between hover:border-indigo-500/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-black text-xl border border-indigo-500/30">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Unlock Your Stream & Profile</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                See your normalized interest bars and 4-stream affinity breakdown. If you are strong across two streams, our algorithm highlights your unique "Blended Profile."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border/40 text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Exact weighted formula calculations</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-3xl bg-brand-card/80 border border-brand-border/80 p-8 relative flex flex-col justify-between hover:border-rose-500/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-black text-xl border border-rose-500/30">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Explore, Compare & Plan</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Review 6–8 matched careers with interest-profile similarity percentages, compare up to 3 careers side by side, and draft your personalized roadmap to talk with your parents.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border/40 text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Concrete Indian college pathways</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4 STREAMS SECTION (NEUTRAL PRESENTATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Four Paths of Equal Dignity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore All Four Academic Streams
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every stream leads to world-class careers. The key is finding where your natural mental curiosity and problem-solving style reside.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* SCIENCE */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-card via-brand-surface/60 to-brand-card border border-cyan-500/30 p-8 flex flex-col justify-between space-y-6 hover:shadow-card-elevated transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  Science Stream
                </span>
                <span className="text-xs text-slate-400">PCM • PCB • PCMB</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">Inquiry, Technology & Medicine</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Focuses on discovering the fundamental laws of nature, building technological architectures, and advancing clinical healthcare.
              </p>
              
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-slate-200">Featured Pathways & Fields:</p>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  {['Engineering', 'Medicine & Surgery', 'Data Science', 'Aerospace', 'Research Sciences', 'Aviation'].map(f => (
                    <span key={f} className="px-2.5 py-1 rounded-lg bg-brand-surface border border-brand-border/60">{f}</span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/streams/science"
              className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold text-sm hover:bg-cyan-500/20 transition-all"
            >
              <span>Explore Science Stream Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* COMMERCE */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-card via-brand-surface/60 to-brand-card border border-amber-500/30 p-8 flex flex-col justify-between space-y-6 hover:shadow-card-elevated transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Commerce Stream
                </span>
                <span className="text-xs text-slate-400">Finance • Business • Economics</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">Enterprise, Capital & Leadership</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Investigates how wealth is created, corporations are structured, markets operate, and global business strategies are executed.
              </p>
              
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-slate-200">Featured Pathways & Fields:</p>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  {['Chartered Accountancy (CA)', 'Investment Banking', 'Corporate Strategy', 'Company Secretary (CS)', 'Venture Entrepreneurship'].map(f => (
                    <span key={f} className="px-2.5 py-1 rounded-lg bg-brand-surface border border-brand-border/60">{f}</span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/streams/commerce"
              className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-sm hover:bg-amber-500/20 transition-all"
            >
              <span>Explore Commerce Stream Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* HUMANITIES */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-card via-brand-surface/60 to-brand-card border border-emerald-500/30 p-8 flex flex-col justify-between space-y-6 hover:shadow-card-elevated transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Humanities & Social Sciences
                </span>
                <span className="text-xs text-slate-400">Society • Mind • Governance</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">Human Mind, Justice & Governance</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Explores the human condition through psychology, constitutional law, public administration, cultural literature, and social reform.
              </p>
              
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-slate-200">Featured Pathways & Fields:</p>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  {['Corporate Law (NLUs)', 'Clinical Psychology', 'Civil Services (IAS/IPS)', 'Investigative Journalism', 'Public Policy', 'Diplomacy'].map(f => (
                    <span key={f} className="px-2.5 py-1 rounded-lg bg-brand-surface border border-brand-border/60">{f}</span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/streams/humanities"
              className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold text-sm hover:bg-emerald-500/20 transition-all"
            >
              <span>Explore Humanities Stream Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* VOCATIONAL & CREATIVE */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-card via-brand-surface/60 to-brand-card border border-rose-500/30 p-8 flex flex-col justify-between space-y-6 hover:shadow-card-elevated transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30">
                  Vocational & Creative Arts
                </span>
                <span className="text-xs text-slate-400">Design • Media • Hospitality</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">Applied Craft, Design & Experiences</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Translates original creative vision and practical craftsmanship into digital interfaces, 3D animations, sports performance, and luxury hospitality.
              </p>
              
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-slate-200">Featured Pathways & Fields:</p>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  {['UI/UX Design', '3D Game Animation', 'Luxury Hospitality', 'Sports Kinesiology', 'Fashion Textiles', 'Digital Media'].map(f => (
                    <span key={f} className="px-2.5 py-1 rounded-lg bg-brand-surface border border-brand-border/60">{f}</span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/streams/vocational"
              className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 font-bold text-sm hover:bg-rose-500/20 transition-all"
            >
              <span>Explore Vocational & Design Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* POPULAR CAREERS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Real-World Horizons
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Popular Career Paths in India
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Explore in-depth profiles covering day-to-day responsibilities, required school subjects, college degrees, and verified salary trajectories.
            </p>
          </div>
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View All 25+ Career Pathways</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCareers.map(career => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </section>

      {/* WHY TAKE THE QUIZ? (SCIENTIFIC EXPLANATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-card via-indigo-950/30 to-brand-card border border-brand-border/80 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Brain className="w-4 h-4" />
                The Science of Self-Discovery
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Take the Stream to Dream Quiz?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most stream decisions in India are made under peer influence, family tradition, or marks scored in a single 10th-grade board exam. But marks do not measure long-term cognitive stamina.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border/60">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    Six Core Dimensions
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Evaluates Analytical, Scientific, Business, Social, Creative, and Practical affinities.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border/60">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Blended-Profile Logic
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Recognizes multidisciplinary minds (e.g. Science + Design for Architecture/UI-UX).
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/quiz"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-brand-primary hover:bg-indigo-600 shadow-glow-primary transition-all"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Start Free 30-Question Assessment</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-brand-surface/90 border border-brand-border space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Cognitive Dimension Breakdown
              </h4>
              <div className="space-y-3">
                {[
                  { name: 'Analytical', pct: 88, color: '#6366F1' },
                  { name: 'Scientific', pct: 75, color: '#06B6D4' },
                  { name: 'Creative', pct: 92, color: '#EC4899' },
                  { name: 'Social', pct: 60, color: '#10B981' },
                  { name: 'Business', pct: 70, color: '#F59E0B' },
                  { name: 'Practical', pct: 84, color: '#8B5CF6' }
                ].map(dim => (
                  <div key={dim.name}>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span>{dim.name}</span>
                      <span>{dim.pct}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${dim.pct}%`, backgroundColor: dim.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 pt-2 border-t border-brand-border/40">
                Sample student visualization from the Stream to Dream evaluation engine.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PARENT & COUNSELOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-card/90 border border-brand-border/80 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              For Parents, Educators & Counselors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Bridging the Family Conversation with Respect & Clarity
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We know Indian parents want the absolute best security and prosperity for their children. But 21st-century careers look dramatically different from 20 years ago. Stream to Dream provides clear data and neutral conversation frameworks to align parents and teenagers harmoniously.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Parent Conversation Guide</span>
              </Link>

              <Link
                to="/resources"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-300 bg-brand-surface border border-brand-border hover:text-white hover:bg-slate-700/60 transition-all"
              >
                <Users className="w-4 h-4" />
                <span>Counselor Intake Worksheets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INSPIRATIONAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Discover your stream. Understand your strengths. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
            Build your dream.
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base">
          Join thousands of Indian high school students navigating Class 10 and Class 12 with clarity, dignity, and authentic self-knowledge.
        </p>
        <div className="pt-2">
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base sm:text-lg font-extrabold text-white bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-secondary shadow-glow-primary hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>Take the Career Quiz Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Global Disclaimer */}
      <div className="max-w-4xl mx-auto px-4">
        <DisclaimerBanner />
      </div>

    </div>
  );
};
