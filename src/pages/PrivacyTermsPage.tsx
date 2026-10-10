import React from 'react';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const PrivacyTermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-cyan-400 mx-auto">
          <Shield className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Transparency & Safety
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Privacy Policy & Terms
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          We believe high school students deserve 100% private, pressure-free career guidance without advertising tracking or monetization of their data.
        </p>
      </div>

      {/* Privacy Section */}
      <div className="rounded-3xl bg-brand-card/90 border border-brand-border/80 p-8 sm:p-10 space-y-6 text-slate-300 text-sm leading-relaxed">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <Lock className="w-5 h-5 text-emerald-400" />
          <span>Privacy Policy: Your Data Stays on Your Device</span>
        </h2>
        
        <p>
          Unlike commercial EdTech portals in India that ask for student phone numbers to trigger aggressive coaching telemarketing calls, <strong>Stream to Dream operates client-side:</strong>
        </p>

        <ul className="space-y-3 pt-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Local Storage Only:</strong> All your quiz answers, normalized scores, saved careers, and personalized roadmap goals are stored exclusively in your browser’s localStorage.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>No Phone Number Collection:</strong> We never gate quiz results behind phone number or OTP verification. You will never receive unsolicited marketing spam from coaching centers.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Instant Data Deletion:</strong> Clicking "Restart Quiz" or clearing your browser storage permanently erases all traces of your answers.</span>
          </li>
        </ul>
      </div>

      {/* Terms of Use */}
      <div className="rounded-3xl bg-brand-card/90 border border-brand-border/80 p-8 sm:p-10 space-y-6 text-slate-300 text-sm leading-relaxed">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-400" />
          <span>Terms of Use & Guidance Disclaimers</span>
        </h2>
        
        <p>
          By using Stream to Dream, you acknowledge and agree to the following educational usage terms:
        </p>

        <ul className="space-y-3 pt-1">
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 font-bold">•</span>
            <span><strong>Exploratory Educational Tool:</strong> The Stream to Dream assessment is an interest exploration aid. It is designed to spark self-awareness and fruitful conversations, not to serve as a legal guarantee of exam success or professional qualification.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 font-bold">•</span>
            <span><strong>Holistic Evaluation:</strong> Stream choice in Classes 11 and 12 should always factor in multiple dimensions: personal interest, consistent academic performance across Classes 8–10, family support, and professional school counseling.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 font-bold">•</span>
            <span><strong>Exam Eligibility:</strong> While entrance exam eligibility and timelines are curated according to the latest official NTA, JoSAA, and statutory circulars, students should always verify official notifications on respective portals prior to applying.</span>
          </li>
        </ul>
      </div>

      <DisclaimerBanner />

    </div>
  );
};
