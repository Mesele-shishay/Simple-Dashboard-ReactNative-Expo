import type { HomeDashboardProps } from '@/types/dashboard';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DashboardContent } from './dashboard/DashboardContent';
import { DashboardHeader } from './dashboard/DashboardHeader';

const HomeDashboard: React.FC<HomeDashboardProps> = ({ config }) => {
  return (
    <View style={styles.container}>
      <DashboardHeader header={config.header} />
      <DashboardContent content={config.content} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
});

export default HomeDashboard;
