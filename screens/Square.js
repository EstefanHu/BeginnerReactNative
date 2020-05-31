import React, { useReducer } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { ColorCounter } from '../components/ColorCounter.js';

const COLOR_INCREMENT = 15;

// state === { red: 0, green: 0, blue: 0 }
// action === { colorToChange: 'red' || 'green' || 'blue'}
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

export const Square = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View style={{ alignItems: 'center' }}>
      <ColorCounter
        color="Red"
        onIncrease={
          () => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={
          () => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={
          () => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={
          () => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={
          () => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={
          () => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
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