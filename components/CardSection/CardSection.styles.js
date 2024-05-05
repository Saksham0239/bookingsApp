import { StyleSheet } from "react-native";
import { Colors } from "../../constants/commonConstants";

export const cardSectionStyles = StyleSheet.create({
  container: {
    height: "40%",
    width: "100%",
    backgroundColor: Colors?.offWhite,
    borderRadius: 40,
  },
  upperContainer: {
    height: "60%",
    flexDirection: "row",
  },
  leftImageContainer: {
    width: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rightTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  productName: {},
  productDetails: {},
  middleContainer: {
    height: "20%",
    // backgroundColor:'green',
  },
  lowerContainer: {
    height: "20%",
    // backgroundColor:'yellow',
  },
});
