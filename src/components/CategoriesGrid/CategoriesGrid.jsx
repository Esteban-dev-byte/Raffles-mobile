/* eslint-disable prettier/prettier */
import {CategoryItem} from '../CategoryItem/CategoryItem';
import { FlatList, View, Text } from 'react-native';
import React, { useState, useEffect } from "react";



export const CategoriesGrid = () => {

  const [categories, setCategories] = useState(null)

  const getCategories = async () => {
    let bearer_token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQYW5kYSIsImV4cCI6MTY3MjcxNzAxNywiaWF0IjoxNjcyNjgxMDE3fQ.4EiMdxQgyClTpM7RCvAZ5g6gTYYY2YQOrVevfD_c7sg';
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearer_token}`,
      }
    };
  
    let resp = await fetch('http://192.168.1.172:8080/categories/getAll', requestOptions);
    let json = await resp.json();

    setCategories(json);
    console.log('json:', json);
  }
  
  useEffect(() => {
    getCategories();
    console.log('Categorías en el estado: ', categories);
  }, [])
  


  return (
    <>
      <View>
        <FlatList
          data={categories}
          renderItem={({item}) => <CategoryItem categoryName={item.categoryName} description={item.description} />}
          keyExtractor={item => item.idCategory}/>
      </View>
    </>
  );
};
