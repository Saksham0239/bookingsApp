import { StyleSheet } from "react-native";
import { Colors } from "../../../../../constants/commonConstants";

export const productHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    padding: 20,
  },
  topContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  brandText: {
    color: Colors?.darkBlue,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomContainer: {
    marginTop: 10,
  },
  bottomContainerText: {
    fontSize: 16,
    fontFamily: "roboto-medium",
    color: Colors?.darkGrey,
  },
});
