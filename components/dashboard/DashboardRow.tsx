import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { DashboardCard } from './DashboardCard';
import type { DashboardRow as DashboardRowType } from '@/types/dashboard';

interface DashboardRowProps {
  rowData: DashboardRowType;
  rowIndex: number;
}

const { width: screenWidth } = Dimensions.get('window');

export const DashboardRow: React.FC<DashboardRowProps> = ({ rowData, rowIndex }) => {
  const { row } = rowData;
  const hasFullWidthCard = row.some(card => card.fullWidth);

  return (
    <View
      style={[
        styles.row,
        hasFullWidthCard && styles.fullWidthRow,
      ]}
    >
      {row.map((card, cardIndex) => (
        <DashboardCard key={`card-${rowIndex}-${cardIndex}`} card={card} index={cardIndex} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: screenWidth * 0.04,
    gap: screenWidth * 0.04,
  },
  fullWidthRow: {
    flexDirection: 'column',
    gap: 0,
  },
});

