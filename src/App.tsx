/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  // useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProvider } from './app/providers';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <NavigationProvider>
        <View><Text>Home screen</Text></View>
      </NavigationProvider>
    </NavigationContainer>
  );
}

export default App;
