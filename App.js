import { StyleSheet, View } from "react-native";
import useApp from "./hooks/App/useApp";
import * as SplashScreen from "expo-splash-screen";
import CustomInput from "./components/CustomInput/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./constants/commonConstants";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { onLayoutLoadHandler, isAppLoaded } = useApp();
  if (!isAppLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutLoadHandler}>
      <CustomInput labelText="first-name"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding:20,
  },
});
