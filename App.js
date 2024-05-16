import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import useApp from "./hooks/App/useApp";
import * as SplashScreen from "expo-splash-screen";
import MainStackNavigator from "./navigators/MainStackNavigator";
import AuthContextProvider from "./authContext/AuthContextProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CartContextProvider from "./cartContext/cartContextProvider";
import AppContextProvider from "./AppContext/appContextProvider";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { onLayoutLoadHandler, isAppLoaded } = useApp();
  if (!isAppLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} onLayout={onLayoutLoadHandler}>
        <AuthContextProvider>
          <AppContextProvider>
            <CartContextProvider>
              <MainStackNavigator />
            </CartContextProvider>
          </AppContextProvider>
        </AuthContextProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
