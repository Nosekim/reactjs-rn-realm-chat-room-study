//MODULES
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//COMPONENTS
import HomeScreen from '../screens/home'

const Drawer = createDrawerNavigator();

export default function HomeStack() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  )
}
