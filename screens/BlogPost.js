import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Context } from '../providers/BlogProvider.js';
import { EvilIcons } from '@expo/vector-icons';

export const BlogPost = ({ navigation, route }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params?.id);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('BlogEdit')}>
        <EvilIcons name='pencil' size={35} />
      </TouchableOpacity>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
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