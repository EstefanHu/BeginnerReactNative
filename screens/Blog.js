import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
} from 'react-native';
import { BlogContext } from '../providers/BlogProvider.js';

export const Blog = () => {
  const { blogPosts, addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
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