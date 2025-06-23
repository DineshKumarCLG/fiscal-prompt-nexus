import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  firestoreService, 
  Company, 
  FirebaseDocument, 
  Expense, 
  BankAccount, 
  Transaction, 
  Invoice, 
  Employee 
} from '@/services/firestoreService';

// Hook for company data
export const useCompany = () => {
  const { user } = useAuth();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        const companyData = await firestoreService.getCompanyByUserId(user.id);
        setCompany(companyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch company');
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [user?.id]);

  const createCompany = async (companyData: Omit<Company, 'id' | 'createdAt' | 'updatedAt' | 'userId'>) => {
    if (!user?.id) throw new Error('User not authenticated');
    
    try {
      const newCompany = await firestoreService.createCompany({
        ...companyData,
        userId: user.id
      });
      setCompany(newCompany);
      return newCompany;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create company');
      throw err;
    }
  };

  const updateCompany = async (updates: Partial<Company>) => {
    if (!company?.id) throw new Error('No company to update');
    
    try {
      await firestoreService.updateCompany(company.id, updates);
      setCompany(prev => prev ? { ...prev, ...updates } : null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update company');
      throw err;
    }
  };

  return { company, loading, error, createCompany, updateCompany };
};

// Hook for documents
export const useDocuments = () => {
  const { company } = useCompany();
  const [documents, setDocuments] = useState<FirebaseDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      if (!company?.id) {
        setLoading(false);
        return;
      }

      try {
        const docs = await firestoreService.getDocumentsByCompany(company.id);
        setDocuments(docs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch documents');
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [company?.id]);

  const createDocument = async (documentData: Omit<FirebaseDocument, 'id' | 'createdAt' | 'updatedAt' | 'companyId'>) => {
    if (!company?.id) throw new Error('No company selected');
    
    try {
      const newDoc = await firestoreService.createDocument({
        ...documentData,
        companyId: company.id
      });
      setDocuments(prev => [newDoc, ...prev]);
      return newDoc;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create document');
      throw err;
    }
  };

  const updateDocument = async (documentId: string, updates: Partial<FirebaseDocument>) => {
    try {
      await firestoreService.updateDocument(documentId, updates);
      setDocuments(prev => prev.map(doc => 
        doc.id === documentId ? { ...doc, ...updates } : doc
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update document');
      throw err;
    }
  };

  const deleteDocument = async (documentId: string) => {
    try {
      await firestoreService.deleteDocument(documentId);
      setDocuments(prev => prev.filter(doc => doc.id !== documentId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete document');
      throw err;
    }
  };

  return { documents, loading, error, createDocument, updateDocument, deleteDocument };
};

// Hook for expenses
export const useExpenses = () => {
  const { company } = useCompany();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      if (!company?.id) {
        setLoading(false);
        return;
      }

      try {
        const expenseData = await firestoreService.getExpensesByCompany(company.id);
        setExpenses(expenseData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch expenses');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, [company?.id]);

  const createExpense = async (expenseData: Omit<Expense, 'id' | 'createdAt' | 'updatedAt' | 'companyId'>) => {
    if (!company?.id) throw new Error('No company selected');
    
    try {
      const newExpense = await firestoreService.createExpense({
        ...expenseData,
        companyId: company.id
      });
      setExpenses(prev => [newExpense, ...prev]);
      return newExpense;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create expense');
      throw err;
    }
  };

  const updateExpenseStatus = async (expenseId: string, status: 'pending' | 'approved' | 'paid') => {
    try {
      await firestoreService.updateExpenseStatus(expenseId, status);
      setExpenses(prev => prev.map(expense => 
        expense.id === expenseId ? { ...expense, status } : expense
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update expense status');
      throw err;
    }
  };

  return { expenses, loading, error, createExpense, updateExpenseStatus };
};

// Hook for bank accounts
export const useBankAccounts = () => {
  const { company } = useCompany();
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      if (!company?.id) {
        setLoading(false);
        return;
      }

      try {
        const accountData = await firestoreService.getBankAccountsByCompany(company.id);
        setAccounts(accountData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch bank accounts');
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [company?.id]);

  const createBankAccount = async (accountData: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt' | 'companyId'>) => {
    if (!company?.id) throw new Error('No company selected');
    
    try {
      const newAccount = await firestoreService.createBankAccount({
        ...accountData,
        companyId: company.id
      });
      setAccounts(prev => [...prev, newAccount]);
      return newAccount;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create bank account');
      throw err;
    }
  };

  return { accounts, loading, error, createBankAccount };
};

// Hook for invoices
export const useInvoices = () => {
  const { company } = useCompany();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      if (!company?.id) {
        setLoading(false);
        return;
      }

      try {
        const invoiceData = await firestoreService.getInvoicesByCompany(company.id);
        setInvoices(invoiceData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch invoices');
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, [company?.id]);

  const createInvoice = async (invoiceData: Omit<Invoice, 'id' | 'createdAt' | 'updatedAt' | 'companyId'>) => {
    if (!company?.id) throw new Error('No company selected');
    
    try {
      const newInvoice = await firestoreService.createInvoice({
        ...invoiceData,
        companyId: company.id
      });
      setInvoices(prev => [newInvoice, ...prev]);
      return newInvoice;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create invoice');
      throw err;
    }
  };

  const updateInvoiceStatus = async (invoiceId: string, status: 'draft' | 'sent' | 'paid' | 'overdue') => {
    try {
      await firestoreService.updateInvoiceStatus(invoiceId, status);
      setInvoices(prev => prev.map(invoice => 
        invoice.id === invoiceId ? { ...invoice, status } : invoice
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update invoice status');
      throw err;
    }
  };

  return { invoices, loading, error, createInvoice, updateInvoiceStatus };
};

// Hook for employees
export const useEmployees = () => {
  const { company } = useCompany();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      if (!company?.id) {
        setLoading(false);
        return;
      }

      try {
        const employeeData = await firestoreService.getEmployeesByCompany(company.id);
        setEmployees(employeeData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [company?.id]);

  const createEmployee = async (employeeData: Omit<Employee, 'id' | 'createdAt' | 'updatedAt' | 'companyId'>) => {
    if (!company?.id) throw new Error('No company selected');
    
    try {
      const newEmployee = await firestoreService.createEmployee({
        ...employeeData,
        companyId: company.id
      });
      setEmployees(prev => [...prev, newEmployee]);
      return newEmployee;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create employee');
      throw err;
    }
  };

  const updateEmployee = async (employeeId: string, updates: Partial<Employee>) => {
    try {
      await firestoreService.updateEmployee(employeeId, updates);
      setEmployees(prev => prev.map(employee => 
        employee.id === employeeId ? { ...employee, ...updates } : employee
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update employee');
      throw err;
    }
  };

  return { employees, loading, error, createEmployee, updateEmployee };
};

// Hook for dashboard analytics
export const useDashboardStats = () => {
  const { company } = useCompany();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      if (!company?.id) {
        setLoading(false);
        return;
      }

      try {
        const dashboardStats = await firestoreService.getDashboardStats(company.id);
        setStats(dashboardStats);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch dashboard stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [company?.id]);

  const refreshStats = async () => {
    if (!company?.id) return;
    
    setLoading(true);
    try {
      const dashboardStats = await firestoreService.getDashboardStats(company.id);
      setStats(dashboardStats);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh dashboard stats');
    } finally {
      setLoading(false);
    }
  };

  return { stats, loading, error, refreshStats };
};