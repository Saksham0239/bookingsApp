import { StyleSheet } from "react-native";
import { Colors } from "../../constants/commonConstants";

export const customInputStyles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    // margin:20,
  },
  formInput: {
    width: "100%",
    borderColor: Colors.black,
    backgroundColor: Colors.offWhite,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  inputStyles: {
    flex: 1,
    letterSpacing: 0.5,
  },
  labelText: {
    fontFamily: "roboto-black",
    letterSpacing: 0.3,
  },
  errorText: {
    color: Colors?.darkRed,
  },
  icon: {
    marginRight: 5,
  },
});
