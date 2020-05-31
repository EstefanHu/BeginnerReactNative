import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Random Colors' onPress={() => navigation.navigate('RandomColors')}/>
      <Button title='Color Editor' onPress={() => navigation.navigate('ColorEditor')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})