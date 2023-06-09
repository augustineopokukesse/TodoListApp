import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Todo App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
