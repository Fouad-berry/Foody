import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import Animated from 'react-native-reanimated'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const CachedImage = (props)=> {
    const [cachedSource, setCachedSource] = useState(null);
    const {uri} = props;

    useEffect(() => {
        const getCachedImage = async () => {
            try{
                const CachedImageData = await AsyncStorage.getItem(uri);
                if (CachedImageData) {
                    setCachedSource({ uri: CachedImageData});
                }else {
                    const response = await fetch(uri);
                    const imageBlob = await response.blob();
                    const base64Data = await new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(imageBlob);
                        reader.onloadend = () => {
                            resolve(reader.result);
                        };
                    });
                    await AsyncStorage.setItem(uri, base64Data);
                    setCachedSource({ uri: base64Data});
                }
            } catch (error) {
                //console.log('Error cachin image',error);
                setCachedSource({uri});
            }
        };
        getCachedImage();
    }, []);
  return <Animated.Image source={cachedSource} {...props} />
}