import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import { mealData } from '../constants';
import Animated, {FadeInDown} from 'react-native-reanimated';


export default function Recipes({categories, meals}) {
  return (
    <View style={tw`mb-3 mx-4`}>
        <Text style={[tw`font-semibold text-neutral-600`, { fontSize: hp(3)}]}>Recettes</Text>
        <View >
            {
                categories.length==0 || meals.length==0? null: (
                    <MasonryList
                    data={meals}
                    keyExtractor={(item) => item.idMeal}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, i}) => <RecipeCard  item={item} index={i}/>}
    //                onRefresh={() => refetch({first: ITEM_CNT})}
                    onEndReachedThreshold={0.1}
    //                onEndReached={() => loadNext(ITEM_CNT)}
                />
                )
            }
        </View>
    </View>
  )
}

const RecipeCard = ({item, index})=>{
    let isEven = index%2==0;
    return(
        <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
            <Pressable
                style={[tw`flex justify-center mb-4 space-y-1`, { width: '100%', paddingLeft: isEven? 0:8, paddingRight: isEven?8:0}]}
            >
                <Image
                    source={{uri: item.strMealThumb}}
                    style={[tw`bg-black/5`, { width: '100%', height: index%3==0? hp (25): hp(35), borderRadius: 35}]}
                />
                <Text style={[tw`font-semibold ml-2 text-neutral-600`, {fontSize: hp(1.5)}]}>
                    {
                        item.strMeal.length>20? item.strMeal.slice(0,20)+'...': item.strMeal
                    }
                </Text >
            </Pressable>
        </Animated.View>
    )
}