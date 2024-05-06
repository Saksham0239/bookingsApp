import { Pressable, Text, View } from "react-native";
import { cardButtonStyles } from "./CardButton.styles";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const CardButton = ({ amount }) => {
  return (
    <View style={cardButtonStyles?.container}>
      <View style={cardButtonStyles?.leftContainer}>
        {amount === 1 ? (
          <Pressable>
            <MaterialIcons name="delete-outline" size={18} color="black" />
          </Pressable>
        ) : (
          <Pressable>
            <AntDesign name="minus" size={18} color="black" />
          </Pressable>
        )}
      </View>
      <View style={cardButtonStyles?.centerContainer}>
        <Text>{amount}</Text>
      </View>
      <View style={cardButtonStyles?.rightContainer}>
        <Pressable>
          <AntDesign name="plus" size={18} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default CardButton;
