import React, { useState } from 'react';
import { ModernDashboardLayout } from '@/components/layout/ModernDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Shield,
  TrendingUp,
  Clock,
  Download,
  Upload,
  Building,
  Calculator,
  Zap,
  Bell
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ModernGSTCompliance: React.FC = () => {
  const [filings, setFilings] = useState([
    { 
      id: 1,
      type: 'GSTR-1', 
      period: 'January 2024', 
      dueDate: '2024-02-11', 
      status: 'Filed', 
      amount: '₹45,000',
      filed: '2024-02-10',
      arn: 'AA1234567890123'
    },
    { 
      id: 2,
      type: 'GSTR-3B', 
      period: 'January 2024', 
      dueDate: '2024-02-20', 
      status: 'Pending', 
      amount: '₹12,000',
      filed: null,
      arn: null
    },
    { 
      id: 3,
      type: 'GSTR-1', 
      period: 'December 2023', 
      dueDate: '2024-01-11', 
      status: 'Filed', 
      amount: '₹38,500',
      filed: '2024-01-09',
      arn: 'AA0987654321098'
    },
  ]);

  const [compliance, setCompliance] = useState([
    { 
      id: 1,
      task: 'GSTR-3B Filing - Feb 2024', 
      dueDate: '2024-03-20', 
      status: 'Upcoming',
      priority: 'High',
      daysLeft: 15
    },
    { 
      id: 2,
      task: 'Annual Return Filing', 
      dueDate: '2024-12-31', 
      status: 'Pending',
      priority: 'Medium',
      daysLeft: 245
    },
    { 
      id: 3,
      task: 'TDS Return - Q4 2023', 
      dueDate: '2024-01-31', 
      status: 'Completed',
      priority: 'Low',
      daysLeft: 0
    },
  ]);

  const stats = [
    { 
      title: 'GST Collected', 
      value: '₹1,24,500', 
      change: 'This quarter', 
      icon: TrendingUp, 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      title: 'Input Tax Credit', 
      value: '₹45,200', 
      change: 'Available to use', 
      icon: CheckCircle, 
      color: 'from-blue-500 to-purple-600' 
    },
    { 
      title: 'Pending Filings', 
      value: '2', 
      change: 'Due this month', 
      icon: AlertTriangle, 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      title: 'Compliance Score', 
      value: '98%', 
      change: 'On-time filings', 
      icon: Shield, 
      color: 'from-purple-500 to-pink-600' 
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Filed': case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': case 'Upcoming': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ModernDashboardLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 rounded-3xl p-8 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-200/30 to-orange-200/30 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-200/30 to-red-200/30 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-red-600" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  GST & Compliance
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Automated tax filing with compliance tracking and deadline management
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button className="btn-warning">
                <Bell className="w-4 h-4 mr-2" />
                Set Reminders
              </Button>
              <Button className="btn-primary">
                <Zap className="w-4 h-4 mr-2" />
                Auto File
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stats-card bg-gradient-to-br ${stat.color} text-white animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/20 -translate-y-10 translate-x-10"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white/80 text-sm font-medium mb-1">{stat.title}</h3>
                  <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                  <span className="text-white/70 text-xs">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="gst" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-1/2">
          <TabsTrigger value="gst" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            GST Returns
          </TabsTrigger>
          <TabsTrigger value="compliance" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Compliance
          </TabsTrigger>
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            Documents
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gst">
          <Card className="card-modern">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>GST Return Status</CardTitle>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button className="btn-primary">
                    <FileText className="w-4 h-4 mr-2" />
                    New Filing
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Return Type</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Tax Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>ARN</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filings.map((filing) => (
                    <TableRow key={filing.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          {filing.type}
                        </div>
                      </TableCell>
                      <TableCell>{filing.period}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {filing.dueDate}
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold">{filing.amount}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(filing.status)}>
                          {filing.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">
                        {filing.arn || 'Not available'}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {filing.status === 'Pending' ? (
                            <Button size="sm" className="btn-primary">
                              <Upload className="w-4 h-4 mr-1" />
                              File
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {compliance.filter(item => item.status !== 'Completed').map((item, index) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{item.task}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Due: {item.dueDate}
                        </span>
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{item.daysLeft}</div>
                      <div className="text-xs text-gray-500">days left</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Compliance Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                  <p className="text-gray-600">Excellent compliance rating</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">On-time Filings</span>
                    <span className="font-semibold">18/19</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Accuracy Score</span>
                    <span className="font-semibold">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Penalty Avoidance</span>
                    <span className="font-semibold">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calculator">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  GST Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="form-label">Amount (Excluding GST)</label>
                  <input type="number" className="form-input" placeholder="Enter amount" />
                </div>
                
                <div>
                  <label className="form-label">GST Rate</label>
                  <select className="form-input">
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18" selected>18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <Button className="btn-primary w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate GST
                </Button>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Amount (Excl. GST):</span>
                      <span className="font-semibold">₹0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST Amount:</span>
                      <span className="font-semibold">₹0.00</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-medium">Total Amount:</span>
                      <span className="font-bold">₹0.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate GSTR-1
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate GSTR-3B
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download GST Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Filing Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  Set Deadline Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle>GST Documents & Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'GST Registration Certificate', status: 'Valid', expiry: '2025-12-31' },
                  { name: 'GSTR-1 - Jan 2024', status: 'Filed', expiry: null },
                  { name: 'GSTR-3B - Jan 2024', status: 'Pending', expiry: '2024-02-20' },
                  { name: 'Annual Return 2023-24', status: 'Draft', expiry: '2024-12-31' },
                  { name: 'Input Tax Credit Statement', status: 'Current', expiry: null },
                  { name: 'GST Audit Report', status: 'Required', expiry: '2024-09-30' }
                ].map((doc, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-1" />
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">{doc.name}</h4>
                    {doc.expiry && (
                      <p className="text-sm text-gray-500 mb-3">
                        {doc.status === 'Pending' ? 'Due:' : 'Valid until:'} {doc.expiry}
                      </p>
                    )}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                      {doc.status === 'Pending' || doc.status === 'Draft' ? (
                        <Button size="sm" className="btn-primary">
                          <Upload className="w-3 h-3 mr-1" />
                          {doc.status === 'Pending' ? 'File' : 'Complete'}
                        </Button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ModernDashboardLayout>
  );
};

export default ModernGSTCompliance;