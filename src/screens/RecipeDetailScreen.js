import { View, Text } from 'react-native'
import React from 'react'

export default function RecipeDetailScreen(props) {
  let item = props.route.param;

  
  return (
    <View>
      <Text>RecipeDetailScreen</Text>
    </View>
  )
}