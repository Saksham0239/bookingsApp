import { View, Text } from "react-native";
import { userLoginScreenStyles } from "./UserLoginScreen.styles";
import CustomInput from "../../../components/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { Colors, RouteNames } from "../../../constants/commonConstants";
import { Entypo, FontAwesome5, Zocial, AntDesign } from "@expo/vector-icons";
import CustomButton from "../../../components/CustomButton/CustomButton";
import useUserLoginScreen from "../../../hooks/user/useUserLoginScreen";

const UserLoginScreen = () => {
  const { navigate } = useNavigation();
  const {
    submitLoginForm,
    checkFormValidity,
    email,
    password,
    emailError,
    passwordError,
    showPassword,
    onChangeEmail,
    onChangePassword,
    toggleShowPassword,
  } = useUserLoginScreen();
  return (
    <View style={userLoginScreenStyles.container}>
      <View style={userLoginScreenStyles.icon}>
        <FontAwesome5 name="opencart" size={80} color={Colors.darkBlue} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <CustomInput
          labelText="email"
          iconName="email"
          iconType={Zocial}
          iconSize={20}
          iconColor="black"
          keyboardType="email-address"
          value={email}
          onChange={onChangeEmail}
          errorText={emailError}
          containerStyles={{ marginBottom: 20 }}
        />
      </View>
      <View style={{ marginBottom: 5 }}>
        <CustomInput
          labelText="password"
          iconName="lock1"
          secureTextEntry={!showPassword}
          iconType={AntDesign}
          iconSize={20}
          iconColor="black"
          secondaryIconType={Entypo}
          secondaryIconName={showPassword ? "eye-with-line" :"eye"}
          secondaryIconSize={20}
          value={password}
          onChange={onChangePassword}
          errorText={passwordError}
          toggleShowPassword={toggleShowPassword}
        />
      </View>
      <Text>
        New to App?{" "}
        <Text
          style={userLoginScreenStyles?.linkText}
          onPress={() => navigate(RouteNames?.userRouteNames?.userSignUp)}
        >
          SignUp
        </Text>
      </Text>

      <CustomButton
        disabled={!checkFormValidity()}
        clickHandler={submitLoginForm}
        title="Login"
        containerStyles={{ marginTop: 10 }}
      />
    </View>
  );
};

export default UserLoginScreen;
