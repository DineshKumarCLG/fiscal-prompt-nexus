import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp,
  writeBatch
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { User } from './authService';

// Company Profile Interface
export interface Company {
  id?: string;
  name: string;
  address: string;
  gstin?: string;
  pan?: string;
  cin?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Document Interface
export interface FirebaseDocument {
  id?: string;
  title: string;
  type: string;
  category: string;
  entity?: string;
  issueDate: Date;
  amount?: number;
  status: string;
  tags: string[];
  filePath?: string;
  size?: string;
  createdBy: string;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Expense Interface
export interface Expense {
  id?: string;
  amount: number;
  description: string;
  category: string;
  vendor: string;
  date: Date;
  receiptUrl?: string;
  taxAmount?: number;
  status: 'pending' | 'approved' | 'paid';
  createdBy: string;
  companyId: string;
  recurring?: {
    frequency: 'monthly' | 'quarterly' | 'yearly';
    nextDueDate: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Bank Account Interface
export interface BankAccount {
  id?: string;
  accountNumber: string;
  bankName: string;
  accountType: 'current' | 'savings';
  balance: number;
  companyId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Transaction Interface
export interface Transaction {
  id?: string;
  accountId: string;
  amount: number;
  transactionType: 'credit' | 'debit';
  description: string;
  date: Date;
  category: string;
  referenceNumber: string;
  balanceAfter: number;
  companyId: string;
  createdAt: Date;
}

// Invoice Interface
export interface Invoice {
  id?: string;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  clientGstin?: string;
  issueDate: Date;
  dueDate: Date;
  items: Array<{
    description: string;
    quantity: number;
    rate: number;
    amount: number;
    taxRate: number;
  }>;
  subtotal: number;
  taxAmount: number;
  totalAmount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Employee Interface
export interface Employee {
  id?: string;
  name: string;
  email: string;
  role: string;
  salary: number;
  pfContribution: number;
  tdsDeduction: number;
  status: 'active' | 'inactive';
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}

class FirestoreService {
  // Helper method to convert Firestore timestamps
  private convertTimestamps(data: any) {
    const converted = { ...data };
    Object.keys(converted).forEach(key => {
      if (converted[key] instanceof Timestamp) {
        converted[key] = converted[key].toDate();
      }
    });
    return converted;
  }

  // Company Management
  async createCompany(company: Omit<Company, 'id' | 'createdAt' | 'updatedAt'>): Promise<Company> {
    const docRef = await addDoc(collection(db, 'companies'), {
      ...company,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    
    const docSnap = await getDoc(docRef);
    return { id: docRef.id, ...this.convertTimestamps(docSnap.data()) } as Company;
  }

  async getCompanyByUserId(userId: string): Promise<Company | null> {
    const q = query(collection(db, 'companies'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) return null;
    
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...this.convertTimestamps(doc.data()) } as Company;
  }

  async updateCompany(companyId: string, updates: Partial<Company>): Promise<void> {
    const docRef = doc(db, 'companies', companyId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now()
    });
  }

  // Document Management
  async createDocument(document: Omit<FirebaseDocument, 'id' | 'createdAt' | 'updatedAt'>): Promise<FirebaseDocument> {
    const docRef = await addDoc(collection(db, 'documents'), {
      ...document,
      issueDate: Timestamp.fromDate(document.issueDate),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    
    const docSnap = await getDoc(docRef);
    return { id: docRef.id, ...this.convertTimestamps(docSnap.data()) } as FirebaseDocument;
  }

  async getDocumentsByCompany(companyId: string): Promise<FirebaseDocument[]> {
    const q = query(
      collection(db, 'documents'), 
      where('companyId', '==', companyId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...this.convertTimestamps(doc.data())
    })) as FirebaseDocument[];
  }

  async updateDocument(documentId: string, updates: Partial<FirebaseDocument>): Promise<void> {
    const docRef = doc(db, 'documents', documentId);
    const updateData: any = { ...updates, updatedAt: Timestamp.now() };
    
    if (updates.issueDate) {
      updateData.issueDate = Timestamp.fromDate(updates.issueDate);
    }
    
    await updateDoc(docRef, updateData);
  }

  async deleteDocument(documentId: string): Promise<void> {
    await deleteDoc(doc(db, 'documents', documentId));
  }

  // Expense Management
  async createExpense(expense: Omit<Expense, 'id' | 'createdAt' | 'updatedAt'>): Promise<Expense> {
    const docRef = await addDoc(collection(db, 'expenses'), {
      ...expense,
      date: Timestamp.fromDate(expense.date),
      recurring: expense.recurring ? {
        ...expense.recurring,
        nextDueDate: Timestamp.fromDate(expense.recurring.nextDueDate)
      } : undefined,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    
    const docSnap = await getDoc(docRef);
    return { id: docRef.id, ...this.convertTimestamps(docSnap.data()) } as Expense;
  }

  async getExpensesByCompany(companyId: string): Promise<Expense[]> {
    const q = query(
      collection(db, 'expenses'),
      where('companyId', '==', companyId),
      orderBy('date', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...this.convertTimestamps(doc.data())
    })) as Expense[];
  }

  async updateExpenseStatus(expenseId: string, status: 'pending' | 'approved' | 'paid'): Promise<void> {
    const docRef = doc(db, 'expenses', expenseId);
    await updateDoc(docRef, {
      status,
      updatedAt: Timestamp.now()
    });
  }

  // Bank Account Management
  async createBankAccount(account: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt'>): Promise<BankAccount> {
    const docRef = await addDoc(collection(db, 'bankAccounts'), {
      ...account,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    
    const docSnap = await getDoc(docRef);
    return { id: docRef.id, ...this.convertTimestamps(docSnap.data()) } as BankAccount;
  }

  async getBankAccountsByCompany(companyId: string): Promise<BankAccount[]> {
    const q = query(
      collection(db, 'bankAccounts'),
      where('companyId', '==', companyId),
      where('isActive', '==', true)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...this.convertTimestamps(doc.data())
    })) as BankAccount[];
  }

  // Transaction Management
  async createTransaction(transaction: Omit<Transaction, 'id' | 'createdAt'>): Promise<Transaction> {
    const docRef = await addDoc(collection(db, 'transactions'), {
      ...transaction,
      date: Timestamp.fromDate(transaction.date),
      createdAt: Timestamp.now()
    });
    
    const docSnap = await getDoc(docRef);
    return { id: docRef.id, ...this.convertTimestamps(docSnap.data()) } as Transaction;
  }

  async getTransactionsByAccount(accountId: string, limitCount = 50): Promise<Transaction[]> {
    const q = query(
      collection(db, 'transactions'),
      where('accountId', '==', accountId),
      orderBy('date', 'desc'),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...this.convertTimestamps(doc.data())
    })) as Transaction[];
  }

  // Invoice Management
  async createInvoice(invoice: Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>): Promise<Invoice> {
    const docRef = await addDoc(collection(db, 'invoices'), {
      ...invoice,
      issueDate: Timestamp.fromDate(invoice.issueDate),
      dueDate: Timestamp.fromDate(invoice.dueDate),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    
    const docSnap = await getDoc(docRef);
    return { id: docRef.id, ...this.convertTimestamps(docSnap.data()) } as Invoice;
  }

  async getInvoicesByCompany(companyId: string): Promise<Invoice[]> {
    const q = query(
      collection(db, 'invoices'),
      where('companyId', '==', companyId),
      orderBy('issueDate', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...this.convertTimestamps(doc.data())
    })) as Invoice[];
  }

  async updateInvoiceStatus(invoiceId: string, status: 'draft' | 'sent' | 'paid' | 'overdue'): Promise<void> {
    const docRef = doc(db, 'invoices', invoiceId);
    await updateDoc(docRef, {
      status,
      updatedAt: Timestamp.now()
    });
  }

  // Employee Management
  async createEmployee(employee: Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>): Promise<Employee> {
    const docRef = await addDoc(collection(db, 'employees'), {
      ...employee,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    
    const docSnap = await getDoc(docRef);
    return { id: docRef.id, ...this.convertTimestamps(docSnap.data()) } as Employee;
  }

  async getEmployeesByCompany(companyId: string): Promise<Employee[]> {
    const q = query(
      collection(db, 'employees'),
      where('companyId', '==', companyId),
      where('status', '==', 'active')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...this.convertTimestamps(doc.data())
    })) as Employee[];
  }

  async updateEmployee(employeeId: string, updates: Partial<Employee>): Promise<void> {
    const docRef = doc(db, 'employees', employeeId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now()
    });
  }

  // Batch Operations for better performance
  async batchCreateTransactions(transactions: Omit<Transaction, 'id' | 'createdAt'>[]): Promise<void> {
    const batch = writeBatch(db);
    
    transactions.forEach((transaction) => {
      const docRef = doc(collection(db, 'transactions'));
      batch.set(docRef, {
        ...transaction,
        date: Timestamp.fromDate(transaction.date),
        createdAt: Timestamp.now()
      });
    });
    
    await batch.commit();
  }

  // Dashboard Analytics
  async getDashboardStats(companyId: string) {
    const [expenses, invoices, transactions] = await Promise.all([
      this.getExpensesByCompany(companyId),
      this.getInvoicesByCompany(companyId),
      this.getTransactionsByAccount('', 100) // This would need account filtering
    ]);

    const currentMonth = new Date();
    currentMonth.setDate(1);

    const monthlyExpenses = expenses.filter(e => e.date >= currentMonth);
    const pendingInvoices = invoices.filter(i => i.status === 'sent' || i.status === 'overdue');
    const totalRevenue = invoices
      .filter(i => i.status === 'paid')
      .reduce((sum, i) => sum + i.totalAmount, 0);

    return {
      monthlyExpenseTotal: monthlyExpenses.reduce((sum, e) => sum + e.amount, 0),
      pendingInvoiceCount: pendingInvoices.length,
      pendingInvoiceAmount: pendingInvoices.reduce((sum, i) => sum + i.totalAmount, 0),
      totalRevenue,
      expenseCount: expenses.length,
      invoiceCount: invoices.length
    };
  }
}

export const firestoreService = new FirestoreService();