import { StyleSheet } from "react-native";
import { Colors, ITEM_WIDTH } from "../../constants/commonConstants";

export const dynamicCarouselStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.white,
    width: ITEM_WIDTH,
    paddingBottom: 10,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 10,
  },
});
