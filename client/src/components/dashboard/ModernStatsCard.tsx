import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModernStatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  variant?: 'primary' | 'success' | 'warning' | 'info';
  description?: string;
  trend?: number[];
}

export const ModernStatsCard: React.FC<ModernStatsCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  variant = 'primary',
  description,
  trend = []
}) => {
  const variantClasses = {
    primary: 'stats-card-primary',
    success: 'stats-card-success',
    warning: 'stats-card-warning',
    info: 'stats-card-info'
  };

  const changeClasses = {
    positive: 'text-green-100',
    negative: 'text-red-100',
    neutral: 'text-gray-100'
  };

  return (
    <div className={cn('stats-card animate-fade-in', variantClasses[variant])}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-12 -translate-x-12"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
            <Icon className="h-6 w-6 text-white" />
          </div>
          {trend.length > 0 && (
            <div className="flex items-center space-x-1">
              {trend.map((value, index) => (
                <div
                  key={index}
                  className="w-1 bg-white/40 rounded-full"
                  style={{ height: `${Math.max(4, value)}px` }}
                ></div>
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white/80 text-sm font-medium mb-2">{title}</h3>

        {/* Value */}
        <div className="text-2xl font-bold text-white mb-1">
          {value}
        </div>

        {/* Change and Description */}
        <div className="flex items-center justify-between">
          {change && (
            <span className={cn('text-xs font-medium', changeClasses[changeType])}>
              {changeType === 'positive' && '+'}
              {change}
            </span>
          )}
          {description && (
            <span className="text-white/60 text-xs">{description}</span>
          )}
        </div>
      </div>
    </div>
  );
};