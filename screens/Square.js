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

  const ADJUST_BY = 10;

  return (
    <View style={{ alignItems: 'center' }}>
      <ColorCounter
        color="Red"
        onIncrease={
          () => setRed(red + ADJUST_BY)}
        onDecrease={
          () => setRed(red - ADJUST_BY)}
      />
      <ColorCounter
        color="Green"
        onIncrease={
          () => setGreen(green + ADJUST_BY)}
        onDecrease={
          () => setGreen(green - ADJUST_BY)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={
          () => setBlue(blue + ADJUST_BY)}
        onDecrease={
          () => setBlue(blue - ADJUST_BY)}
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