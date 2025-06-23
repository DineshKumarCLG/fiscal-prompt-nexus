import React, { useState } from 'react';
import { ModernDashboardLayout } from '@/components/layout/ModernDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { 
  FileText, 
  Plus, 
  Search, 
  Upload, 
  FolderPlus,
  Filter,
  Users,
  Building,
  FileSpreadsheet,
  Shield,
  TrendingUp,
  Banknote,
  Calendar,
  Eye,
  Download,
  Share,
  MoreHorizontal,
  Sparkles,
  Zap
} from 'lucide-react';
import { Document, DocumentFilters, Collection } from '@/types/documents';

const ModernDocuments: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<DocumentFilters>({});
  const [showUpload, setShowUpload] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  const [documents] = useState<Document[]>([
    {
      id: '1',
      title: 'Invoice #INV-2024-001',
      type: 'Invoice',
      category: 'invoices',
      entity: 'Flipkart India',
      issueDate: '2024-01-15',
      amount: 50000,
      status: 'sent',
      tags: ['GST', 'E-commerce', 'Q1-2024'],
      lastModified: '2024-01-15',
      createdBy: 'Admin',
      size: '1.2 MB'
    },
    {
      id: '2',
      title: 'P&L Statement Q1 2024',
      type: 'Financial Report',
      category: 'financial-reports',
      issueDate: '2024-01-10',
      status: 'draft',
      tags: ['Financial', 'Quarterly'],
      lastModified: '2024-01-10',
      createdBy: 'Finance Team',
      size: '2.1 MB'
    },
    {
      id: '3',
      title: 'GSTR-3B January 2024',
      type: 'Tax Filing',
      category: 'tax-filings',
      issueDate: '2024-01-08',
      status: 'filed',
      tags: ['GST', 'Monthly', 'Compliance'],
      lastModified: '2024-01-08',
      createdBy: 'Tax Team',
      size: '856 KB'
    }
  ]);

  const stats = [
    { title: 'Total Documents', value: '247', change: '+12 this week', icon: FileText, color: 'from-blue-500 to-purple-600' },
    { title: 'Pending Review', value: '8', change: '3 urgent', icon: TrendingUp, color: 'from-orange-500 to-red-500' },
    { title: 'Storage Used', value: '2.4 GB', change: '15% of limit', icon: FolderPlus, color: 'from-green-500 to-emerald-600' },
    { title: 'AI Processed', value: '156', change: 'This month', icon: Sparkles, color: 'from-purple-500 to-pink-600' }
  ];

  const categories = [
    { name: 'All Documents', count: 247, icon: FileText, active: activeTab === 'all' },
    { name: 'Invoices', count: 89, icon: Banknote, active: activeTab === 'invoices' },
    { name: 'Reports', count: 45, icon: FileSpreadsheet, active: activeTab === 'reports' },
    { name: 'Tax Filings', count: 23, icon: Shield, active: activeTab === 'tax' },
    { name: 'Contracts', count: 67, icon: Users, active: activeTab === 'contracts' },
    { name: 'Compliance', count: 23, icon: Building, active: activeTab === 'compliance' }
  ];

  const quickActions = [
    { label: 'Upload Document', icon: Upload, action: () => setShowUpload(true), variant: 'primary' },
    { label: 'Create Invoice', icon: Banknote, action: () => {}, variant: 'success' },
    { label: 'Scan Receipt', icon: Zap, action: () => {}, variant: 'info' },
    { label: 'Generate Report', icon: FileSpreadsheet, action: () => {}, variant: 'warning' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'filed': return 'bg-green-100 text-green-800';
      case 'paid': return 'bg-emerald-100 text-emerald-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ModernDashboardLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-200/30 to-blue-200/30 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-8 h-8 text-blue-600" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Smart Documents
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                AI-powered document management with automatic categorization, OCR, and intelligent search
              </p>
            </div>
            
            <div className="flex gap-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.action}
                  className={`btn-${action.variant} animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <action.icon className="w-4 h-4 mr-2" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search documents, invoices, reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-white/80 text-sm font-medium mb-2">{stat.title}</h3>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <span className="text-white/70 text-xs">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(category.name.toLowerCase().replace(' ', '-'))}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    category.active 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <Badge variant={category.active ? "secondary" : "outline"} className="text-xs">
                    {category.count}
                  </Badge>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Documents Grid */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Documents</h2>
            <div className="flex gap-3">
              <Button variant="outline" className="hover-lift">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="hover-lift">
                <FolderPlus className="w-4 h-4 mr-2" />
                New Collection
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {documents.map((document, index) => (
              <Card key={document.id} className="card-modern hover-lift animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{document.title}</h3>
                        <p className="text-xs text-gray-500">{document.type}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(document.status)}>
                      {document.status}
                    </Badge>
                    <span className="text-xs text-gray-500">{document.size}</span>
                  </div>

                  {document.entity && (
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{document.entity}</span>
                    </div>
                  )}

                  {document.amount && (
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-900">₹{document.amount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1">
                    {document.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {document.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{document.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{document.issueDate}</span>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedDocument(document)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Document Preview Dialog */}
      <Dialog open={!!selectedDocument} onOpenChange={() => setSelectedDocument(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedDocument?.title}</DialogTitle>
          </DialogHeader>
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Document preview and AI insights would appear here.</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upload Dialog */}
      <Dialog open={showUpload} onOpenChange={setShowUpload}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload New Document</DialogTitle>
          </DialogHeader>
          <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Drop files here or click to browse</h3>
            <p className="text-gray-600 mb-4">Support for PDF, images, and office documents</p>
            <Button className="btn-primary">
              Choose Files
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </ModernDashboardLayout>
  );
};

export default ModernDocuments;