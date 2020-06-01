import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../providers/BlogProvider.js';

export const Blog = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({ item }) => {
          return <View style={styles.row}>
            <Text style={styles.text}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather name='trash' style={styles.icon} />
            </TouchableOpacity>
          </View>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});