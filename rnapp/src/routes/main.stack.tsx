import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from './home.stack';
import LoginStack from './login.stack';
import { useAuth } from '../providers/auth.provider';

const MainStack = createStackNavigator();

export default function MainRoute() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none">
        {!user
          ? <MainStack.Screen name="LoginStack" component={LoginStack} />
          : <MainStack.Screen name="HomeStack" component={HomeStack} />
        }
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
