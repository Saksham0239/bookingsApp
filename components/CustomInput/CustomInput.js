import { TextInput, View, Text } from "react-native";
import { useState } from "react";
import { customInputStyles } from "./CustomInputStyles";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/commonConstants";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomInput = (props) => {
  const {
    containerStyles,
    labelText,
    iconName,
    iconColor,
    secondaryIconColor,
    secondaryIconType,
    secondaryIconName,
    iconSize,
    secondaryIconSize,
    errorText,
    onChange,
    value,
    toggleShowPassword,
  } = props;

  return (
    <View styles={{ ...customInputStyles.inputContainer, ...containerStyles }}>
      <Text style={customInputStyles.labelText}>{labelText}</Text>
      <View style={customInputStyles.formInput}>
        {props.iconType && (
          <props.iconType
            style={customInputStyles.icon}
            name={iconName ? iconName : "person-circle-outline"}
            size={iconSize ? iconSize : 24}
            color={iconColor ? iconColor : Colors.black}
          />
        )}
        <TextInput
          {...props}
          style={customInputStyles.inputStyles}
          value={value}
          onChangeText={onChange}
        />
        {secondaryIconType && (
          <TouchableOpacity onPress={toggleShowPassword}>
            <props.secondaryIconType
              name={
                secondaryIconName ? secondaryIconName : "person-circle-outline"
              }
              size={secondaryIconSize ? secondaryIconSize : 24}
              color={secondaryIconColor ? secondaryIconColor : Colors.black}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={customInputStyles.errorText}>{errorText}</Text>
    </View>
  );
};

export default CustomInput;
