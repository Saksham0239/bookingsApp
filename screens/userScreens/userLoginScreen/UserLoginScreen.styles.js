import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/commonConstants";

export const userLoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  linkText: {
    fontFamily: "roboto-bold",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
