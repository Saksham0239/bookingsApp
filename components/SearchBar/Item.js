import { StyleSheet, Text,TouchableOpacity } from "react-native";
import { Colors } from "../../constants/commonConstants";
import { Feather } from '@expo/vector-icons';

const Item = ({ item }) => {
  return (
    <TouchableOpacity style={itemStyles.container}>
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
    borderBottomColor:Colors?.lightGrey,
    borderBottomWidth:1,
    flexDirection:'row',
  },
  text:{
    fontSize:15,
    fontFamily:'roboto-medium',
    flex:1,
  }
});
