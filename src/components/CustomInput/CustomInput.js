/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor="#808080"
      style={styles.input}
      secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        color: '#000',
    },
})

export default CustomInput;