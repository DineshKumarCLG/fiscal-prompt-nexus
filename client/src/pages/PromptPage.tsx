
import React from 'react';
import { ModernDashboardLayout } from '@/components/layout/ModernDashboardLayout';
import { PromptConsole } from '@/components/prompt/PromptConsole';

const PromptPage: React.FC = () => {
  return (
    <ModernDashboardLayout>
      <PromptConsole />
    </ModernDashboardLayout>
  );
};

export default PromptPage;
