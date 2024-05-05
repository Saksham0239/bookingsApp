import { StyleSheet } from "react-native";
import { Colors } from "../../constants/commonConstants";

export const cardItemStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "45%",
  },
  img: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    overlayColor: Colors?.black,
  },
  text: {
    fontFamily: "roboto-italic",
    margin: 12,
    padding: 10,
    color: Colors?.white,
    zIndex: 1,
    paddingTop: 50,
    paddingBottom: 0,
  },
  overlayView: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 0.2,
  },
});
