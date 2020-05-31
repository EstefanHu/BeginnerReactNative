import React, { useReducer } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { ColorCounter } from '../components/ColorCounter.js';

const COLOR_INCREMENT = 15;

// state === { red: 0, green: 0, blue: 0 }
// action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

export const ColorEditor = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View style={{ alignItems: 'center' }}>
      <ColorCounter
        color="Red"
        onIncrease={
          () => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={
          () => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={
          () => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={
          () => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={
          () => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={
          () => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
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