import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Context } from '../providers/BlogProvider.js';

export const BlogPost = ({ route }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params?.id);

  return (
    <View style={styles.container}>
      <Text>{blogPost.title}</Text>
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