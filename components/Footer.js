import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#aaa',
  },
});
