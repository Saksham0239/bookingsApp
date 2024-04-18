import { Pressable, Text } from "react-native";
import { useState } from "react";
import { customButtonStyles } from "./CustomButton.styles";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { Colors } from "../../constants/commonConstants";

const CustomButton = ({ title, clickHandler, containerStyles, textStyles,bg=Colors.darkBlue }) => {
  const [bgColor, setBgColor] = useState(bg);
  const [fontColor, setFontColor] = useState(Colors.white);

  const gestureTap = Gesture.Tap().onBegin(() => {
    setBgColor(Colors.white);
    setFontColor(bg);
  });
  gestureTap.onEnd(() => {
    setBgColor(bg);
    setFontColor(Colors.white);
  });

  const gestureLongPress = Gesture.LongPress();

  gestureLongPress.onEnd(() => {
    setBgColor(bg);
    setFontColor(Colors.white);
  });

  return (
    <GestureDetector gesture={Gesture.Race(gestureTap, gestureLongPress)}>
      <Pressable
        style={{
          ...customButtonStyles.button,
          ...containerStyles,
          ...{ backgroundColor: bgColor },
        }}
        onPress={clickHandler}
      >
        <Text
          style={{
            ...customButtonStyles.text,
            ...textStyles,
            ...{ color: fontColor },
          }}
        >
          {title}
        </Text>
      </Pressable>
    </GestureDetector>

  );
};

export default CustomButton;
