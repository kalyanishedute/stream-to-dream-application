import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Student',
    email: '',
    schoolCity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Contact & Community Support
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Have questions, suggestions, or want to invite Stream to Dream for a school career counseling workshop? Reach out to our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Contact info column */}
        <div className="md:col-span-5 p-8 rounded-3xl bg-brand-card/90 border border-brand-border space-y-6">
          <h2 className="text-xl font-bold text-white">
            Connect With Our Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We work with school principals, career guidance cells, and parent associations across India.
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 pt-2">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>counseling@streamtodream.in</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <span>New Delhi & Bengaluru, India</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-surface/70 border border-brand-border/60 text-xs text-slate-300 space-y-1">
            <strong className="text-white block">For School Partnerships:</strong>
            <p>We provide free orientation workshops for Class 9 & 10 batches across CBSE and ICSE schools.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 p-8 rounded-3xl bg-brand-card/90 border border-brand-border shadow-card-elevated">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Thank You for Reaching Out!</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Your message has been received. Our guidance coordinators will get back to your email within 2 business days.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', role: 'Student', email: '', schoolCity: '', message: '' });
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-white mb-2">
                Send Us a Note
              </h2>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name:</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Diya Patel"
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">I am a:</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  >
                    <option value="Student">Student (Class 8–12)</option>
                    <option value="Parent">Parent</option>
                    <option value="Teacher/Counselor">Teacher / School Counselor</option>
                    <option value="Principal">School Principal / Administrator</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address:</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="diya@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">School & City:</label>
                <input
                  type="text"
                  value={formData.schoolCity}
                  onChange={(e) => setFormData({ ...formData, schoolCity: e.target.value })}
                  placeholder="e.g. DPS R.K. Puram, New Delhi"
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Question or Feedback:</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist you with stream exploration?"
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-primary to-brand-secondary shadow-glow-primary hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

      <DisclaimerBanner />

    </div>
  );
};
