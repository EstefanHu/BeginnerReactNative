import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import { BlogContext } from '../providers/BlogProvider.js';

export const Blog = () => {
  const value = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={value => value}
        data={value}
        renderItem={({ item }) => {
          return <Text>{item}</Text>
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