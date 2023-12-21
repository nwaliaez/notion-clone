import React from 'react';
import { AuthUser } from '@supabase/supabase-js';
interface DashboardSetupProps {
  user: AuthUser;
  subscription: {} | null;
}

const DashboardSetup: React.FC<DashboardSetupProps> = ({
  subscription,
  user,
}) => {
  return <div>DashboardSetup</div>;
};

export default DashboardSetup;
