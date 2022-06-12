/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './src/screens/home';
import Splash from './src/screens/splash';


const App = () => {

  return (


    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  )
}


export default App;
