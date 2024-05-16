import { StyleSheet } from "react-native";
import { Colors } from "../../constants/commonConstants";

export const productCardStyles = StyleSheet.create({
  container: {
    height: 300,
    flexDirection: "row",
    width: "100%",
    borderRadius: 40,
    marginVertical: 10,
  },
  leftContainer: {
    width: "45%",
    backgroundColor: Colors?.offWhite,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rightContainer: {
    width: "55%",
    backgroundColor: Colors?.offWhite,
    paddingLeft: 10,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  cardText: {
    flexDirection: "row",
  },
  titleText: {
    fontSize: 20,
    fontFamily: "roboto-bold",
  },
  boughtText: {
    fontFamily: "roboto-light",
    fontSize: 12,
  },
  priceSection: {
    flexDirection: "row",
    marginRight: 5,
    alignItems: "center",
  },
  actualPriceSection: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  discountedPrice: {
    fontSize: 20,
    fontFamily: "roboto-medium",
    paddingRight: 10,
  },
  actualPrice: {
    marginRight: 2,
  },
  actualPriceValue: {
    marginRight: 10,
    textDecorationLine: "line-through",
  },
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  actualPriceValueOff: {
    color: Colors?.darkGrey,
  },
  buttonContainerStyles: {
    borderRadius: 20,
    paddingVertical: 5,
  },
  buttonTextStyles: {
    fontSize: 15,
  },
  currentRating: {
    color: Colors?.darkGrey,
  },
});
