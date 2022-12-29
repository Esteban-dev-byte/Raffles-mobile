import { View, Text } from "react-native"

export const CategoryItem = ({ categoryName, description, id }) => {

  console.log('Entra a CategoryItem')


    return (
      <>
      <View className="card">
        <Text>{description}</Text>
        {console.log('Category Item div')}
          {/* <img src={ url } alt={ title } /> */}
          <Text>{ categoryName }</Text>
      </View>
      </>
    )
  }
  