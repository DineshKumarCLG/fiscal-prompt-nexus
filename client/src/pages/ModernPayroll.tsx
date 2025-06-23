import React, { useState } from 'react';
import { ModernDashboardLayout } from '@/components/layout/ModernDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  DollarSign, 
  FileText, 
  Clock,
  Calculator,
  Download,
  Plus,
  Edit,
  Eye,
  Mail,
  Briefcase,
  CreditCard,
  TrendingUp
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ModernPayroll: React.FC = () => {
  const [employees, setEmployees] = useState([
    { 
      id: 1, 
      name: 'Rahul Sharma', 
      role: 'Frontend Developer', 
      salary: 80000, 
      pf: 9600, 
      tds: 8000, 
      status: 'Active',
      email: 'rahul@company.com',
      joinDate: '2023-06-15',
      netSalary: 62400
    },
    { 
      id: 2, 
      name: 'Priya Patel', 
      role: 'Backend Developer', 
      salary: 90000, 
      pf: 10800, 
      tds: 10000, 
      status: 'Active',
      email: 'priya@company.com',
      joinDate: '2023-04-10',
      netSalary: 69200
    },
    { 
      id: 3, 
      name: 'Amit Kumar', 
      role: 'UI/UX Designer', 
      salary: 65000, 
      pf: 7800, 
      tds: 5000, 
      status: 'Active',
      email: 'amit@company.com',
      joinDate: '2023-08-20',
      netSalary: 52200
    },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    salary: '',
    email: '',
  });

  const stats = [
    { 
      title: 'Total Employees', 
      value: '8', 
      change: '2 new this month', 
      icon: Users, 
      color: 'from-blue-500 to-purple-600' 
    },
    { 
      title: 'Monthly Payroll', 
      value: '₹6,40,000', 
      change: 'Gross salaries', 
      icon: DollarSign, 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      title: 'TDS Deducted', 
      value: '₹64,000', 
      change: 'This month', 
      icon: FileText, 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      title: 'Pending Slips', 
      value: '0', 
      change: 'All processed', 
      icon: Clock, 
      color: 'from-purple-500 to-pink-600' 
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'On Leave': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.role && newEmployee.salary && newEmployee.email) {
      const employee = {
        id: employees.length + 1,
        name: newEmployee.name,
        role: newEmployee.role,
        salary: parseFloat(newEmployee.salary),
        pf: parseFloat(newEmployee.salary) * 0.12,
        tds: parseFloat(newEmployee.salary) * 0.1,
        status: 'Active',
        email: newEmployee.email,
        joinDate: new Date().toISOString().split('T')[0],
        netSalary: parseFloat(newEmployee.salary) * 0.78
      };
      setEmployees([...employees, employee]);
      setNewEmployee({ name: '', role: '', salary: '', email: '' });
    }
  };

  return (
    <ModernDashboardLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl p-8 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-200/30 to-purple-200/30 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-8 h-8 text-purple-600" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Payroll Management
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Complete payroll management with salary calculations, tax deductions, and automated payslips
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button className="btn-success">
                <Calculator className="w-4 h-4 mr-2" />
                Run Payroll
              </Button>
              <Button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Employee
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
      <Tabs defaultValue="employees" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-1/2">
          <TabsTrigger value="employees" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Employees
          </TabsTrigger>
          <TabsTrigger value="payroll" className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Payroll Run
          </TabsTrigger>
          <TabsTrigger value="payslips" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Payslips
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="employees">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Employee List */}
            <div className="lg:col-span-2">
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle>Employee Directory</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Gross Salary</TableHead>
                        <TableHead>Net Salary</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {employees.map((employee) => (
                        <TableRow key={employee.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                                {employee.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{employee.name}</div>
                                <div className="text-sm text-gray-500">{employee.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-gray-400" />
                              {employee.role}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">₹{employee.salary.toLocaleString()}</TableCell>
                          <TableCell className="font-semibold text-green-600">₹{employee.netSalary.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(employee.status)}>
                              {employee.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Mail className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Add Employee Form */}
            <div>
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5 text-blue-600" />
                    Add New Employee
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="form-label">Full Name</Label>
                    <Input 
                      className="form-input"
                      placeholder="Enter full name"
                      value={newEmployee.name}
                      onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label className="form-label">Role/Position</Label>
                    <Input 
                      className="form-input"
                      placeholder="e.g., Software Developer"
                      value={newEmployee.role}
                      onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label className="form-label">Email Address</Label>
                    <Input 
                      className="form-input"
                      type="email"
                      placeholder="employee@company.com"
                      value={newEmployee.email}
                      onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label className="form-label">Monthly Salary (₹)</Label>
                    <Input 
                      className="form-input"
                      type="number"
                      placeholder="0"
                      value={newEmployee.salary}
                      onChange={(e) => setNewEmployee({...newEmployee, salary: e.target.value})}
                    />
                  </div>

                  <Button onClick={handleAddEmployee} className="btn-primary w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Employee
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="payroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-green-600" />
                  Monthly Payroll Run
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹6,40,000</div>
                  <p className="text-gray-600">Total monthly payroll</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Gross Salaries</span>
                    <span className="font-semibold">₹6,40,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">PF Deduction (12%)</span>
                    <span className="font-semibold text-red-600">-₹76,800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">TDS Deduction</span>
                    <span className="font-semibold text-red-600">-₹64,000</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center font-bold">
                      <span>Net Payable</span>
                      <span className="text-green-600">₹4,99,200</span>
                    </div>
                  </div>
                </div>

                <Button className="btn-success w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  Process Payroll
                </Button>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Payroll Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: 'Employees Processed', value: '8/8', color: 'text-green-600' },
                    { label: 'Payslips Generated', value: '8', color: 'text-blue-600' },
                    { label: 'Bank Transfers', value: 'Pending', color: 'text-yellow-600' },
                    { label: 'Compliance Reports', value: 'Ready', color: 'text-green-600' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{item.label}</span>
                      <span className={`font-semibold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Initiate Bank Transfers
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Payslips via Email
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Download Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payslips">
          <Card className="card-modern">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Payslip Management</CardTitle>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Email All
                  </Button>
                  <Button className="btn-primary">
                    <Download className="w-4 h-4 mr-2" />
                    Bulk Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {employees.map((employee, index) => (
                  <div key={employee.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                        {employee.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{employee.name}</h4>
                        <p className="text-sm text-gray-500">{employee.role}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gross:</span>
                        <span className="font-semibold">₹{employee.salary.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Net:</span>
                        <span className="font-semibold text-green-600">₹{employee.netSalary.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="w-3 h-3 mr-1" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mail className="w-3 h-3 mr-1" />
                        Send
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Monthly Payroll Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600">Payroll trend chart would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Statutory Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  PF Contribution Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  TDS Deduction Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  ESI Contribution Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Form 16 Generation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Annual Salary Statement
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </ModernDashboardLayout>
  );
};

export default ModernPayroll;