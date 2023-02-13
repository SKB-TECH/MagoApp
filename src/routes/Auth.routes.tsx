import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/authScreens/Splash';

const Stack = createStackNavigator();
const AuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Loading" component={Splash} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
