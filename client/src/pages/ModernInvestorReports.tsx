import React from 'react';
import { ModernDashboardLayout } from '@/components/layout/ModernDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Download,
  PieChart,
  BarChart3,
  FileText,
  Calendar,
  Target,
  Briefcase,
  Building,
  Award
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ModernInvestorReports: React.FC = () => {
  const fundUtilization = [
    { category: 'Engineering & Product', allocated: 40, spent: 35, percentage: '87.5%', status: 'On Track' },
    { category: 'Marketing & Sales', allocated: 25, spent: 18, percentage: '72%', status: 'Under Budget' },
    { category: 'Operations', allocated: 20, spent: 22, percentage: '110%', status: 'Over Budget' },
    { category: 'Infrastructure', allocated: 15, spent: 12, percentage: '80%', status: 'On Track' },
  ];

  const investors = [
    { 
      name: 'Sequoia Capital', 
      investment: '₹5 Cr', 
      equity: '20%', 
      boardSeat: 'Yes',
      type: 'Lead Investor',
      round: 'Series A'
    },
    { 
      name: 'Accel Partners', 
      investment: '₹3 Cr', 
      equity: '12%', 
      boardSeat: 'No',
      type: 'Co-Investor',
      round: 'Series A'
    },
    { 
      name: 'Individual Angels', 
      investment: '₹1 Cr', 
      equity: '8%', 
      boardSeat: 'No',
      type: 'Angel',
      round: 'Seed'
    },
  ];

  const metrics = [
    { 
      title: 'Total Funding', 
      value: '₹9 Cr', 
      change: 'Raised to date', 
      icon: DollarSign, 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      title: 'Runway', 
      value: '18 months', 
      change: 'At current burn rate', 
      icon: TrendingUp, 
      color: 'from-blue-500 to-purple-600' 
    },
    { 
      title: 'Monthly Burn', 
      value: '₹35 L', 
      change: 'Average monthly', 
      icon: Target, 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      title: 'Valuation', 
      value: '₹45 Cr', 
      change: 'Post-money', 
      icon: Users, 
      color: 'from-purple-500 to-pink-600' 
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Track': return 'bg-green-100 text-green-800';
      case 'Under Budget': return 'bg-blue-100 text-blue-800';
      case 'Over Budget': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Lead Investor': return 'bg-purple-100 text-purple-800';
      case 'Co-Investor': return 'bg-blue-100 text-blue-800';
      case 'Angel': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ModernDashboardLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-indigo-200/30 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <PieChart className="w-8 h-8 text-indigo-600" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Investor Reports
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Maintain transparency with automated investor updates and comprehensive board reporting
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button className="btn-success">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button className="btn-primary">
                <FileText className="w-4 h-4 mr-2" />
                Generate MIS
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`stats-card bg-gradient-to-br ${metric.color} text-white animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/20 -translate-y-10 translate-x-10"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <metric.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white/80 text-sm font-medium mb-1">{metric.title}</h3>
                  <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
                  <span className="text-white/70 text-xs">{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="utilization" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-1/2">
          <TabsTrigger value="utilization" className="flex items-center gap-2">
            <PieChart className="w-4 h-4" />
            Fund Usage
          </TabsTrigger>
          <TabsTrigger value="cap-table" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Cap Table
          </TabsTrigger>
          <TabsTrigger value="metrics" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Metrics
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="utilization">
          <Card className="card-modern">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Fund Utilization Report</CardTitle>
                <Button className="btn-success">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Allocated (₹L)</TableHead>
                    <TableHead>Spent (₹L)</TableHead>
                    <TableHead>Utilization</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fundUtilization.map((fund, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-gray-400" />
                          {fund.category}
                        </div>
                      </TableCell>
                      <TableCell>₹{fund.allocated}L</TableCell>
                      <TableCell>₹{fund.spent}L</TableCell>
                      <TableCell className="font-semibold">{fund.percentage}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(fund.status)}>
                          {fund.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              fund.status === 'Over Budget' ? 'bg-red-500' :
                              fund.status === 'Under Budget' ? 'bg-blue-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: `${Math.min(parseFloat(fund.percentage), 100)}%` }}
                          ></div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cap-table">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Investor Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Investor</TableHead>
                      <TableHead>Investment</TableHead>
                      <TableHead>Equity</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investors.map((investor, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                              {investor.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{investor.name}</div>
                              <div className="text-sm text-gray-500">{investor.round} Round</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">{investor.investment}</TableCell>
                        <TableCell className="font-semibold">{investor.equity}</TableCell>
                        <TableCell>
                          <Badge className={getTypeColor(investor.type)}>
                            {investor.type}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Ownership Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-6 bg-indigo-50 rounded-lg">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">₹45 Cr</div>
                    <p className="text-gray-600">Current Valuation</p>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: 'Founders', percentage: 60, color: 'bg-blue-500' },
                      { label: 'Sequoia Capital', percentage: 20, color: 'bg-purple-500' },
                      { label: 'Accel Partners', percentage: 12, color: 'bg-green-500' },
                      { label: 'Angels', percentage: 8, color: 'bg-orange-500' }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-gray-600">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="metrics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { metric: 'Monthly Recurring Revenue', value: '₹12.5L', growth: '+18%', target: '₹15L' },
                    { metric: 'Customer Acquisition Cost', value: '₹2,400', growth: '-12%', target: '₹2,000' },
                    { metric: 'Lifetime Value', value: '₹45,000', growth: '+25%', target: '₹50,000' },
                    { metric: 'Gross Margin', value: '78%', growth: '+3%', target: '80%' }
                  ].map((kpi, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-900">{kpi.metric}</h4>
                        <Badge variant="outline">{kpi.growth}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gray-900">{kpi.value}</span>
                        <span className="text-sm text-gray-500">Target: {kpi.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Financial Projections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600">Financial projection charts would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Monthly Reports
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'January 2024 MIS Report', date: '2024-02-01', status: 'Sent' },
                  { name: 'December 2023 MIS Report', date: '2024-01-01', status: 'Sent' },
                  { name: 'November 2023 MIS Report', date: '2023-12-01', status: 'Sent' }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{report.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {report.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">{report.status}</Badge>
                      <Button variant="outline" size="sm">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Board Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Board Meeting Presentation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Financial Statements
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Cap Table Summary
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Fund Utilization Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Compliance Certificates
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </ModernDashboardLayout>
  );
};

export default ModernInvestorReports;