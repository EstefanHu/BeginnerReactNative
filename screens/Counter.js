import React, { useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Text>{count}</Text>
      <Button title={'Increase'} onPress={() => setCount(count => count + 1)} />
      <Button title={'Decrease'} onPress={() => setCount(count => count - 1)} />
    </View>
  )
}