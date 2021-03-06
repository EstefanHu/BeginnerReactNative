import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from './screens/Home.js';
import { RandomColor } from './screens/RandomColors.js';
import { ColorEditor } from './screens/ColorEditor.js';
import { Counter } from './screens/Counter.js';
import { Styles } from './screens/Styles.js';
import { BusinesSearch } from './screens/BusinesSearch.js';
import { BusinessResult } from './screens/BusinessResult.js';
import { Blog } from './screens/Blog.js';
import { BlogPost } from './screens/BlogPost.js';
import { Provider as BlogProvider } from './providers/BlogProvider.js';
import { BlogCreate } from './screens/BlogCreate.js';
import { BlogEdit } from './screens/BlogEdit.js';
import { AnimationCard } from './screens/AnimationCard.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AnimationCard'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AnimationCard' component={AnimationCard} />
        <Stack.Screen name='Blog' component={Blog} options={{ rightHeader: () => null }} />
        <Stack.Screen name='BlogPost' component={BlogPost} />
        <Stack.Screen name='BlogCreate' component={BlogCreate} />
        <Stack.Screen name='BlogEdit' component={BlogEdit} />
        <Stack.Screen name='BusinesSearch' component={BusinesSearch} />
        <Stack.Screen name='BusinessResult' component={BusinessResult} />
        <Stack.Screen name='Styles' component={Styles} />
        <Stack.Screen name='ColorEditor' component={ColorEditor} />
        <Stack.Screen name='RandomColors' component={RandomColor} />
        <Stack.Screen name='Counter' component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}