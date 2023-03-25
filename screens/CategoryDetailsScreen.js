import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Category Details</Text>
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

export default CategoryDetailsScreen;
