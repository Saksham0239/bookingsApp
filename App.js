import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import useApp from "./hooks/App/useApp";
import * as SplashScreen from "expo-splash-screen";
import MainStackNavigator from "./navigators/MainStackNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { onLayoutLoadHandler, isAppLoaded } = useApp();
  if (!isAppLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} onLayout={onLayoutLoadHandler}>
        <MainStackNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
