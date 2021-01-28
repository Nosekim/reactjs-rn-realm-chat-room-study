//MODULES
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//COMPONENTS
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import OnboardingScreen from '../screens/onboarding'

const LoginStack = createStackNavigator();

export default function HomeDrawer() {
  return (
    <LoginStack.Navigator headerMode="none" initialRouteName="Onboarding">
      <LoginStack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
      <LoginStack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
      <LoginStack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
    </LoginStack.Navigator>
  )
}
