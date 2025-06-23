import React from 'react';
import { LucideIcon, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModernModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  stats?: string;
  isNew?: boolean;
  isPopular?: boolean;
  gradient?: string;
  features?: string[];
}

export const ModernModuleCard: React.FC<ModernModuleCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  stats,
  isNew = false,
  isPopular = false,
  gradient = 'from-blue-500 to-purple-600',
  features = []
}) => {
  return (
    <Link to={href} className="group block">
      <div className="card-modern hover-lift animate-slide-up relative overflow-hidden h-full">
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${gradient} p-6 relative`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
          
          {/* Badges */}
          <div className="absolute top-4 right-4 flex gap-2">
            {isNew && (
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
            )}
            {isPopular && (
              <span className="bg-white/20 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Popular
              </span>
            )}
          </div>

          {/* Icon and title */}
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {stats && (
              <div className="text-white/80 text-sm font-medium">{stats}</div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Features */}
          {features.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
                {features.length > 3 && (
                  <span className="text-gray-400 text-xs px-2 py-1">
                    +{features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Action */}
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">Click to explore</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
          </div>
        </div>
      </div>
    </Link>
  );
};