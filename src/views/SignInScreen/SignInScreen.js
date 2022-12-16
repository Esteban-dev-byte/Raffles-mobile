/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Logo from './../../../assets/images/Logo.png';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../HomeScreen';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn('Sign in');
        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        console.warn('Forgot pass?');
    };

    const onSignUpPressed = () => {
        console.warn('Sign up?');
        navigation.navigate('SignUp');
    };

  return (
    <View style={styles.root}>
      <Image
      source={Logo}
      style={[styles.logo, {height: height * 0.3}]}
      />

      <CustomInput
      placeholder="Username"
      value={username}
      setValue={setUsername}
      />
      <CustomInput
      placeholder="Contraseña"
      value={password}
      setValue={setPassword}
      secureTextEntry
      />

    <CustomButton
    text="Inicia sesion"
    onPress={onSignInPressed}
    type="PRIMARY"
    />

    <CustomButton
    text="Olvidaste tu contraseña?"
    onPress={onForgotPasswordPressed}
    type="TERTIARY"
    />

    <CustomButton
    text="No tienes una cuenta? Create una"
    onPress={onSignUpPressed}
    type="TERTIARY"
    />

    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 200,
        maxWidth: 300,
        maxHeight: 200,
    },
});
export default SignInScreen;
