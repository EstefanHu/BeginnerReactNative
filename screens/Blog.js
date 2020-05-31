import React, { useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { BlogContext } from '../providers/BlogProvider.js';

export const Blog = () => {
  const value = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text>{value}</Text>
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