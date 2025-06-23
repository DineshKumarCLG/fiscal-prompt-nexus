import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  FileText,
  CreditCard,
  PieChart,
  Users,
  Calendar,
  Settings,
  MessageSquare,
  Zap,
  TrendingUp,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const ModernSidebar: React.FC = () => {
  const location = useLocation();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/',
      icon: Home,
      description: 'Overview & insights'
    },
    {
      name: 'AI Assistant',
      href: '/prompt',
      icon: MessageSquare,
      description: 'Natural language queries',
      badge: 'AI',
      isNew: true
    },
    {
      name: 'Documents',
      href: '/documents',
      icon: FileText,
      description: 'Smart document management'
    },
    {
      name: 'Bank Sync',
      href: '/bank',
      icon: CreditCard,
      description: 'Account reconciliation'
    },
    {
      name: 'Expenses',
      href: '/expenses',
      icon: TrendingUp,
      description: 'Receipt & expense tracking'
    },
    {
      name: 'GST & Tax',
      href: '/gst',
      icon: Calendar,
      description: 'Compliance & filing'
    },
    {
      name: 'Payroll',
      href: '/payroll',
      icon: Users,
      description: 'Employee management'
    },
    {
      name: 'Reports',
      href: '/reports',
      icon: PieChart,
      description: 'Investor & analytics'
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Settings,
      description: 'Configuration'
    }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">FinanceAI</h1>
            <p className="text-xs text-gray-500">Professional</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'group flex items-center justify-between p-3 rounded-xl transition-all duration-200 relative',
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              )}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
                  isActive 
                    ? 'bg-white/20' 
                    : 'bg-gray-100 group-hover:bg-blue-100'
                )}>
                  <Icon className={cn(
                    'w-4 h-4',
                    isActive ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'
                  )} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm truncate">{item.name}</span>
                    {item.isNew && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-1.5 py-0.5 rounded-full font-medium">
                        NEW
                      </span>
                    )}
                    {item.badge && !item.isNew && (
                      <span className={cn(
                        'text-xs px-1.5 py-0.5 rounded-full font-medium',
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-blue-100 text-blue-700'
                      )}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className={cn(
                    'text-xs truncate',
                    isActive ? 'text-white/80' : 'text-gray-500'
                  )}>
                    {item.description}
                  </p>
                </div>
              </div>
              
              <ChevronRight className={cn(
                'w-4 h-4 transition-transform',
                isActive 
                  ? 'text-white rotate-90' 
                  : 'text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5'
              )} />
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-8 translate-x-8"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-900">AI Powered</span>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Unlock advanced AI features and automation
            </p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium py-2 px-3 rounded-lg hover:shadow-md transition-all duration-200">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernSidebar;