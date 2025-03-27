
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  className,
  delay = 0
}: FeatureCardProps) => {
  const animationDelay = `delay-[${delay * 100}ms]`;
  
  return (
    <div 
      className={cn(
        "flex flex-col p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 ease-in-out animate-slide-up opacity-0",
        className,
        delay ? animationDelay : ""
      )}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
