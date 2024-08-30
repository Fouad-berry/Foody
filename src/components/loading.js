import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View style={tw`flex-1 flex justify-center items-center`}>
      <ActivityIndicator {...props}/>
    </View>
  )
}