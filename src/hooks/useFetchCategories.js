/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {getCategories} from '../helpers/getCategories';

export const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCategories = async () => {
    console.log('Se ejecuta el getAllCategories')
    const newCategories = getCategories();
    console.log('newCategories: ', newCategories)
    setCategories(newCategories);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log('Se ejecuta el useEffect')
    getAllCategories();
    console.log('Categorías en useFetchCategories: ', categories)
  }, []);

  return {
    categories,
    isLoading,
  };
};

