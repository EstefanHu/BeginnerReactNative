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
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('./search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Seattle'
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something Went Wrong');
    }
  }

  return (
    <View style={styles.container}>
      <BusinesSearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
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