/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from '../SignInScreen/SignInScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Productos" component={SignInScreen} />
        <Tab.Screen name="Perfil" component={SignUpScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDF4FF",
    justifyContent: "flex-end",
  },
});

export default Navigation;