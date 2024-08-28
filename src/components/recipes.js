import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import { mealData } from '../constants';

export default function Recipes() {
  return (
    <View style={tw`mb-3 mx-4`}>
        <Text style={[tw`font-semibold text-neutral-600`, { fontSize: hp(3)}]}>Recettes</Text>
        <View>
            <MasonryList
                data={mealData}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item, i}) => <RecipeCard  item={item} index={i}/>}
//                onRefresh={() => refetch({first: ITEM_CNT})}
                onEndReachedThreshold={0.1}
//                onEndReached={() => loadNext(ITEM_CNT)}
            />
        </View>
    </View>
  )
}

const RecipeCard = ({item, index})=>{
    let isEven = index%2==0;
    return(
        <View>
            <Pressable
                style={[tw`flex justify-center mb-4 space-y-1`, { width: '100%', paddingLeft: isEven? 0:8, paddingRight: isEven?8:0}]}
            >
                <Image
                    source={{uri: item.image}}
                    style={[tw`bg-black/5`, { width: '100%', height: hp(35), borderRadius: 35}]}
                />
            </Pressable>
        </View>
    )
}