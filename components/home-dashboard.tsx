import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const { width: screenWidth } = Dimensions.get('window');

interface DashboardCard {
  type: string;
  title: string;
  icon: string;
  iconColor: string;
  description: string;
  fullWidth?: boolean;
}

interface DashboardRow {
  row: DashboardCard[];
}

interface DashboardConfig {
  screen: string;
  header: {
    title: string;
    backgroundColor: string;
    textColor: string;
  };
  content: DashboardRow[];
}

interface HomeDashboardProps {
  config: DashboardConfig;
}

const ICON_MAPPING: Record<string, string> = {
  'dollar-sign': 'attach-money',
  'lightbulb': 'lightbulb',
  'plus-circle': 'add-circle',
  'paperclip': 'attach-file',
  'wifi': 'wifi',
};

const HomeDashboard: React.FC<HomeDashboardProps> = ({ config }) => {
  const router = useRouter();

  const handleCardPress = (card: DashboardCard) => {
    const routeName = card.title.toLowerCase();
    router.push(`/${routeName}` as any);
  };

  const renderCard = (card: DashboardCard, index: number) => {
    const isFullWidth = card.fullWidth;
    const iconName = ICON_MAPPING[card.icon] || card.icon;

    return (
      <TouchableOpacity
        key={`card-${index}`}
        style={[
          styles.card,
          isFullWidth && styles.fullWidthCard,
        ]}
        activeOpacity={0.8}
        onPress={() => handleCardPress(card)}
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

  const renderRow = (rowData: DashboardRow, rowIndex: number) => {
    const { row } = rowData;
    const hasFullWidthCard = row.some(card => card.fullWidth);

    return (
      <View
        key={`row-${rowIndex}`}
        style={[
          styles.row,
          hasFullWidthCard && styles.fullWidthRow,
        ]}
      >
        {row.map((card, cardIndex) => renderCard(card, cardIndex))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: config.header.backgroundColor }
        ]}
      >
        <ThemedText
          type="title"
          style={[
            styles.headerTitle,
            { color: config.header.textColor }
          ]}
        >
          {config.header.title}
        </ThemedText>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.contentContainer, { backgroundColor: '#F8F9FA' }]}>
          {config.content.map((rowData, rowIndex) =>
            renderRow(rowData, rowIndex)
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
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
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: screenWidth * 0.04, // Responsive padding
    paddingBottom: 32,
  },
  row: {
    flexDirection: 'row',
    marginBottom: screenWidth * 0.04,
    gap: screenWidth * 0.04,
  },
  fullWidthRow: {
    flexDirection: 'column',
    gap: 0,
  },
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

export default HomeDashboard;
