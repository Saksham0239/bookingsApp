import { View } from "react-native";
import { mainScreenStyles } from "./MainScreen.styles";
import CustomButton from "../components/CustomButton/CustomButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../constants/commonConstants";
import { FontAwesome5 } from "@expo/vector-icons";

const MainScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={mainScreenStyles?.container}>
      <View style={mainScreenStyles?.icon}>
        <FontAwesome5 name="opencart" size={80} color="black" />
      </View>
      <CustomButton
        containerStyles={{ marginTop: 50 }}
        title="User Account"
        clickHandler={() => navigate(RouteNames?.userRouteNames?.userHome)}
        bg={Colors.black}
      />
      <CustomButton
        containerStyles={{ marginTop: 50 }}
        title="Seller Account"
        clickHandler={() => navigate(RouteNames?.sellerRouteNames?.sellerHome)}
        bg={Colors.black}
      />
    </View>
  );
};

export default MainScreen;
