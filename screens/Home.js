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
      <Button title='Animation Card' onPress={() => navigation.navigate('AnimationCard')} />
      <Button title='Blog' onPress={() => navigation.navigate('Blog')} />
      <Button title='BussinesSearch' onPress={() => navigation.navigate('BusinesSearch')} />
      <Button title='Color Editor' onPress={() => navigation.navigate('ColorEditor')}/>
      <Button title='Random Colors' onPress={() => navigation.navigate('RandomColors')}/>
      <Button title='Counter' onPress={() => navigation.navigate('Counter')} />
      <Button title='Styles' onPress={() => navigation.navigate('Styles')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})