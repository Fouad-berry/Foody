import { View, Text, StatusBar, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';
export default function HomeScreen() {

    const [activeCategory, setActiveCategory] = useState('Plats');
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        getCategories();
        getRecipes();
    },[])

    const handleChangeCategory = category=>{
        getRecipes(category);
        setActiveCategory(category);
        setMeals([]);
    }

    const getCategories = async ()=>{
        try{
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            //console.log('got categories:', response.data);
            if(response && response.data){
                setCategories(response.data.categories);
            }
        }catch(err){
            console.log('errors:', err.message);
        }
    }

    const getRecipes = async (category="Beef")=>{
        try{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            //console.log('got recipes:', response.data);
            if(response && response.data){
                setMeals(response.data.meals);
            }
        }catch(err){
            console.log('errors:', err.message);
        }
    }

    return (
        <View style={tw`flex-1 bg-white`}>
            <StatusBar style="dark" />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
                style={tw`mb-6 pt-2`}
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
                    { categories.length>0 && <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />}
                </View>

                <View>
                    <Recipes meals={meals} categories={categories} />
                </View>
            </ScrollView>
        </View>
    )
}