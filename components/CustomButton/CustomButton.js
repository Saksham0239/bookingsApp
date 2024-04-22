import { Pressable, Text } from "react-native";
import { useState } from "react";
import { customButtonStyles } from "./CustomButton.styles";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { Colors } from "../../constants/commonConstants";

const CustomButton = ({
  title,
  clickHandler,
  containerStyles,
  textStyles,
  bg = Colors.darkBlue,
  disabled = false,
}) => {
  const [bgColor, setBgColor] = useState(bg);
  const [fontColor, setFontColor] = useState(Colors.white);

  const gestureTap = Gesture.Tap().onBegin(() => {
    if (!disabled) {
      setBgColor(Colors.white);
      setFontColor(bg);
    }
  });
  gestureTap.onEnd(() => {
    if (!disabled) {
      setBgColor(bg);
      setFontColor(Colors.white);
    }
  });

  const gestureLongPress = Gesture.LongPress();

  gestureLongPress.onEnd(() => {
    if (!disabled) {
      setBgColor(bg);
      setFontColor(Colors.white);
    }
  });

  return (
    <GestureDetector gesture={Gesture.Race(gestureTap, gestureLongPress)}>
      <Pressable
        style={
          !disabled
            ? {
                ...customButtonStyles.button,
                ...containerStyles,
                ...{ backgroundColor: bgColor },
              }
            : {
                ...customButtonStyles.button,
                ...containerStyles,
                ...{ backgroundColor: Colors?.lightGrey },
              }
        }
        onPress={disabled ? () => {} : clickHandler}
      >
        <Text
          style={
            !disabled
              ? {
                  ...customButtonStyles.text,
                  ...textStyles,
                  ...{ color: fontColor },
                }
              : {
                  ...customButtonStyles.text,
                  ...{ color: Colors.black },
                }
          }
        >
          {title}
        </Text>
      </Pressable>
    </GestureDetector>
  );
};

export default CustomButton;
