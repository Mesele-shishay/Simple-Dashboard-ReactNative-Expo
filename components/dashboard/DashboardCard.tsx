import { ICON_MAPPING } from '@/constants/dashboard';
import type { DashboardCard as DashboardCardType } from '@/types/dashboard';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../themed-text';

interface DashboardCardProps {
  card: DashboardCardType;
  index: number;
}

const { width: screenWidth } = Dimensions.get('window');

export const DashboardCard: React.FC<DashboardCardProps> = ({ card, index }) => {
  const router = useRouter();
  const isFullWidth = card.fullWidth;
  const iconName = ICON_MAPPING[card.icon] || card.icon;

  const handleCardPress = () => {
    const routeName = card.title.toLowerCase();
    router.push(`/${routeName}` as any);
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        isFullWidth && styles.fullWidthCard,
      ]}
      activeOpacity={0.8}
      onPress={handleCardPress}
    >
      <View style={styles.cardTopSection}>
        <View style={[styles.cardIcon, { backgroundColor: card.iconColor }]}>
          <MaterialIcons name={iconName as any} size={32} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.cardContent}>
        <ThemedText type="subtitle" style={[styles.cardTitle, { color: '#1A1A1A' }]}>
          {card.title}
        </ThemedText>
        <ThemedText style={[styles.cardDescription, { color: '#666666' }]}>
          {card.description}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    padding: screenWidth * 0.04,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  fullWidthCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 130,
  },
  cardTopSection: {
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  cardContent: {
    alignItems: 'center',
    flex: 1,
  },
  cardTitle: {
    fontSize: screenWidth > 400 ? 18 : 16,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: screenWidth > 400 ? 14 : 13,
    lineHeight: 20,
    opacity: 0.8,
    textAlign: 'center',
  },
});

