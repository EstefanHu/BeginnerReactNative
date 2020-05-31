import React, { useReducer } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { ColorCounter } from '../components/ColorCounter.js';

COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    
}

export const Square = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });


  return (
    <View style={{ alignItems: 'center' }}>
      <ColorCounter
        color="Red"
        onIncrease={
          () => }
        onDecrease={
          () => }
      />
      <ColorCounter
        color="Green"
        onIncrease={
          () => }
        onDecrease={
          () => }
      />
      <ColorCounter
        color="Blue"
        onIncrease={
          () =>}
        onDecrease={
          () =>}
      />
      <View style={{
        height: 300,
        width: 300,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }} />
      <Text>rgb({red}, {green}, {blue})</Text>
    </View>
  )
}

const styles = StyleSheet.create({});