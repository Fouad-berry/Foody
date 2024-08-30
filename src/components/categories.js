import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categoryData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Animated, {FadeInDown} from 'react-native-reanimated';


export default function Categories({categories, activeCategory, setActiveCategory}) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw`space-x-4`}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                categories.map((cat, index)=>{
                    let isActive = cat.strCategory==activeCategory;
                    let activeButtonClass = isActive? tw`bg-amber-400`: tw`bg-black/10`;
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={()=>handleChangeCategory(cat.strCategory)}
                            style={[tw`flex items-center mb-2`, { marginRight: wp(4) }]}                        >
                            <View style={[tw`rounded-full p-[6px]`, activeButtonClass]}>
                                <Image 
                                    source={{uri: cat.strCategoryThumb}}
                                    style={[tw`rounded-full`, { width: hp(6), height: hp(6)}]}
                                />
                            </View>
                            <View>
                                <Text style={[tw`text-neutral-600`, { fontSize: hp(1.6)}]}                                >
                                    {cat.strCategory}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    </Animated.View>
  )
}