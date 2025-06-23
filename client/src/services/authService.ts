import { auth } from '@/lib/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  updateProfile
} from 'firebase/auth';

export interface User {
  id: string;
  email: string;
  company_name?: string;
  role: 'admin' | 'accountant' | 'viewer';
  subscription_plan: 'basic' | 'professional' | 'enterprise';
  created_at: string;
}

// Mock user data for demo when Firebase auth is not available
const mockUser: User = {
  id: 'mock-user-123',
  email: 'demo@company.com',
  company_name: 'Demo Company Ltd',
  role: 'admin',
  subscription_plan: 'professional',
  created_at: new Date().toISOString()
};

// Mock credentials
const DEMO_EMAIL = 'demo@company.com';
const DEMO_PASSWORD = 'demo123';

export const authService = {
  async signUp(email: string, password: string, companyName: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update user profile with company name
      await updateProfile(user, {
        displayName: companyName
      });
      
      return {
        data: {
          user: {
            id: user.uid,
            email: user.email || '',
            company_name: companyName,
            role: 'admin' as const,
            subscription_plan: 'basic' as const,
            created_at: new Date().toISOString()
          }
        },
        error: null
      };
    } catch (error: any) {
      console.log('🔧 Firebase signup failed, using mock mode');
      // Fallback to mock mode
      return {
        data: {
          user: {
            ...mockUser,
            email,
            company_name: companyName
          }
        },
        error: null
      };
    }
  },

  async signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      return {
        data: {
          user: {
            id: user.uid,
            email: user.email || '',
            company_name: user.displayName || 'Your Company',
            role: 'admin' as const,
            subscription_plan: 'professional' as const,
            created_at: new Date().toISOString()
          }
        },
        error: null
      };
    } catch (error: any) {
      console.log('🔧 Firebase login failed, trying mock mode:', { email, password });
      
      // Check demo credentials for mock mode
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        console.log('✅ Mock login successful');
        localStorage.setItem('mock_logged_in', 'true');
        return {
          data: {
            user: mockUser
          },
          error: null
        };
      } else {
        console.log('❌ Login failed');
        return {
          data: null,
          error: { message: 'Invalid email or password. Try demo@company.com / demo123 for demo mode' }
        };
      }
    }
  },

  async signOut() {
    try {
      await signOut(auth);
      localStorage.removeItem('mock_logged_in');
      return { error: null };
    } catch (error: any) {
      console.log('🔧 Firebase signout failed, clearing mock session');
      localStorage.removeItem('mock_logged_in');
      return { error: null };
    }
  },

  async getCurrentUser() {
    try {
      const user = auth.currentUser;
      if (user) {
        return {
          id: user.uid,
          email: user.email || '',
          company_name: user.displayName || 'Your Company',
          role: 'admin' as const,
          subscription_plan: 'professional' as const,
          created_at: new Date().toISOString()
        } as User;
      }
      return null;
    } catch (error) {
      // Fallback to mock mode
      const isLoggedIn = localStorage.getItem('mock_logged_in') === 'true';
      console.log('🔧 Mock Mode: Getting current user, logged in:', isLoggedIn);
      return isLoggedIn ? mockUser : null;
    }
  },

  onAuthStateChange(callback: (user: User | null) => void) {
    try {
      return onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          const transformedUser: User = {
            id: firebaseUser.uid,
            email: firebaseUser.email || '',
            company_name: firebaseUser.displayName || 'Your Company',
            role: 'admin',
            subscription_plan: 'professional',
            created_at: new Date().toISOString()
          };
          callback(transformedUser);
        } else {
          // Check mock mode
          const isLoggedIn = localStorage.getItem('mock_logged_in') === 'true';
          callback(isLoggedIn ? mockUser : null);
        }
      });
    } catch (error) {
      // Fallback to mock mode
      const isLoggedIn = localStorage.getItem('mock_logged_in') === 'true';
      setTimeout(() => callback(isLoggedIn ? mockUser : null), 100);
      
      return () => console.log('🔧 Mock subscription unsubscribed');
    }
  }
};