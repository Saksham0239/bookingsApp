import { View, Text } from "react-native";
import { userLoginScreenStyles } from "./UserLoginScreen.styles";
import CustomInput from "../../../components/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { Colors, RouteNames } from "../../../constants/commonConstants";
import { Entypo, FontAwesome5, Zocial, AntDesign } from "@expo/vector-icons";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { userSignUpScreenStyles } from "../userSignUpScreen/UserSignUpScreen.styles";

const UserLoginScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={userLoginScreenStyles.container}>
      <View style={userLoginScreenStyles.icon}>
        <FontAwesome5 name="opencart" size={80} color={Colors.darkBlue} />
      </View>
      <CustomInput
        labelText="email"
        iconName="email"
        iconType={Zocial}
        iconSize={20}
        iconColor="black"
        keyboardType="email-address"
      />

      <CustomInput
        labelText="password"
        iconName="lock1"
        secureTextEntry={true}
        iconType={AntDesign}
        iconSize={20}
        iconColor="black"
        secondaryIconType={Entypo}
        secondaryIconName="eye"
        secondaryIconSize={20}
      />

      <Text>
        New to App?{" "}
        <Text
          style={userLoginScreenStyles?.linkText}
          onPress={() => navigate(RouteNames?.userRouteNames?.userSignUp)}
        >
          SignUp
        </Text>
      </Text>

      <CustomButton title="Login" containerStyles={{ marginTop: 10 }} />
    </View>
  );
};

export default UserLoginScreen;
