import React from "react";
import { StyleSheet, View, Text, Image } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  }, 
  icon: {
    color: "#E0E0E0",
    
  }
})

export const CategoryItem = ({ categoryName, description, id }) => {

  console.log('Entra a CategoryItem')


    return (
        <View style={styles.container}>
          <Image source={{uri: 'https://picsum.photos/200'}} style={styles.image} />
          <Text>{ categoryName }</Text>
          <Icon name="rocket" size={30} color="#900" />
        </View>
    )
  }
  