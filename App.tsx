import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation';
//import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
  //  <SafeAreaProvider>
      <Navigation />
   // </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
