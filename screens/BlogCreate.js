import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const BlogCreate = ({ route }) => {


  return (
    <View style={styles.container}>
      <Text>create</Text>
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