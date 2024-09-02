import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc';
import { CachedImage } from '../helpers/image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Loading from '../components/loading';


export default function RecipeDetailScreen(props) {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false)
  const navigation = useNavigation();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getMealData(item.idMeal);
  }, [])

  const getMealData = async (id)=>{
    try{
        const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        console.log('got meal data:', response.data);
          if(response && response.data){
            setMeal(response.data.meals[0]);
            setLoading(false);
        }
      }catch(err){
        console.log('errors:', err.message);
    }
}


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

      <View style={tw`w-full absolute flex-row justify-between items-center pt-6`}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={tw`p-2 rounded-full ml-5 bg-white`}>
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setIsFavourite(!isFavourite)} style={tw`p-2 rounded-full mr-5 bg-white`}>
          <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavourite? "red": "gray"} />
        </TouchableOpacity>
      </View>

      {
        loading? (
          <Loading size="large" style={tw`mt-16`} />
        ):(
        <View style={tw`px-4 flex justify-between ml-4 pt-8`}>
          <View style={tw`ml-2`}>
            <Text style={[tw`font-bold flex-1 text-neutral-700 mb-2`, { fontSize: hp(3)}]}>
                {meal?.strMeal}
            </Text>
            <Text style={[tw`font-medium flex-1 text-neutral-500`, { fontSize: hp(2)}]}>
                {meal?.strArea}
            </Text>
          </View>

          <View style={tw`flex-row justify-around`}>
            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              
            </View>
          </View>
          
        </View>

          
        )
      }
    </ScrollView>
  )
}