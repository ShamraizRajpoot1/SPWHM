import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/appFlow/Home'

const Stack = createNativeStackNavigator()

const App = () => {
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home} />
      {/* <Stack.Screen name='SignUp' component={SignUp} /> */}
    </Stack.Navigator>
  )
}

export default App