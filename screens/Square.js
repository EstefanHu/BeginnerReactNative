import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { ColorCounter } from '../components/ColorCounter.js';

export const Square = () => {
  return (
    <View>
      <ColorCounter color="Red"/>
      <ColorCounter color="Green"/>
      <ColorCounter color="Blue"/>
    </View>
  )
}

const styles = StyleSheet.create({});