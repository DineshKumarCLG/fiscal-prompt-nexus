import React, { useState } from 'react';
import { ModernDashboardLayout } from '@/components/layout/ModernDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Banknote,
  CreditCard,
  TrendingUp,
  RefreshCw,
  Link,
  Building,
  Calendar,
  Filter,
  Search,
  Plus,
  Eye,
  Zap
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ModernBankSync: React.FC = () => {
  const [transactions, setTransactions] = useState([
    { 
      id: 1, 
      date: '2024-01-15', 
      description: 'UPI-FLIPKART-12345', 
      amount: -25000, 
      category: 'Unmatched', 
      type: 'Debit',
      account: 'HDFC Current',
      reference: 'TXN123456789'
    },
    { 
      id: 2, 
      date: '2024-01-14', 
      description: 'SALARY CREDIT', 
      amount: 150000, 
      category: 'Salary', 
      type: 'Credit',
      account: 'HDFC Current',
      reference: 'SAL001234'
    },
    { 
      id: 3, 
      date: '2024-01-13', 
      description: 'AWS SERVICES', 
      amount: -8500, 
      category: 'Infrastructure', 
      type: 'Debit',
      account: 'HDFC Current',
      reference: 'AWS789012'
    },
  ]);

  const accounts = [
    {
      id: 1,
      name: 'HDFC Current Account',
      number: '****4567',
      balance: 847500,
      type: 'Current',
      lastSync: '2 mins ago',
      status: 'Connected'
    },
    {
      id: 2,
      name: 'ICICI Savings',
      number: '****8901',
      balance: 234000,
      type: 'Savings',
      lastSync: '1 hour ago',
      status: 'Connected'
    },
    {
      id: 3,
      name: 'Axis Business Account',
      number: '****2345',
      balance: 156000,
      type: 'Current',
      lastSync: 'Not synced',
      status: 'Pending'
    }
  ];

  const stats = [
    { 
      title: 'Total Balance', 
      value: '₹12,37,500', 
      change: '+₹45,000 this week', 
      icon: Banknote, 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      title: 'Matched Transactions', 
      value: '247', 
      change: '94% reconciliation rate', 
      icon: CheckCircle, 
      color: 'from-blue-500 to-purple-600' 
    },
    { 
      title: 'Pending Review', 
      value: '8', 
      change: 'Requires manual review', 
      icon: AlertCircle, 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      title: 'This Month', 
      value: '₹2.4L', 
      change: 'Total transactions', 
      icon: TrendingUp, 
      color: 'from-purple-500 to-pink-600' 
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTransactionColor = (type: string) => {
    return type === 'Credit' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <ModernDashboardLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl p-8 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-200/30 to-blue-200/30 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CreditCard className="w-8 h-8 text-blue-600" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Bank Sync & Reconciliation
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Real-time bank synchronization with automated transaction matching and reconciliation
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button className="btn-success">
                <Link className="w-4 h-4 mr-2" />
                Connect Bank
              </Button>
              <Button className="btn-primary">
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync All
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
      <Tabs defaultValue="accounts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-1/2">
          <TabsTrigger value="accounts" className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            Accounts
          </TabsTrigger>
          <TabsTrigger value="transactions" className="flex items-center gap-2">
            <Banknote className="w-4 h-4" />
            Transactions
          </TabsTrigger>
          <TabsTrigger value="reconciliation" className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Reconciliation
          </TabsTrigger>
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload
          </TabsTrigger>
        </TabsList>

        <TabsContent value="accounts">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {accounts.map((account, index) => (
              <Card key={account.id} className="card-modern hover-lift animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{account.name}</h3>
                        <p className="text-sm text-gray-500">{account.number} • {account.type}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(account.status)}>
                      {account.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">₹{account.balance.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Current Balance</div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Last Sync:</span>
                    <span className="font-medium">{account.lastSync}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Sync
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Add New Account Card */}
            <Card className="card-modern border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors">
              <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Connect New Bank</h3>
                <p className="text-gray-600 mb-4">Add another bank account for automatic synchronization</p>
                <Button className="btn-primary">
                  <Link className="w-4 h-4 mr-2" />
                  Connect Bank
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions">
          <Card className="card-modern">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Transactions</CardTitle>
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search transactions..."
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{transaction.date}</TableCell>
                      <TableCell className="max-w-xs">
                        <div className="truncate">{transaction.description}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-gray-400" />
                          {transaction.account}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">{transaction.reference}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{transaction.category}</Badge>
                      </TableCell>
                      <TableCell className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                        {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge className={transaction.category === 'Unmatched' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}>
                          {transaction.category === 'Unmatched' ? 'Pending' : 'Matched'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reconciliation">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  Auto Reconciliation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Matching</h3>
                  <p className="text-gray-600 mb-4">Automatically match transactions with invoices and expenses</p>
                  <Button className="btn-primary">
                    <Zap className="w-4 h-4 mr-2" />
                    Run Auto Match
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Reconciliation Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Matched</span>
                    </div>
                    <span className="font-bold text-green-600">247 transactions</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                      <span className="font-medium">Pending Review</span>
                    </div>
                    <span className="font-bold text-yellow-600">8 transactions</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">This Month</span>
                    </div>
                    <span className="font-bold text-blue-600">94% match rate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="upload">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle>Upload Bank Statements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Bank Statements</h3>
                <p className="text-gray-600 mb-6">Support for PDF, CSV, and Excel files from all major banks</p>
                <div className="space-y-4">
                  <Button className="btn-primary">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Files
                  </Button>
                  <p className="text-sm text-gray-500">Supports PDF, CSV, XLSX formats • Max 10MB per file</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ModernDashboardLayout>
  );
};

export default ModernBankSync;