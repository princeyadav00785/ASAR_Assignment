import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SportsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SportsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SportsScreen;
