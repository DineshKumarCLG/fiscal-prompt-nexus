import React from 'react';
import { ModernDashboardLayout } from '@/components/layout/ModernDashboardLayout';
import { ModernStatsCard } from '@/components/dashboard/ModernStatsCard';
import { ModernModuleCard } from '@/components/dashboard/ModernModuleCard';
import { FirebaseStats } from '@/components/dashboard/FirebaseStats';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  FileText, 
  AlertTriangle,
  Inbox,
  Book,
  Plus,
  Users,
  Calendar,
  PieChart,
  Zap,
  Clock,
  CheckCircle,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const ModernDashboard: React.FC = () => {
  const modules = [
    {
      title: 'AI Assistant',
      description: 'Ask AI to generate documents, analyze data, and automate complex financial tasks',
      icon: Inbox,
      href: '/prompt',
      stats: '24 requests today',
      gradient: 'from-purple-500 to-pink-600',
      isPopular: true,
      features: ['Natural Language', 'Smart Analysis', 'Auto-generation']
    },
    {
      title: 'Smart Documents',
      description: 'AI-powered document management with automatic categorization and OCR',
      icon: FileText,
      href: '/documents',
      stats: '12 pending',
      gradient: 'from-green-500 to-emerald-600',
      features: ['OCR Recognition', 'Auto-categorize', 'Cloud Storage']
    },
    {
      title: 'Bank Integration',
      description: 'Real-time bank sync with automated transaction matching and reconciliation',
      icon: Book,
      href: '/bank',
      stats: '3 accounts linked',
      gradient: 'from-blue-500 to-cyan-600',
      features: ['Real-time Sync', 'Auto-match', 'Reconciliation']
    },
    {
      title: 'Expense Tracker',
      description: 'Receipt scanning with AI categorization and automated approval workflows',
      icon: Plus,
      href: '/expenses',
      stats: '₹45K this month',
      gradient: 'from-orange-500 to-red-500',
      features: ['Receipt OCR', 'Auto-categorize', 'Workflow']
    },
    {
      title: 'GST & Compliance',
      description: 'Automated tax filing with compliance tracking and deadline management',
      icon: Calendar,
      href: '/gst',
      stats: 'GSTR-3B due in 5 days',
      gradient: 'from-red-500 to-pink-600',
      isNew: true,
      features: ['Auto-filing', 'Deadline Alerts', 'Compliance']
    },
    {
      title: 'Payroll System',
      description: 'Complete payroll management with salary calculations and tax deductions',
      icon: Users,
      href: '/payroll',
      stats: '8 employees',
      gradient: 'from-cyan-500 to-blue-500',
      features: ['Auto-calculate', 'Tax Deduction', 'Payslips']
    },
    {
      title: 'Investor Reports',
      description: 'Automated investor reporting with fund utilization and performance metrics',
      icon: PieChart,
      href: '/reports',
      stats: '₹9Cr funding',
      gradient: 'from-indigo-500 to-purple-600',
      features: ['Auto-reports', 'Metrics', 'Transparency']
    },
    {
      title: 'Settings',
      description: 'Configure your company profile, team access, and system preferences',
      icon: Zap,
      href: '/settings',
      stats: 'Setup pending',
      gradient: 'from-gray-500 to-gray-700',
      features: ['Company Setup', 'Team Access', 'Preferences']
    }
  ];

  const quickActions = [
    { label: 'Generate Invoice', action: () => {}, variant: 'primary' },
    { label: 'Upload Receipt', action: () => {}, variant: 'success' },
    { label: 'Add Expense', action: () => {}, variant: 'info' },
    { label: 'Bank Sync', action: () => {}, variant: 'warning' }
  ];

  const recentActivity = [
    { title: 'Invoice #INV-001 created', time: '2 mins ago', type: 'success' },
    { title: 'Expense approved: AWS Services', time: '15 mins ago', type: 'info' },
    { title: 'Bank sync completed', time: '1 hour ago', type: 'success' },
    { title: 'GST filing reminder', time: '2 hours ago', type: 'warning' }
  ];

  return (
    <ModernDashboardLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 mb-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-200/30 to-blue-200/30 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Financial Command Center
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl">
            Your AI-powered CFO assistant for automated financial management, compliance, and growth insights
          </p>
          
          <div className="flex flex-wrap gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                onClick={action.action}
                className={`btn-${action.variant} animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Financial Overview</h2>
            <p className="text-gray-600">Real-time insights from your Firebase database</p>
          </div>
          <Button variant="outline" className="hover-lift">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </div>

        <FirebaseStats />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <ModernStatsCard
            title="Monthly Revenue"
            value="₹12.5L"
            change="12% from last month"
            changeType="positive"
            icon={TrendingUp}
            variant="success"
            trend={[12, 15, 18, 22, 25, 30, 28, 32]}
          />
          <ModernStatsCard
            title="Cash Balance"
            value="₹8.2L"
            change="₹50K from last week"
            changeType="negative"
            icon={DollarSign}
            variant="info"
            trend={[25, 22, 20, 18, 15, 12, 14, 16]}
          />
          <ModernStatsCard
            title="Pending Invoices"
            value="₹3.4L"
            change="12 invoices overdue"
            changeType="neutral"
            icon={FileText}
            variant="warning"
            trend={[8, 12, 15, 10, 14, 16, 12, 18]}
          />
          <ModernStatsCard
            title="Monthly Burn"
            value="₹2.1L"
            change="18 months runway"
            changeType="positive"
            icon={AlertTriangle}
            variant="primary"
            trend={[20, 18, 22, 19, 21, 17, 16, 15]}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Modules Grid */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">AI-Powered Modules</h2>
              <p className="text-gray-600">Streamline your financial operations</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <ModernModuleCard
                key={index}
                {...module}
                features={module.features}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card className="card-modern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-yellow-500' :
                    activity.type === 'info' ? 'bg-blue-500' : 'bg-gray-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="card-modern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Today's Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Expenses Processed</span>
                  <span className="font-semibold">8/12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Invoices Sent</span>
                  <span className="font-semibold">5/6</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '83%' }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Bank Reconciliation</span>
                  <span className="font-semibold">Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ModernDashboardLayout>
  );
};

export default ModernDashboard;