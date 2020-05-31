import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import yelp from '../api/yelp.js';

import { BusinesSearchBar } from '../components/BusinesSearchBar.js';

export const BusinesSearch = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('./search',{
      params: {
        limit: 50,
        term,
        location: 'Seattle'
      }
    });
    setResults(response.data.businesses);
  }

  return (
    <View style={styles.container}>
      <BusinesSearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text>{term}</Text>
      <Text>{results.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});