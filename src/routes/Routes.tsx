import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// @ts-ignore
import AuthRoutes from './Auth.routes';

function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}

export default Routes;
