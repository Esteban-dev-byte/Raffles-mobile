/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Image, StyleSheet, useWindowDimensions, ToastAndroid} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from './../../../assets/images/Logo.png';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setToken } from '../../slices/NavSlice';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password}),
        };
        fetch('http://192.168.1.6:8080/generate-token', requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.token) {
          dispatch(setToken(json.token));
          navigation.navigate('Home');
        } else if (json.error){
          ToastAndroid.show(json.message, ToastAndroid.SHORT);
        }
      })
      .catch((error) => console.error(error));
    };

    const onForgotPasswordPressed = () => {
        console.warn('Forgot pass?');
    };

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    };

  return (
    <View style={styles.root}>
      <Image
      source={Logo}
      style={[styles.logo, {height: height * 0.3}]}
      />
      <CustomInput
      placeholder="Nombre de usuario"
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
    text="Inicia sesión"
    onPress={onSignInPressed}
    type="PRIMARY"
    />

    <CustomButton
    text="¿Olvidaste tu contraseña?"
    onPress={onForgotPasswordPressed}
    type="TERTIARY"
    />

    <CustomButton
    text="¿No tienes una cuenta? Créate una"
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
        borderWidth: 2,
        borderColor: '#FF0000',
    },
});
export default SignInScreen;
