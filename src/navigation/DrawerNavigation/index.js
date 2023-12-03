import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import FindFood from '../../screens/appFlow/FindFood';
//import ReserveFood from '../../screens/appFlow/ReservedFood';
//import DrawerContent from '../../components/DrawerContent';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { View } from 'react-native';
//import { appStyles } from '../../services/utilities/appStyles';
import Home from '../../screens/appFlow/Home';
import DrawerContent from '../../components/DrawerContent';
import AddDevice from '../../screens/appFlow/AddDevice';
import ProfileStack from '../App/ProfileStack';
import PlantStack from '../App/PlantStack';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
          width: responsiveWidth(80),
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen name="PlantStack" component={PlantStack} />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} />
      <Drawer.Screen name="AddDevice" component={AddDevice} />
    
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
