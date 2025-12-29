export interface DashboardCard {
  type: string;
  title: string;
  icon: string;
  iconColor: string;
  description: string;
  fullWidth?: boolean;
}

export interface DashboardRow {
  row: DashboardCard[];
}

export interface DashboardHeader {
  title: string;
  backgroundColor: string;
  textColor: string;
}

export interface DashboardConfig {
  screen: string;
  header: DashboardHeader;
  content: DashboardRow[];
}

export interface HomeDashboardProps {
  config: DashboardConfig;
}

