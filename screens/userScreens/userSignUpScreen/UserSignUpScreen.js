import { View, Text } from "react-native";
import { userSignUpScreenStyles } from "./UserSignUpScreen.styles";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "../../../components/CustomButton/CustomButton";
import {
  Ionicons,
  Zocial,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../../../constants/commonConstants";
import { Colors } from "../../../constants/commonConstants";
import useUserSignUpScreen from "../../../hooks/user/useUserSignUpScreen";

const UserSignUpScreen = () => {
  const {
    firstName,
    lastName,
    email,
    password,
    onChangeEmail,
    onChangeFirstName,
    onChangeLastName,
    onChangePassword,
    checkFormValidity,
    emailError,
    lastNameError,
    firstNameError,
    passwordError,
  } = useUserSignUpScreen();
  const { navigate } = useNavigation();

  return (
    <View style={userSignUpScreenStyles.container}>
      <View style={userSignUpScreenStyles?.icon}>
        <FontAwesome5 name="opencart" size={80} color={Colors.darkBlue} />
      </View>
      <CustomInput
        labelText="first-name"
        iconName="person-circle-outline"
        iconType={Ionicons}
        iconSize={20}
        iconColor="black"
        value={firstName}
        onChange={onChangeFirstName}
        errorText={firstNameError}
      />

      <CustomInput
        labelText="last-name"
        iconName="person-circle-outline"
        iconType={Ionicons}
        iconSize={20}
        iconColor="black"
        value={lastName}
        onChange={onChangeLastName}
        errorText={lastNameError}
      />

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
        value={password}
        onChange={onChangePassword}
        errorText={passwordError}
      />

      <Text>
        Already have an account?{" "}
        <Text
          style={userSignUpScreenStyles?.linkText}
          onPress={() => navigate(RouteNames?.userRouteNames?.userLogin)}
        >
          Login
        </Text>
      </Text>
      <CustomButton
        disabled={!checkFormValidity()}
        title="Sign Up"
        containerStyles={{ marginTop: 10 }}
      />
    </View>
  );
};

export default UserSignUpScreen;
