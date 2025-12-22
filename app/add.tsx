import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ThemedText } from '@/components/themed-text';

export default function AddScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Add New</ThemedText>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <View style={[styles.icon, { backgroundColor: '#009688' }]}>
              <MaterialIcons name="add-circle" size={40} color="#FFFFFF" />
            </View>
          </View>
          <ThemedText type="title" style={styles.title}>Add New</ThemedText>
          <ThemedText style={styles.description}>
            Add new items, create content, or start something new.
          </ThemedText>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFC107',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1A1A1A',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    lineHeight: 24,
    maxWidth: 300,
  },
});
