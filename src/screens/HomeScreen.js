import { View, Text, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {BellIcon} from 'react-native-heroicons/outline'

export default function HomeScreen() {
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

                <View style={tw`mx-4 space-y-2 mb-2`}>
                    <Text style={[tw`text-neutral-600`, { fontSize: hp(1.7)}]}>Bonjour, Fouad</Text>
                </View>
            </ScrollView>
        </View>
    )
}