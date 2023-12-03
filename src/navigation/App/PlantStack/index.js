import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../../screens/appFlow/Home'
import PlantInfo from '../../../screens/appFlow/PlantsInfo/Index'

const Stack = createNativeStackNavigator()

const PlantStack = () => {
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home} /> 
      <Stack.Screen name='PlantInfo' component={PlantInfo} />
    </Stack.Navigator>
  )
}

export default PlantStack