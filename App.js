import { StyleSheet, View } from "react-native";
import useApp from "./hooks/App/useApp";
import * as SplashScreen from "expo-splash-screen";
import CustomInput from "./components/CustomInput/CustomInput";
import CustomButton from "./components/CustomButton/CustomButton";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "./constants/commonConstants";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { onLayoutLoadHandler, isAppLoaded } = useApp();
  if (!isAppLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <GestureHandlerRootView>
          <View onLayout={onLayoutLoadHandler}>
            <CustomInput
              labelText="first-name"
              iconType={Ionicons}
              iconName="person-circle-sharp"
              iconSize={20}
              iconColor="black"
              secondaryIconType={Ionicons}
              secondaryIconName="person-circle-outline"
              secondaryIconSize={20}
              secondaryIconColor="black"
              errorText="please enter correct name"
            />

            <CustomButton
              containerStyles={{ marginTop: 50 }}
              title="submit"
              clickHandler={() => console.log("clicked")}
              bg={Colors.black}
            />
          </View>
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
