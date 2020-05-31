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

  return (
    <View>
      <ColorCounter color="Red" onIncrease={() => setRed(red + 1)} onDecrease={() => setRed(red - 1)} />
      <ColorCounter color="Green" onIncrease={() => setGreen(green + 1)} onDecrease={() => setGreen(green - 1)} />
      <ColorCounter color="Blue" onIncrease={() => setBlue(blue + 1)} onDecrease={() => setBlue(blue - 1)} />
    </View>
  )
}

const styles = StyleSheet.create({});