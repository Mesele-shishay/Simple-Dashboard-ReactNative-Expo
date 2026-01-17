import type { DashboardHeader as DashboardHeaderType } from '@/types/dashboard';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../themed-text';

interface DashboardHeaderProps {
  header: DashboardHeaderType;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ header }) => {
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: header.backgroundColor }
      ]}
    >
      <ThemedText
        type="title"
        style={[
          styles.headerTitle,
          { color: header.textColor }
        ]}
      >
        {header.title}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

