import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
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

export default CategoriesScreen;
