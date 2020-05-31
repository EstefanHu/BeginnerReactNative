import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from './screens/Home.js';
import { RandomColor } from './screens/RandomColors.js';
import { ColorEditor } from './screens/ColorEditor.js';
import { Counter } from './screens/Counter.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RandomColors' component={RandomColor} />
        <Stack.Screen name='ColorEditor' component={ColorEditor} />
        <Stack.Screen name='Counter' component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}