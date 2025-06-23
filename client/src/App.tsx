import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PromptPage from "./pages/PromptPage";
import ModernDocuments from "./pages/ModernDocuments";
import ModernBankSync from "./pages/ModernBankSync";
import ModernExpenses from "./pages/ModernExpenses";
import ModernGSTCompliance from "./pages/ModernGSTCompliance";
import ModernPayroll from "./pages/ModernPayroll";
import ModernInvestorReports from "./pages/ModernInvestorReports";
import ModernSettings from "./pages/ModernSettings";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "@/contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/prompt" element={<PromptPage />} />
            <Route path="/documents" element={<ModernDocuments />} />
            <Route path="/bank" element={<ModernBankSync />} />
            <Route path="/expenses" element={<ModernExpenses />} />
            <Route path="/gst" element={<ModernGSTCompliance />} />
            <Route path="/payroll" element={<ModernPayroll />} />
            <Route path="/reports" element={<ModernInvestorReports />} />
            <Route path="/settings" element={<ModernSettings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
