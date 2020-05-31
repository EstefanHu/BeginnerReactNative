import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const Blog = () => {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});