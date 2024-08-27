import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categoryData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';


export default function Categories() {
  return (
    <View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw`space-x-4`}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                categoryData.map((cat, index)=>{
                    return (
                        <TouchableOpacity
                            key={index}
                            style={[tw`flex items-center mb-2`, { marginRight: wp(4) }]}                        >
                            <View style={tw`rounded=full p-[6px]`}>
                                <Image 
                                    source={cat.image}
                                    style={[tw`rounded-full`, { width: hp(8), height: hp(8)}]}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}