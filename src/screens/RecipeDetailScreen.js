import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc';
import { CachedImage } from '../helpers/image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronLeftIcon, ClockIcon, FireIcon, Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Loading from '../components/loading';
import YoutubeIframe from 'react-native-youtube-iframe';


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

const ingredientsIndexes = (meal)=>{
  if(!meal) return [];
  let indexes = [];
  for(let i=1; i<=20; i++){
    if(meal['strIngredient'+i]){
      indexes.push(i);
    }
  }

  return indexes;
}

const getYoutubevideoId = url=>{
  const regex = /[?&]v=([^&]+)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}


  return (
    <ScrollView
      style={tw`bg-white flex-1`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}
    >
      <StatusBar style="light" />
      <View style={tw`flex-row justify-center`}>
        <CachedImage
            uri={item.strMealThumb}
            sharedTransitionTag={item.strMeal}
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
        <View style={tw`px-4 flex justify-between pt-8`}>
          <View style={tw`ml-2`}>
            <Text style={[tw`font-bold flex-1 text-neutral-700 mb-2`, { fontSize: hp(3)}]}>
                {meal?.strMeal}
            </Text>
            <Text style={[tw`font-medium flex-1 text-neutral-500 mb-2`, { fontSize: hp(2)}]}>
                {meal?.strArea}
            </Text>
          </View>

          <View style={tw`flex-row justify-around mb-2`}>
            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View
                style={[tw`bg-white rounded-full flex items-center justify-center`, { height: hp(6.5), width: hp(6.5)}]}
              >
                  <ClockIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2 ml-1`}>
                  <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(2)}]}>
                      35
                  </Text>
                  <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(1.3)}]}>
                      Mins
                  </Text>
              </View>
            </View>
            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View
                style={[tw`bg-white rounded-full flex items-center justify-center`, { height: hp(6.5), width: hp(6.5)}]}
              >
                  <UsersIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2 ml-1`}>
                  <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(2)}]}>
                      03
                  </Text>
                  <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(1.3)}]}>
                      portions
                  </Text>
              </View>
            </View>
            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View
                style={[tw`bg-white rounded-full flex items-center justify-center`, { height: hp(6.5), width: hp(6.5)}]}
              >
                  <FireIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2 ml-1`}>
                  <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(2)}]}>
                      103
                  </Text>
                  <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(1.3)}]}>
                      Calorie
                  </Text>
              </View>
            </View>
            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View
                style={[tw`bg-white rounded-full flex items-center justify-center`, { height: hp(6.5), width: hp(6.5)}]}
              >
                  <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2 ml-1`}>
                  <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(2)}]}>
                      
                  </Text>
                  <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(1.3)}]}>
                      Facile
                  </Text>
              </View>
            </View>
          </View>
          
          <View style={tw`ml-1`}>
              <Text style={[tw`font-bold flex-1 text-neutral-700 mb-1`, { fontSize: hp(2.5)}]}>
                  Ingredients
              </Text>
          <View style={tw`ml-2 ml-3`}>
              {
                ingredientsIndexes(meal).map(i=>{
                  return (
                    <View key={i} style={tw`flex-row pt-2`}>
                        <View style={[tw`bg-amber-300 rounded-full`, { height: hp(1.5), width: hp(1.5)}]} />
                        <View style={tw`flex-row ml-2`}>
                            <Text style={[tw`font-extrabold text-neutral-700`, {fontSize: hp(1.7)}]}>{meal['strMeasure'+i]}</Text>
                            <Text style={[tw`font-medium text-neutral-600 ml-2`, {fontSize: hp(1.7)}]}>{meal['strIngredient'+i]}</Text>
                        </View>
                    </View>
                  )
                })
              }
          </View>

        <View style={tw`ml-1`}>
              <Text style={[tw`font-bold flex-1 text-neutral-700 mb-1`, { fontSize: hp(2.5)}]}>
                  Instructions
              </Text>
              <Text style={[tw`text-neutral-700 mb-2`, { fontSize: hp(1.6)}]}>
                  {
                    meal?.strInstructions
                  }
              </Text>
          </View>
          
          {/* Recettes vidéos */}
          {
              meal.strYoutube && (
                <View style={tw`ml-1`}>
                    <Text style={[tw`font-bold flex-1 text-neutral-700 mb-1`, { fontSize: hp(2.5)}]}>
                      Video de la recette
                    </Text>
                    <View>
                        <YoutubeIframe
                            videoId={getYoutubevideoId(meal.strYoutube)}
                            height={hp(30)}
                        />
                    </View>
                </View>
              )
          }
        </View>


      </View>
          
        )
      }
    </ScrollView>
  )
}