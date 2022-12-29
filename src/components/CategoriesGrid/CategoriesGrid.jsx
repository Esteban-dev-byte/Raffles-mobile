/* eslint-disable prettier/prettier */
import {CategoryItem} from '../CategoryItem/CategoryItem';
import {useFetchCategories} from '../../hooks/useFetchCategories';
import { View, Text } from 'react-native';

export const CategoriesGrid = () => {
  let {categories, isLoading} = useFetchCategories();
  console.log('Categories: ', categories);
  categories = []

  return (
    <>
    <View>
      <Text>Categorías</Text>
      {/* {isLoading && <h2>Cargando...</h2>} */}
    </View>

      <View className="card-grid">
        {console.log('View en Categories Grid')}
        {categories.map(category => (
          <CategoryItem key={category.idCategory} {...category} />
        ))}
      </View>
    </>
  );
};
