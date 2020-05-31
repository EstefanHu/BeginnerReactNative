import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { BusinessResultsDetail } from './BusinessResultsDetail.js';

export const BusinessResultsLists = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('BusinessResult')}>
              <BusinessResultsDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  }
});