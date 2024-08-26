import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import tw from 'twrnc'

export default function WelcomeScreen() {
  return (
    <View className=""
    style={tw`flex-1 justify-center items-center space-y-10 bg-amber-500`}>
      <StatusBar style="light" />
      <View  style={tw`bg-white/20 rounded-full`} >
        <View style={tw`bag-white/20 rounded-ful`}>
            <Image source={require('../../assets/images/foodyhd.png')}
                style={{width:200, height:200}} />
        </View>
      </View>
    </View>
  )
}