/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui van las categorias</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDF4FF",
  },
  text: {
    color: "black"
  }
});

export default ProductScreen;