import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, RouteNames } from "../../constants/commonConstants";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => {
  const { navigate } = useNavigation();

  const handleClick = () => {
    navigate(RouteNames?.userRouteNames?.userProducts, {
      searchString: item.title,
    });
  };
  return (
    <TouchableOpacity style={itemStyles.container} onPress={handleClick}>
      <Text style={itemStyles?.text}>{item.title}</Text>
      <Feather name="arrow-up-right" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default Item;

const itemStyles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: Colors?.offWhite,
    borderBottomColor: Colors?.lightGrey,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    fontFamily: "roboto-medium",
    flex: 1,
  },
});
