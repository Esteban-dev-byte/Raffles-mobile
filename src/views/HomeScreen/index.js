/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tabbar from "../../components/Tabbar";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Tabbar />
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