import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/authScreens/Splash';
import WelcomeOne from '../screens/authScreens/Welcom_one';
import Welcome_two from '../screens/authScreens/Welcom_two';
import Welcome_three from '../screens/authScreens/Welcom_three';
import Type_user from '../screens/authScreens/Type_user';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Loading" component={Splash} />
        <Stack.Screen name="Welcome" component={WelcomeOne} />
        <Stack.Screen name="Two" component={Welcome_two} />
        <Stack.Screen name="Three" component={Welcome_three} />
        <Stack.Screen name="Type" component={Type_user} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
