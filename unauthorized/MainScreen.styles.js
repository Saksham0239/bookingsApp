import { StyleSheet } from "react-native";
import { Colors } from "../constants/commonConstants";

export const mainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.offWhite,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems:'center',
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
