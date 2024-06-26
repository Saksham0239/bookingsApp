import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
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
    showPassword,
    onChangeEmail,
    onChangeFirstName,
    onChangeLastName,
    onChangePassword,
    checkFormValidity,
    submitSignUpForm,
    toggleShowPassword,
    emailError,
    lastNameError,
    firstNameError,
    passwordError,
  } = useUserSignUpScreen();
  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={userSignUpScreenStyles.container}
      keyboardVerticalOffset={40}
    >
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
        secureTextEntry={!showPassword}
        iconType={AntDesign}
        iconSize={20}
        iconColor="black"
        secondaryIconType={Entypo}
        secondaryIconName={showPassword ? "eye-with-line" : "eye"}
        secondaryIconSize={20}
        value={password}
        onChange={onChangePassword}
        errorText={passwordError}
        toggleShowPassword={toggleShowPassword}
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
        clickHandler={submitSignUpForm}
        disabled={!checkFormValidity()}
        title="Sign Up"
        containerStyles={{ marginTop: 10 }}
      />
    </KeyboardAvoidingView>
  );
};

export default UserSignUpScreen;
