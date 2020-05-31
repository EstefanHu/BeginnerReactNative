import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import yelp from '../api/yelp.js';

export const BusinessResult = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params?.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return result ? (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image
            style={styles.image}
            source={{ uri: item }}
          />
        }}
      />
    </View>
  ) : null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 300
  }
});