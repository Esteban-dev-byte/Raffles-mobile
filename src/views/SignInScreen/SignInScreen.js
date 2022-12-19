/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from './../../../assets/images/Logo.png';
import { useNavigation } from '@react-navigation/native';



const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn('Sign in');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password}),
        };

        fetch('http://192.168.1.3:8080/generate-token', requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.token) {
        navigation.navigate('Home');
      }})
      .catch((error) => console.error(error));
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
        borderRadius: 150 / 2,
        borderWidth: 3,
        borderColor: '#3B71F3',
    },
});
export default SignInScreen;
