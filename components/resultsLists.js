import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const ResultsLists = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});