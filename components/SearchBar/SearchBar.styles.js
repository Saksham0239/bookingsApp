import { StyleSheet } from "react-native";
import { Colors } from "../../constants/commonConstants";

export const searchBarStyles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "column",
    fontSize: 20,
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    height: 60,
    flexDirection: "row",
    borderColor: Colors.lightBlue,
    backgroundColor: Colors.offWhite,
    borderWidth: 1,
    width: "100%",
    padding: 8,
    borderRadius: 30,
    fontSize: 15,
    alignItems: "center",
  },
  iconStyles: {
    marginRight: 6,
  },
  searchBarInput: {
    flex: 1,
  },
});
