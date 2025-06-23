#!/bin/bash

# Financial Management Application - GitHub Deployment Script
# Repository: https://github.com/DineshKumarCLG/fiscal-prompt-nexus.git
# Branch: dk

set -e

echo "🚀 Starting deployment to GitHub..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Configure git user (you may need to set these)
echo "👤 Configuring Git user..."
git config --global user.name "DineshKumarCLG" || echo "⚠️  Please set git user.name manually"
git config --global user.email "your-email@example.com" || echo "⚠️  Please set git user.email manually"

# Add remote repository
echo "🔗 Setting up remote repository..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/DineshKumarCLG/fiscal-prompt-nexus.git

# Create and switch to dk branch
echo "🌿 Creating and switching to 'dk' branch..."
git checkout -b dk 2>/dev/null || git checkout dk

# Stage all files
echo "📦 Staging all files..."
git add .

# Create comprehensive commit
echo "💾 Creating commit..."
git commit -m "Complete Financial Management Application with Firebase Integration

🎯 Core Features:
- React 18 frontend with TypeScript and Vite build system
- Express.js backend with comprehensive API layer
- Firebase Authentication with role-based access control
- Firebase Firestore for real-time data management
- Firebase Storage for document and file handling

📊 Business Modules:
- Document Management: Smart categorization with OCR processing
- Expense Tracking: AI-powered receipt processing and categorization
- GST Compliance: Automated tax filing and compliance tracking
- Banking Sync: Real-time transaction import and reconciliation
- Payroll Management: Employee management with statutory compliance
- Investor Reports: Automated reporting and fund utilization tracking

🎨 User Interface:
- Modern responsive design with Shadcn/UI components
- Dark/light theme support with system preference detection
- Mobile-first approach with tablet and desktop optimization
- Intuitive navigation with role-based access controls

🔧 Technical Architecture:
- TypeScript for complete type safety across frontend and backend
- TanStack Query for efficient server state management
- React Hook Form with Zod validation for form handling
- Tailwind CSS for utility-first styling approach
- Drizzle ORM for PostgreSQL database operations (backup)
- Hot reload development environment with Vite

🛡️ Security & Authentication:
- Firebase Authentication with email/password
- Role-based access control (Admin, Accountant, Viewer)
- Secure API endpoints with proper validation
- Session management with automatic token refresh

📱 Progressive Features:
- Real-time data synchronization across all modules
- Offline-first architecture for critical operations
- Smart document processing with automatic categorization
- AI-powered expense categorization and matching
- Automated bank transaction reconciliation
- Compliance tracking with deadline management

🚀 Deployment Ready:
- Production build configuration with optimized bundles
- Environment variable configuration for different stages
- PostgreSQL and Firebase dual database support
- Scalable architecture for growing business needs

Built for Indian startups and small businesses with comprehensive
financial management, compliance tracking, and investor reporting."

# Push to GitHub
echo "🚀 Pushing to GitHub repository..."
git push -u origin dk

echo "✅ Successfully deployed to GitHub!"
echo "🔗 Repository: https://github.com/DineshKumarCLG/fiscal-prompt-nexus.git"
echo "🌿 Branch: dk"
echo ""
echo "📋 Next Steps:"
echo "1. Set up environment variables in your deployment platform"
echo "2. Configure Firebase project credentials"
echo "3. Set up PostgreSQL database (optional backup)"
echo "4. Deploy to your preferred hosting platform"
echo ""
echo "🎉 Your financial management application is ready for production!"
