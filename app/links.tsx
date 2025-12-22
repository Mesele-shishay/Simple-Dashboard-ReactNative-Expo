import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function LinksScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>Links</ThemedText>
        <ThemedText style={styles.description}>
          Manage and organize your important links and resources.
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1A1A1A',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666666',
    lineHeight: 24,
  },
});
