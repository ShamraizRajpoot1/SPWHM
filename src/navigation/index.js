import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation'
import Auth from './Auth';
const Navigation = () => {
  const Stack = createNativeStackNavigator()
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Auth' component={Auth} />
      <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation