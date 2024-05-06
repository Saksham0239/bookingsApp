import { StyleSheet } from "react-native";
import { Colors } from "../../constants/commonConstants";

export const cardButtonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "30%",
    height: "60%",
    backgroundColor: Colors?.veryLightGrey,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  leftContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: Colors?.veryLightGrey,
  },
  centerContainer: {
    width: "40%",
    fontSize: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors?.white,
  },
  rightContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: Colors?.veryLightGrey,
    padding: 2,
  },
});
