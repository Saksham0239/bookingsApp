import { StyleSheet } from "react-native";
import { Colors } from "../../../../../constants/commonConstants";

export const productOptionsStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  boughtText: {
    textAlign: "center",
    fontSize: 14,
  },
  borderGrey: {
    borderBottomColor: Colors?.darkGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
