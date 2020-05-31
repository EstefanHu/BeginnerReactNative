import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import useResults from '../hooks/useResults.js';

import { BusinesSearchBar } from '../components/BusinesSearchBar.js';
import { ResultsLists } from '../components/resultsLists.js';

export const BusinesSearch = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

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
      <ResultsLists results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsLists results={filterResultsByPrice('$$')} title='Bit Pricier' />
      <ResultsLists results={filterResultsByPrice('$$$')} title='Bit Exspencive' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});