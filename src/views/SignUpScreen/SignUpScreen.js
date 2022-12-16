/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const {height} = useWindowDimensions();

    const onRegisterPressed = () => {
        console.warn('onRegisterPressed');
    };


    const onSignUpPressed = () => {
        console.warn('Sign up?');
    };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create una cuenta</Text>

      <CustomInput
      placeholder="Nombre completo"
      value={username}
      setValue={setUsername}
      />
      <CustomInput
      placeholder="Email"
      value={email}
      setValue={setEmail}
      />
      <CustomInput
      placeholder="Contraseña"
      value={password}
      setValue={setPassword}
      secureTextEntry
      />
      <CustomInput
      placeholder="Confirmar Contraseña"
      value={passwordRepeat}
      setValue={setPasswordRepeat}
      secureTextEntry
      />

    <CustomButton
    text="Registrate"
    onPress={onRegisterPressed}
    type="PRIMARY"
    />

    <Text style={styles.text}>
        Al inscribirte, aceptas nuestros
        <Text style={styles.link}>términos y condiciones</Text> y la
        <Text style={styles.link}>Política de privacidad de Raffles</Text>
    </Text>

    <CustomButton
    text="Tienes una cuenta? Inicia sesion"
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        width: 200,
        maxWidth: 300,
        maxHeight: 200,
    },
    link: {
        width: 200,
        maxWidth: 300,
        maxHeight: 200,
    },
});
export default SignUpScreen;
