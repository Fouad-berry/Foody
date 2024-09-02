import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { CachedImage } from '../helpers/image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';


export default function RecipeDetailScreen(props) {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false)


  return (
    <ScrollView
      style={tw`bg-white flex-1`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}
    >
      <StatusBar style={"light"} />
      <View style={tw`flex-row justify-center`}>
        <CachedImage
            uri={item.strMealThumb}
            style={{width: wp(98), height: hp(50), borderRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
        />
      </View>

      <View style={tw`w-full absolute flex-row justify-between items-center pt-9`}>
        <TouchableOpacity style={tw`p-2 rounded-full ml-5 bg-white`}>
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-2 rounded-full mr-5 bg-white`}>
          <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavourite? "red": "gray"} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}