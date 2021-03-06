import React, { useState } from 'react';
import {
  Text,
  ScrollView,
} from 'react-native';
import useResults from '../hooks/useResults.js';

import { BusinesSearchBar } from '../components/BusinesSearchBar.js';
import { BusinessResultsLists } from '../components/BusinessResultsLists.js';

export const BusinesSearch = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <BusinesSearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <BusinessResultsLists results={filterResultsByPrice('$')} title='Cost Effective' />
        <BusinessResultsLists results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <BusinessResultsLists results={filterResultsByPrice('$$$')} title='Bit Exspencive' />
        <BusinessResultsLists results={filterResultsByPrice('$$$$')} title='Bit Exspencive' />
      </ScrollView>
    </>
  )
}