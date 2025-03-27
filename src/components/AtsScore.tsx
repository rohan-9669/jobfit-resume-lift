
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AtsScoreProps {
  score: number;
  previousScore?: number;
  className?: string;
  animate?: boolean;
}

const AtsScore = ({ 
  score,
  previousScore,
  className, 
  animate = true 
}: AtsScoreProps) => {
  const [displayScore, setDisplayScore] = useState(previousScore || 0);
  
  useEffect(() => {
    if (animate) {
      const duration = 1500; // animation duration in ms
      const start = previousScore || 0;
      const end = score;
      const range = end - start;
      const startTime = Date.now();
      
      const animateScore = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = getEaseOutCubic(progress);
        
        setDisplayScore(Math.round(start + range * easeProgress));
        
        if (progress < 1) {
          requestAnimationFrame(animateScore);
        }
      };
      
      requestAnimationFrame(animateScore);
    } else {
      setDisplayScore(score);
    }
  }, [score, previousScore, animate]);
  
  const getEaseOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };
  
  const getScoreColor = (score: number): string => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };
  
  const getScoreRing = (score: number): string => {
    if (score >= 80) return 'from-green-500 to-emerald-500';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-rose-500';
  };
  
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-36 h-36">
        {/* Background ring */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="8" 
            className="text-gray-200 dark:text-gray-800" 
          />
        </svg>
        
        {/* Progress ring */}
        <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke={`url(#scoreGradient-${displayScore})`} 
            strokeWidth="8"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (251.2 * displayScore / 100)}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id={`scoreGradient-${displayScore}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className={`stop-color ${getScoreRing(displayScore)}`} />
              <stop offset="100%" className={`stop-color ${getScoreRing(displayScore)}`} />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("text-4xl font-bold", getScoreColor(displayScore))}>
            {displayScore}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">ATS Score</span>
        </div>
      </div>
      
      {previousScore !== undefined && (
        <div className="mt-2 text-sm">
          <span className="text-gray-600 dark:text-gray-400">Previous: </span>
          <span className={getScoreColor(previousScore)}>{previousScore}</span>
          <span className="text-gray-600 dark:text-gray-400"> | Improvement: </span>
          <span className="text-green-600 dark:text-green-400">+{score - previousScore}</span>
        </div>
      )}
    </div>
  );
};

export default AtsScore;
