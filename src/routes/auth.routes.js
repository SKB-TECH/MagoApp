import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from "../Screens/authScreens/Splash";
import Started from "../Screens/authScreens/Started";
const Stack = createNativeStackNavigator();
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Loading"
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Loading" component={Splash} />
                <Stack.Screen name="Started" component={Started} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
