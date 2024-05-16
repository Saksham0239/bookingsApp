import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";

const appInitialState = {
  isAppLoaded: false,
};

const useApp = () => {
  const [state, dispatchAppState] = useReducer(
    defaultStateReducer,
    appInitialState,
  );

  const { isAppLoaded } = state;

  const prepareFonts = async () => {
    try {
      await Font.loadAsync({
        "roboto-black": require("../../assets/fonts/Roboto/Roboto-Black.ttf"),
        "roboto-blackItalic": require("../../assets/fonts/Roboto/Roboto-BlackItalic.ttf"),
        "roboto-bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
        "roboto-boldItalic": require("../../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
        "roboto-italic": require("../../assets/fonts/Roboto/Roboto-Italic.ttf"),
        "roboto-light": require("../../assets/fonts/Roboto/Roboto-Light.ttf"),
        "roboto-lightItalic": require("../../assets/fonts/Roboto/Roboto-LightItalic.ttf"),
        "roboto-medium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
        "roboto-mediumItalic": require("../../assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
        "roboto-regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
        "roboto-thin": require("../../assets/fonts/Roboto/Roboto-Thin.ttf"),
        "roboto-thinItalic": require("../../assets/fonts/Roboto/Roboto-ThinItalic.ttf"),
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatchAppState({
        payload: {
          isAppLoaded: true,
        },
      });
    }
  };

  useEffect(() => {
    prepareFonts();
  }, []);

  const onLayoutLoadHandler = async () => {
    if (isAppLoaded) {
      await SplashScreen.hideAsync();
    }
  };

  return {
    onLayoutLoadHandler,
    isAppLoaded,
  };
};

export default useApp;
