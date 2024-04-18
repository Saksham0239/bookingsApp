import { TextInput, View, Text } from "react-native";
import { useState } from "react";
import { customInputStyles } from "./CustomInputStyles";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/commonConstants";

const CustomInput = (props) => {
  const {
    labelText,
    iconName,
    iconColor,
    secondaryIconColor,
    secondaryIconType,
    secondaryIconName,
    iconSize,
    secondaryIconSize,
    errorText,
  } = props;

  const [value, setValue] = useState("");

  const onChangeText = (txt) => {
    setValue(txt);
  };

  return (
    <View styles={customInputStyles.inputContainer}>
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
          onChangeText={onChangeText}
        />
        {secondaryIconType && (
          <props.secondaryIconType
            name={
              secondaryIconName ? secondaryIconName : "person-circle-outline"
            }
            size={secondaryIconSize ? secondaryIconSize : 24}
            color={secondaryIconColor ? secondaryIconColor : Colors.black}
          />
        )}
      </View>
      <Text style={customInputStyles.errorText}>{errorText}</Text>
    </View>
  );
};

export default CustomInput;
