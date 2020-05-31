import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { ColorCounter } from '../components/ColorCounter.js';

export const Square = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const ADJUST_BY = 15;

  // color === 'red' || 'gree' || 'blue
  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      default:
        return;
    }
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <ColorCounter
        color="Red"
        onIncrease={
          () => setColor('red', ADJUST_BY)}
        onDecrease={
          () => setColor('red', -ADJUST_BY)}
      />
      <ColorCounter
        color="Green"
        onIncrease={
          () => setColor('green', ADJUST_BY)}
        onDecrease={
          () => setColor('green', -ADJUST_BY)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={
          () => setColor('blue', ADJUST_BY)}
        onDecrease={
          () => setColor('blue', -ADJUST_BY)}
      />
      <View style={{
        height: 300,
        width: 300,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }} />
    </View>
  )
}

const styles = StyleSheet.create({});