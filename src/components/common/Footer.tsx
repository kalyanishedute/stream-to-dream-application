import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Heart, Shield, BookOpen, Map, ArrowRight } from 'lucide-react';
import { DisclaimerBanner } from './DisclaimerBanner';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark/95 border-t border-brand-border/60 text-slate-400 text-sm mt-20 transition-all">
      
      {/* Top Banner CTA */}
      <div className="border-b border-brand-border/50 py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-card/40 to-transparent">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to discover where your mind naturally shines?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Take the free 30-question interest evaluation designed specifically for Indian students in Classes 8–12.
            </p>
          </div>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-secondary shadow-glow-primary hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Start Career Quiz</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-glow-primary">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white">Stream to Dream</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              <strong className="text-white">“Discover your stream. Understand your strengths. Build your dream.”</strong>
              <br />
              An objective, strengths-based career exploration platform guiding Indian students across CBSE, ICSE, and State Boards.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>100% Free • No Commercial Bias • NEP 2020 Aligned</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Explore Streams
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/streams/science" className="hover:text-cyan-400 transition-colors">Science (PCM / PCB)</Link>
              </li>
              <li>
                <Link to="/streams/commerce" className="hover:text-cyan-400 transition-colors">Commerce & Finance</Link>
              </li>
              <li>
                <Link to="/streams/humanities" className="hover:text-cyan-400 transition-colors">Humanities & Social Sciences</Link>
              </li>
              <li>
                <Link to="/streams/vocational" className="hover:text-cyan-400 transition-colors">Vocational & Creative Arts</Link>
              </li>
              <li>
                <Link to="/streams" className="text-cyan-400 hover:underline">Compare All 4 Streams &rarr;</Link>
              </li>
            </ul>
          </div>

          {/* Tools & Planning */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Tools & Guidance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/quiz" className="text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> 30-Question Quiz
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-cyan-400 transition-colors">25+ Careers Directory</Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-cyan-400 transition-colors">Compare Careers Tool</Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-cyan-400 transition-colors">Interactive Roadmap Builder</Link>
              </li>
              <li>
                <Link to="/entrance-exams" className="hover:text-cyan-400 transition-colors">Indian Entrance Exams</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-cyan-400 transition-colors">Degrees & Diplomas Guide</Link>
              </li>
            </ul>
          </div>

          {/* Community & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Resources & About
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/resources" className="hover:text-cyan-400 transition-colors">Parent Conversation Guide</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-cyan-400 transition-colors">Counselor Worksheets</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-cyan-400 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">About Our Mission</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-terms" className="hover:text-cyan-400 transition-colors">Privacy Policy & Terms</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Global disclaimer on every page */}
        <DisclaimerBanner className="mb-8" compact={true} />

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-brand-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Stream to Dream. Designed for student empowerment in Indian secondary schools.</p>
          <p className="flex items-center gap-1">
            Built with care for young dreamers across India <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
};
