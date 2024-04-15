import { TextInput, View, Text } from "react-native";
import { useState } from "react";
import { customInputStyles } from "./CustomInputStyles";
import { Ionicons } from "@expo/vector-icons";

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
    errorText
  } = props;

  const [value, setValue] = useState("");

  const onChangeText = (txt) => {
    setValue(txt);
  };

  return (
    <View styles={customInputStyles.inputContainer}>
      <Text style={customInputStyles.labelText}>{labelText}</Text>
      <View style={customInputStyles.formInput}>
        <props.iconType style={customInputStyles.icon} name={iconName} size={iconSize} color={iconColor} />
        <TextInput
          {...props}
          style={customInputStyles.inputStyles}
          value={value}
          onChangeText={onChangeText}
        />
        {secondaryIconType && (
          <props.secondaryIconType
            name={secondaryIconName}
            size={secondaryIconSize}
            color={secondaryIconColor}
          />
        )}
      </View>
      <Text style={customInputStyles.errorText}>{errorText}</Text>
    </View>
  );
};

export default CustomInput;
