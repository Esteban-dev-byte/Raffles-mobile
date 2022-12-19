/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignInScreen from '../views/SignInScreen';
import SignUpScreen from '../views/SignUpScreen';
import HomeScreen from '../views/HomeScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#3B71F3',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#3B71F3',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#3B71F3',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
