import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { BusinesSearchBar } from '../components/BusinesSearchBar.js';

export const BusinesSearch = () => {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.container}>
      <BusinesSearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} />
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});