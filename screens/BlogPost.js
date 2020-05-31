import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const BlogPost = () => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
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