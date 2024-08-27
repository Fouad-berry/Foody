import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function Categories() {
  return (
    <View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                categories
            }
        </ScrollView>
    </View>
  )
}