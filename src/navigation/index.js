/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignInScreen from '../views/SignInScreen/SignInScreen';
import SignUpScreen from '../views/SignUpScreen/SignUpScreen';
import HomeScreen from '../views/HomeScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
