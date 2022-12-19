/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${json.token}` },
            body: JSON.stringify({ name, lastName, username, password, email}),
        };
        fetch('http://192.168.1.3:8080/users/', requestOptions)
            .then((response) => response.json())
            .then((json1) => {
            console.log(json1);
            navigation.navigate('SignIn');
        })
        .catch((error) => console.error(error));
    };


    const onSignInPressed = () => {
        navigation.navigate('SignIn');

    };

    const onTermsPressed = () => {
        console.warn('onTermsPressed');
    };

    const onPolicyPressed = () => {
        console.warn('onPolicyPressed');
    };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create una cuenta</Text>

      <CustomInput
      placeholder="Nombres"
      value={name}
      setValue={setName}
      />
      <CustomInput
      placeholder="Apellidos"
      value={lastName}
      setValue={setLastName}
      />
      <CustomInput
      placeholder="Nombre de usuario"
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
        <Text style={styles.link} onPress={onTermsPressed}> términos y condiciones</Text> y la
        <Text style={styles.link} onPress={onPolicyPressed}> Política de privacidad de Raffles</Text>
    </Text>

    <CustomButton
    text="Tienes una cuenta? Inicia sesion"
    onPress={onSignInPressed}
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
        color: 'gray',
        marginVertical: 10,
        maxHeight: 200,
    },
    link: {
        color: '#FDB075',
    },
});
export default SignUpScreen;
