import React, { useState } from 'react';
import { ModernDashboardLayout } from '@/components/layout/ModernDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  Receipt, 
  Clock, 
  CheckCircle, 
  Camera,
  Zap,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  FileText,
  Calendar,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ModernExpenses: React.FC = () => {
  const [expenses, setExpenses] = useState([
    { 
      id: 1, 
      date: '2024-01-15', 
      vendor: 'AWS Services', 
      amount: 8500, 
      category: 'Infrastructure', 
      status: 'Approved', 
      gst: 1530,
      description: 'Monthly cloud hosting services',
      receipt: true
    },
    { 
      id: 2, 
      date: '2024-01-14', 
      vendor: 'Uber', 
      amount: 450, 
      category: 'Travel', 
      status: 'Pending', 
      gst: 81,
      description: 'Client meeting transportation',
      receipt: true
    },
    { 
      id: 3, 
      date: '2024-01-13', 
      vendor: 'Swiggy', 
      amount: 1200, 
      category: 'Office Expense', 
      status: 'Approved', 
      gst: 216,
      description: 'Team lunch during sprint planning',
      receipt: true
    },
  ]);

  const [newExpense, setNewExpense] = useState({
    vendor: '',
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  const stats = [
    { 
      title: 'This Month', 
      value: '₹45,670', 
      change: '+12% from last month', 
      icon: Receipt, 
      color: 'from-blue-500 to-purple-600' 
    },
    { 
      title: 'Pending Approval', 
      value: '8', 
      change: '₹12,450 total', 
      icon: Clock, 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      title: 'GST Credit', 
      value: '₹8,220', 
      change: 'Available ITC', 
      icon: CheckCircle, 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      title: 'Reimbursements', 
      value: '₹5,430', 
      change: 'Due to employees', 
      icon: DollarSign, 
      color: 'from-purple-500 to-pink-600' 
    }
  ];

  const categories = [
    'Infrastructure', 'Travel', 'Office Expense', 'Marketing', 'Software', 'Legal', 'Utilities', 'Other'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSubmitExpense = () => {
    if (newExpense.vendor && newExpense.amount && newExpense.category) {
      const expense = {
        id: expenses.length + 1,
        date: newExpense.date,
        vendor: newExpense.vendor,
        amount: parseFloat(newExpense.amount),
        category: newExpense.category,
        status: 'Pending',
        gst: parseFloat(newExpense.amount) * 0.18,
        description: newExpense.description,
        receipt: false
      };
      setExpenses([expense, ...expenses]);
      setNewExpense({
        vendor: '',
        amount: '',
        category: '',
        description: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  return (
    <ModernDashboardLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-3xl p-8 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-200/30 to-orange-200/30 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Receipt className="w-8 h-8 text-orange-600" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Expense Management
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Track, approve, and categorize all business expenses with AI-powered receipt scanning
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button className="btn-success">
                <Camera className="w-4 h-4 mr-2" />
                Scan Receipt
              </Button>
              <Button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Expense
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
      <Tabs defaultValue="submit" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-1/2">
          <TabsTrigger value="submit" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Submit
          </TabsTrigger>
          <TabsTrigger value="expenses" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            All Expenses
          </TabsTrigger>
          <TabsTrigger value="recurring" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Recurring
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="submit">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Submit Form */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  Submit New Expense
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="form-label">Vendor Name</Label>
                    <Input 
                      className="form-input"
                      placeholder="e.g., AWS, Uber, Restaurant"
                      value={newExpense.vendor}
                      onChange={(e) => setNewExpense({...newExpense, vendor: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label className="form-label">Amount (₹)</Label>
                    <Input 
                      className="form-input"
                      type="number"
                      placeholder="0.00"
                      value={newExpense.amount}
                      onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="form-label">Category</Label>
                    <select 
                      className="form-input"
                      value={newExpense.category}
                      onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                    >
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label className="form-label">Date</Label>
                    <Input 
                      className="form-input"
                      type="date"
                      value={newExpense.date}
                      onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label className="form-label">Description</Label>
                  <textarea 
                    className="form-input min-h-[80px] resize-none"
                    placeholder="Brief description of the expense"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                  />
                </div>

                <Button onClick={handleSubmitExpense} className="btn-primary w-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit Expense
                </Button>
              </CardContent>
            </Card>

            {/* Receipt Upload */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-blue-600" />
                  Upload Receipt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Smart Receipt Scanning</h3>
                    <p className="text-gray-600 mb-4">AI will automatically extract vendor, amount, and date</p>
                  </div>
                  <div className="space-y-3">
                    <Button className="btn-primary w-full">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Image
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Camera className="w-4 h-4 mr-2" />
                      Take Photo
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">Supports JPG, PNG, PDF</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expenses">
          <Card className="card-modern">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Expenses</CardTitle>
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search expenses..."
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>GST</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenses.map((expense) => (
                    <TableRow key={expense.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{expense.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Receipt className="w-4 h-4 text-gray-400" />
                          {expense.vendor}
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{expense.description}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{expense.category}</Badge>
                      </TableCell>
                      <TableCell className="font-semibold">₹{expense.amount.toLocaleString()}</TableCell>
                      <TableCell className="text-green-600">₹{expense.gst.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(expense.status)}>
                          {expense.status}
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
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recurring">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle>Recurring Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Clock className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Recurring Expenses</h3>
                <p className="text-gray-600 mb-4">Set up recurring expenses for regular payments</p>
                <Button className="btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Recurring Expense
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Monthly Spending Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600">Chart visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Category Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categories.slice(0, 5).map((category, index) => {
                    const percentage = Math.random() * 40 + 10;
                    return (
                      <div key={category} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{category}</span>
                          <span className="text-gray-600">{percentage.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </ModernDashboardLayout>
  );
};

export default ModernExpenses;