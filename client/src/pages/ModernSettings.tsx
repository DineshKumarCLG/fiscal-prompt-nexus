import React, { useState } from 'react';
import { ModernDashboardLayout } from '@/components/layout/ModernDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Building, 
  Users, 
  Settings as SettingsIcon, 
  CreditCard,
  Bell,
  Shield,
  Database,
  Zap,
  Globe,
  Key,
  Mail,
  Smartphone,
  Lock,
  Eye,
  Check,
  AlertTriangle
} from 'lucide-react';

const ModernSettings: React.FC = () => {
  const [companyData, setCompanyData] = useState({
    name: 'Demo Company Ltd',
    address: '123 Business Street, Mumbai, MH 400001',
    gstin: '27AAAAA0000A1Z5',
    pan: 'AAAAA0000A',
    cin: 'U74140MH2023PTC000000',
    email: 'contact@democompany.com',
    phone: '+91 98765 43210'
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    invoice: true,
    expense: true,
    gst: true,
    payroll: false
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    loginAlerts: true,
    sessionTimeout: '30',
    ipRestriction: false
  });

  const stats = [
    { 
      title: 'Profile Complete', 
      value: '85%', 
      change: '3 fields missing', 
      icon: Building, 
      color: 'from-blue-500 to-purple-600' 
    },
    { 
      title: 'Team Members', 
      value: '8', 
      change: '5 active users', 
      icon: Users, 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      title: 'Integrations', 
      value: '12', 
      change: '8 connected', 
      icon: Zap, 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      title: 'Security Score', 
      value: '92%', 
      change: 'Excellent', 
      icon: Shield, 
      color: 'from-purple-500 to-pink-600' 
    }
  ];

  const teamMembers = [
    { name: 'John Doe', email: 'john@company.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
    { name: 'Jane Smith', email: 'jane@company.com', role: 'Accountant', status: 'Active', lastLogin: '1 day ago' },
    { name: 'Mike Wilson', email: 'mike@company.com', role: 'Viewer', status: 'Inactive', lastLogin: '1 week ago' }
  ];

  const integrations = [
    { name: 'Firebase', description: 'Database & Authentication', status: 'Connected', icon: Database },
    { name: 'Gmail', description: 'Email notifications', status: 'Connected', icon: Mail },
    { name: 'WhatsApp Business', description: 'SMS notifications', status: 'Disconnected', icon: Smartphone },
    { name: 'Razorpay', description: 'Payment gateway', status: 'Pending', icon: CreditCard },
    { name: 'GST Portal', description: 'Tax filing integration', status: 'Connected', icon: Globe }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected': case 'Active': return 'bg-green-100 text-green-800';
      case 'Disconnected': case 'Inactive': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ModernDashboardLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-3xl p-8 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-200/30 to-blue-200/30 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-200/30 to-gray-200/30 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <SettingsIcon className="w-8 h-8 text-gray-600" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Settings & Configuration
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Configure your company profile, team access, and system preferences
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button className="btn-success">
                <Check className="w-4 h-4 mr-2" />
                Save Changes
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
      <Tabs defaultValue="company" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="company" className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            Company
          </TabsTrigger>
          <TabsTrigger value="team" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Team
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Integrations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" />
                Company Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="form-label">Company Name</Label>
                  <Input 
                    className="form-input"
                    value={companyData.name}
                    onChange={(e) => setCompanyData({...companyData, name: e.target.value})}
                    placeholder="Your Company Pvt Ltd" 
                  />
                </div>
                <div>
                  <Label className="form-label">GSTIN</Label>
                  <Input 
                    className="form-input"
                    value={companyData.gstin}
                    onChange={(e) => setCompanyData({...companyData, gstin: e.target.value})}
                    placeholder="22AAAAA0000A1Z5" 
                  />
                </div>
                <div>
                  <Label className="form-label">PAN</Label>
                  <Input 
                    className="form-input"
                    value={companyData.pan}
                    onChange={(e) => setCompanyData({...companyData, pan: e.target.value})}
                    placeholder="AAAAA0000A" 
                  />
                </div>
                <div>
                  <Label className="form-label">CIN</Label>
                  <Input 
                    className="form-input"
                    value={companyData.cin}
                    onChange={(e) => setCompanyData({...companyData, cin: e.target.value})}
                    placeholder="U74140DL2023PTC000000" 
                  />
                </div>
                <div>
                  <Label className="form-label">Email Address</Label>
                  <Input 
                    className="form-input"
                    type="email"
                    value={companyData.email}
                    onChange={(e) => setCompanyData({...companyData, email: e.target.value})}
                    placeholder="contact@company.com" 
                  />
                </div>
                <div>
                  <Label className="form-label">Phone Number</Label>
                  <Input 
                    className="form-input"
                    value={companyData.phone}
                    onChange={(e) => setCompanyData({...companyData, phone: e.target.value})}
                    placeholder="+91 98765 43210" 
                  />
                </div>
              </div>
              <div>
                <Label className="form-label">Registered Address</Label>
                <textarea 
                  className="form-input min-h-[100px] resize-none"
                  value={companyData.address}
                  onChange={(e) => setCompanyData({...companyData, address: e.target.value})}
                  placeholder="Complete registered address" 
                />
              </div>
              <Button className="btn-primary">
                <Check className="w-4 h-4 mr-2" />
                Update Company Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(member.status)}>
                        {member.status}
                      </Badge>
                      <div className="text-xs text-gray-500 mt-1">{member.lastLogin}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Invite New Member</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="form-label">Email Address</Label>
                  <Input className="form-input" placeholder="user@company.com" />
                </div>
                <div>
                  <Label className="form-label">Role</Label>
                  <select className="form-input">
                    <option value="viewer">Viewer</option>
                    <option value="accountant">Accountant</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <Button className="btn-primary w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Invitation
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-orange-600" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Notification Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-500">Receive notifications via email</div>
                    </div>
                    <Switch 
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">SMS Notifications</div>
                      <div className="text-sm text-gray-500">Receive urgent notifications via SMS</div>
                    </div>
                    <Switch 
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Push Notifications</div>
                      <div className="text-sm text-gray-500">Browser and mobile push notifications</div>
                    </div>
                    <Switch 
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Alert Types</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Invoice Alerts</div>
                      <div className="text-sm text-gray-500">New invoices and payment updates</div>
                    </div>
                    <Switch 
                      checked={notifications.invoice}
                      onCheckedChange={(checked) => setNotifications({...notifications, invoice: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Expense Alerts</div>
                      <div className="text-sm text-gray-500">Expense approvals and submissions</div>
                    </div>
                    <Switch 
                      checked={notifications.expense}
                      onCheckedChange={(checked) => setNotifications({...notifications, expense: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">GST Reminders</div>
                      <div className="text-sm text-gray-500">Tax filing deadlines and compliance</div>
                    </div>
                    <Switch 
                      checked={notifications.gst}
                      onCheckedChange={(checked) => setNotifications({...notifications, gst: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Payroll Alerts</div>
                      <div className="text-sm text-gray-500">Salary processing and payments</div>
                    </div>
                    <Switch 
                      checked={notifications.payroll}
                      onCheckedChange={(checked) => setNotifications({...notifications, payroll: checked})}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Two-Factor Authentication</div>
                    <div className="text-sm text-gray-500">Add an extra layer of security</div>
                  </div>
                  <Switch 
                    checked={security.twoFactor}
                    onCheckedChange={(checked) => setSecurity({...security, twoFactor: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Login Alerts</div>
                    <div className="text-sm text-gray-500">Get notified of new sign-ins</div>
                  </div>
                  <Switch 
                    checked={security.loginAlerts}
                    onCheckedChange={(checked) => setSecurity({...security, loginAlerts: checked})}
                  />
                </div>

                <div>
                  <Label className="form-label">Session Timeout (minutes)</Label>
                  <Input 
                    className="form-input"
                    type="number"
                    value={security.sessionTimeout}
                    onChange={(e) => setSecurity({...security, sessionTimeout: e.target.value})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">IP Restriction</div>
                    <div className="text-sm text-gray-500">Restrict access to specific IPs</div>
                  </div>
                  <Switch 
                    checked={security.ipRestriction}
                    onCheckedChange={(checked) => setSecurity({...security, ipRestriction: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle>Password & Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Lock className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Key className="w-4 h-4 mr-2" />
                  API Keys
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="w-4 h-4 mr-2" />
                  Active Sessions
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Security Log
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                Connected Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <integration.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{integration.name}</h4>
                          <p className="text-sm text-gray-500">{integration.description}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(integration.status)}>
                        {integration.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      {integration.status === 'Connected' ? (
                        <Button variant="outline" size="sm" className="flex-1">
                          Configure
                        </Button>
                      ) : (
                        <Button size="sm" className="btn-primary flex-1">
                          Connect
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Eye className="w-3 h-3" />
                      </Button>
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

export default ModernSettings;