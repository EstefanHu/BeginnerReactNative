import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export const BusinesSearchBar = () => {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder='search'
        value={input}
        onChangeText={e => setInput(e.target.value)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  input: {
    flex: 1,
    fontSize: 18
  }
})