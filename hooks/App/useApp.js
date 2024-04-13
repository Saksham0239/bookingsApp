import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


const useApp = ()=>{

    const [fontsLoaded] = useFonts({
        "roboto-black":require('../../assets/fonts/Roboto/Roboto-Black.ttf'),
        "roboto-blackItalic":require('../../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
        "roboto-bold":require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
        "roboto-boldItalic":require('../../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
        "roboto-italic":require('../../assets/fonts/Roboto/Roboto-Italic.ttf'),
        "roboto-light":require('../../assets/fonts/Roboto/Roboto-Light.ttf'),
        "roboto-lightItalic":require('../../assets/fonts/Roboto/Roboto-LightItalic.ttf'),
        "roboto-medium":require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
        "roboto-mediumItalic":require('../../assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
        "roboto-regular":require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
        "roboto-thin":require('../../assets/fonts/Roboto/Roboto-Thin.ttf'),
        "roboto-thinItalic":require('../../assets/fonts/Roboto/Roboto-ThinItalic.ttf'),
    });

    useEffect(()=>{
        onLayoutLoadHandler();
    },[fontsLoaded]);


    const onLayoutLoadHandler = ()=>{
            if(fontsLoaded){
                SplashScreen.hideAsync();
            }
    }

    return {
        onLayoutLoadHandler
    }
}

export default useApp;