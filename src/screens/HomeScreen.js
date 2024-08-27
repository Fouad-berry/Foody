import { View, Text, StatusBar, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/categories';

export default function HomeScreen() {

    const {activeCategory, setActiveCategory} = useState('Plats')
    return (
        <View style={tw`flex-1 bg-white`}>
            <StatusBar style="dark" />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
                style={tw`pt-8 mb-6`}
            >
                <View style={tw`mx-4 flex-row justify-between items-center mb-4`}>
                    <Image source={require('../../assets/images/avatar.png')} style={{height: hp(5), width: hp(5.5)}}/>
                    <BellIcon size={hp(4)} color="gray" />
                </View>

                <View style={tw`mx-4 mb-4`}>
                    <Text style={[tw`text-neutral-600 mb-2`, { fontSize: hp(2.2)}]}>Bonjour, Fouad</Text>
                    <View>
                        <Text style={[tw`text-neutral-600 font-semibold`, { fontSize: hp(3)}]}>Preparez votre propre nourriture</Text>
                    </View>
                    <Text style={[tw`text-neutral-600 font-semibold`, { fontSize: hp(3)}]}>
                        depuis chez <Text style={tw`text-amber-400`}>vous</Text>
                    </Text>
                </View>

                <View style={tw`mx-4 flex-row items-center rounded-full bg-black/5 p-[6px] mb-4`}>
                <TextInput
                    placeholder='Rechercher une recette'
                    placeholderTextColor={'gray'}
                    style={[tw`flex-1 text-base mb-1 pl-3 tracking-wider`, { fontSize: hp(2)}]}                    
                />
                    <View style={tw`bg-white rounded-full p-3`}>
                        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray"/>
                    </View>
                </View>
                <View>
                    <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </View>
            </ScrollView>
        </View>
    )
}