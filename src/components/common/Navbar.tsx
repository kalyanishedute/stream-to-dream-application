import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Compass, 
  Sparkles, 
  Menu, 
  X, 
  BookOpen, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  GitCompare, 
  Map, 
  HelpCircle,
  BookmarkCheck
} from 'lucide-react';
import { useCareerQuiz } from '../../context/CareerQuizContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { results, bookmarkedCareerIds } = useCareerQuiz();

  const navLinks = [
    { label: 'Explore Streams', path: '/streams', icon: Layers },
    { label: 'Careers', path: '/careers', icon: Briefcase },
    { label: 'Courses', path: '/courses', icon: GraduationCap },
    { label: 'Entrance Exams', path: '/entrance-exams', icon: FileText },
    { label: 'Compare', path: '/compare', icon: GitCompare },
    { label: 'My Roadmap', path: '/roadmap', icon: Map },
    { label: 'Resources', path: '/resources', icon: BookOpen },
    { label: 'How It Works', path: '/how-it-works', icon: Compass },
    { label: 'FAQ', path: '/faq', icon: HelpCircle },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-brand-dark/85 border-b border-brand-border/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-lg p-1"
            aria-label="Stream to Dream Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary via-indigo-500 to-brand-secondary flex items-center justify-center text-white shadow-glow-primary group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse-subtle" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                Stream to Dream
              </span>
              <span className="block text-[10px] tracking-wider uppercase text-cyan-400 font-semibold">
                Classes 8–12 • India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 6).map(link => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all ${
                    active 
                      ? 'text-white bg-brand-surface border border-brand-border/80 shadow-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* More dropdown for secondary links */}
            <div className="relative group">
              <button 
                type="button" 
                className="px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 flex items-center gap-1"
                aria-haspopup="true"
              >
                More ▾
              </button>
              <div className="absolute right-0 mt-1 w-48 rounded-xl bg-brand-card/95 backdrop-blur-xl border border-brand-border p-2 shadow-card-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {navLinks.slice(6).map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-brand-surface"
                  >
                    <link.icon className="w-4 h-4 text-cyan-400" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {results && (
              <Link
                to="/results"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors"
                title="View your saved quiz results"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>My Results</span>
              </Link>
            )}

            {/* Prominently show Take the Quiz button */}
            <Link
              to="/quiz"
              className="relative group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-secondary shadow-glow-primary hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Take the Quiz</span>
              <span className="hidden xl:inline-block text-[11px] px-1.5 py-0.5 rounded-md bg-white/20 text-white font-medium">
                Free
              </span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-brand-primary shadow-glow-primary"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Quiz</span>
            </Link>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-brand-border bg-brand-dark/95 backdrop-blur-2xl animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="p-3 mb-3 rounded-xl bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-card border border-brand-border">
              <p className="text-xs text-slate-300">
                Not sure about Science, Commerce, or Humanities?
              </p>
              <Link
                to="/quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-brand-primary text-white text-sm font-bold shadow-glow-primary"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Take the 30-Question Quiz
              </Link>
            </div>

            {results && (
              <Link
                to="/results"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                View Your Quiz Results
              </Link>
            )}

            {navLinks.map(link => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active 
                      ? 'text-cyan-400 bg-brand-surface font-semibold' 
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <link.icon className={`w-4 h-4 ${active ? 'text-cyan-400' : 'text-slate-400'}`} />
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs text-slate-400 px-2">
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">About</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Contact</Link>
              <Link to="/privacy-terms" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Privacy & Terms</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
