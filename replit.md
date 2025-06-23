# Replit.md

## Overview

This is a full-stack financial management application built for startups and small businesses. The system provides comprehensive accounting, document management, compliance tracking, and financial reporting capabilities with AI-powered automation features.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query for server state, React Context for client state
- **Routing**: React Router for client-side navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Configured for Neon Database (@neondatabase/serverless)
- **Development**: Hot reload with Vite middleware integration
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions

### Data Storage Solutions
- **Primary Database**: Firebase Firestore (NoSQL real-time database)
- **Authentication**: Firebase Authentication with email/password
- **File Storage**: Firebase Storage for document uploads
- **Backup Database**: PostgreSQL (configured for Neon Database) - available as fallback
- **Schema Management**: Drizzle Kit for migrations and schema changes (PostgreSQL)
- **Temporary Storage**: In-memory storage class for development/testing

## Key Components

### Authentication and Authorization
- **Service**: Firebase Authentication with email/password
- **Mock Mode**: Fallback authentication for demo/development when Firebase is unavailable
- **User Roles**: Admin, Accountant, Viewer with role-based access
- **Session Management**: Firebase Auth state management with localStorage fallback

### Document Management System
- **OCR Integration**: Smart document parsing with AI categorization
- **Document Types**: Invoices, Bills, Reports, Compliance documents
- **File Upload**: Multi-format support with smart categorization
- **Collections**: Document grouping for reporting and compliance

### Financial Modules
- **Bank Sync**: Transaction import and reconciliation
- **Expense Management**: Receipt processing with AI categorization
- **GST Compliance**: Automated tax filing and compliance tracking
- **Payroll**: Employee management and salary processing
- **Investor Reports**: Automated reporting and fund utilization tracking

### AI-Powered Features
- **Prompt Console**: Natural language interface for system operations
- **Smart Categorization**: Automatic expense and revenue categorization
- **Document Processing**: OCR with intelligent data extraction
- **Reconciliation**: Automated bank transaction matching

## Data Flow

### Document Processing Flow
1. User uploads document via smart upload component
2. OCR service extracts text and structured data
3. AI categorizes document type and extracts key fields
4. Document stored with metadata and linked to relevant entities
5. Automatic reconciliation with bank transactions if applicable

### Financial Data Flow
1. Bank transactions imported via API or file upload
2. Smart categorization using chart of accounts
3. Automatic matching with invoices and expenses
4. Real-time updates to financial dashboards
5. Compliance reports generated automatically

### User Interaction Flow
1. Authentication through Supabase or mock mode
2. Role-based dashboard with relevant modules
3. Natural language queries through prompt console
4. Real-time updates via TanStack Query
5. Contextual actions based on user permissions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **react-hook-form**: Form handling with validation

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code
- **tailwindcss**: Utility-first CSS framework

### Optional Integrations
- **Firebase**: Authentication and real-time features
- **Tesseract.js**: Client-side OCR processing
- **Chart.js/Recharts**: Data visualization
- **PDF generation**: For reports and invoices

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with hot reloading
- **Database**: PostgreSQL 16 with Drizzle migrations
- **Build Process**: Concurrent frontend and backend development
- **Port Configuration**: Frontend (5000), Backend API (/api routes)

### Production Deployment
- **Build Process**: 
  1. Vite builds optimized frontend bundle
  2. ESBuild bundles server code with external packages
  3. Static files served from dist/public
- **Database**: PostgreSQL with connection pooling
- **Environment**: Production Node.js with process management
- **Autoscale**: Configured for automatic scaling based on demand

### Database Management
- **Migrations**: Automated with Drizzle Kit
- **Schema**: Shared schema definitions in /shared/schema.ts
- **Environment Variables**: DATABASE_URL for connection string
- **Backup Strategy**: Regular automated backups (cloud provider dependent)

## Changelog
- June 23, 2025: Initial setup
- June 23, 2025: Successfully migrated from Lovable to Replit environment
- June 23, 2025: Replaced Supabase authentication with Firebase Authentication
- June 23, 2025: Configured Firebase with provided project credentials
- June 23, 2025: Added Firebase Firestore database with comprehensive data models
- June 23, 2025: Created Firestore service layer with CRUD operations for all entities
- June 23, 2025: Implemented React hooks for real-time Firebase data integration
- June 23, 2025: Added Firebase Storage for file uploads and document management

## User Preferences

Preferred communication style: Simple, everyday language.