import { StyleSheet } from "react-native";
import { Colors } from "../../constants/commonConstants";

export const customButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: Colors?.darkBlue,
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "roboto-regular",
  },
});
