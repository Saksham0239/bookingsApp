import { StyleSheet } from "react-native";
import { Colors, ITEM_WIDTH } from "../../constants/commonConstants";

export const caraouselCardItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.white,
    width: ITEM_WIDTH,
    paddingBottom: 10,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
    // borderRadius:10,
  },
  header: {
    color: Colors?.textColor,
    fontSize: 20,
    // fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 10,
    fontFamily: "roboto-bold",
  },
  body: {
    color: "#222",
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    fontFamily: "roboto-lightItalic",
  },
});
