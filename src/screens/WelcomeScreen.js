import { View, Text, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeScreen() {
  return (
    <View
      style={tw`flex-1 justify-center items-center bg-amber-500`}
    >
      <StatusBar style="light" />
      <View
        style={[tw`bg-white/20 rounded-full mb-10`, { padding: hp(5.5) }]}
      >
        <View
          style={[tw`bg-white/20 rounded-full`, { padding: hp(5) }]}
        >
          <Image
            source={require('../../assets/images/foodyhd.png')}
            style={{ width: hp(20), height: hp(20) }}
          />
        </View>
      </View>

      <View style={tw`flex items-center`}>
        <Text
          style={[tw`font-bold text-white mb-2`, { fontSize: hp(7), letterSpacing: hp(0.1) }]}
        >
          Foody
        </Text>
        <Text
          style={[tw`font-medium text-white`, { fontSize: hp(2), letterSpacing: hp(0.05) }]}
        >
          Food, recipe for us
        </Text>
      </View>
    </View>
  );
}
