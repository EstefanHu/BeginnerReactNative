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
  const [results, setResult] = useState([]);

  return (
    <View style={styles.container}>
      <BusinesSearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={console.log}
      />
      <Text>{term}</Text>
      <Text>{results.lenfth}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});