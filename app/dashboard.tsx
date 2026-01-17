import HomeDashboard from '@/components/home-dashboard';
import { dashboardConfig } from '@/config/home-dashboard-config';
import React from 'react';

export default function HomeScreen() {
  return <HomeDashboard config={dashboardConfig} />;
}

