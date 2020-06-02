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
import { useNavigation } from '@react-navigation/native';

export const Blog = () => {
  const { state, deleteBlogPost } = useContext(Context);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title='Create Post' onPress={() => navigation.navigate('BlogCreate')} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('BlogPost', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.text}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name='trash' style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
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