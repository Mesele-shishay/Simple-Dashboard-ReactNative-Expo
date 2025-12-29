import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { DashboardRow } from './DashboardRow';
import type { DashboardRow as DashboardRowType } from '@/types/dashboard';

interface DashboardContentProps {
  content: DashboardRowType[];
}

const { width: screenWidth } = Dimensions.get('window');

export const DashboardContent: React.FC<DashboardContentProps> = ({ content }) => {
  return (
    <ScrollView
      style={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.contentContainer, { backgroundColor: '#F8F9FA' }]}>
        {content.map((rowData, rowIndex) => (
          <DashboardRow key={`row-${rowIndex}`} rowData={rowData} rowIndex={rowIndex} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: screenWidth * 0.04,
    paddingBottom: 32,
  },
});

