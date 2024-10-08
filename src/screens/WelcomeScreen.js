import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigation = useNavigation();

    useEffect(()=>{
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(()=> ring1padding.value = (ring1padding.value+hp(5)), 100);
        setTimeout(()=> ring2padding.value = (ring2padding.value+hp(5.5)), 300);

        setTimeout(()=> navigation.navigate('Home'), 2500)
    },[])

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
            source={require('../../assets/images/foody.png')}
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
