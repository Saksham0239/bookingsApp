import { View } from "react-native";
import { userSignUpScreenStyles } from "./UserSignUpScreen.styles";
import CustomInput from "../../../components/CustomInput/CustomInput";
import { Ionicons } from "@expo/vector-icons";

const UserSignUpScreen = () => {
  return (
    <View style={userSignUpScreenStyles.container}>
      <CustomInput
        labelText="first-name"
        iconName="person-circle-outline"
        iconType={Ionicons}
        iconSize={24}
        iconColor="black"
      />
    </View>
  );
};

export default UserSignUpScreen;
