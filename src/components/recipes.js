import { View, Text } from 'react-native'
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
    return(
        <View>
            <Text>Recipe</Text>
        </View>
    )
}