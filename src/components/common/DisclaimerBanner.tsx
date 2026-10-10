import React from 'react';
import { AlertCircle } from 'lucide-react';

interface DisclaimerBannerProps {
  className?: string;
  compact?: boolean;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ className = '', compact = false }) => {
  return (
    <div
      role="note"
      aria-label="Guidance Disclaimer"
      className={`rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200/90 text-sm leading-relaxed backdrop-blur-md shadow-sm ${className}`}
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-amber-300">
            Important Guidance Disclaimer
          </p>
          <p className={compact ? 'text-xs text-amber-200/80' : 'text-sm text-amber-200/90'}>
            “Your result is an exploration aid, not a definitive career prediction or professional counseling assessment. Use it alongside your interests, academic performance, opportunities and conversations with trusted adults or qualified counselors.”
          </p>
        </div>
      </div>
    </div>
  );
};
