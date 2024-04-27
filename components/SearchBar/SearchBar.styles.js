import { StyleSheet } from "react-native";
import { Colors } from "../../constants/commonConstants";

export const searchBarStyles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
  },
  searchBarInput: {
    borderColor: Colors.lightBlue,
    backgroundColor: Colors.offWhite,
    borderWidth: 1,
    width: "100%",
    marginRight: 8,
    padding: 8,
    borderRadius: 30,
    fontSize: 15,
    flexDirection: "row",
  },
});
