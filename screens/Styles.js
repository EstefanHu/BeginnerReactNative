import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export const Styles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>child 1</Text>
      <Text style={styles.text}>child 2</Text>
      <Text style={styles.text}>child 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200
  },
  text: {
    borderWidth: 1,
    borderColor: 'red',
  }
});