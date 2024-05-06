import { StyleSheet } from "react-native";
import { Colors } from "../../constants/commonConstants";

export const cardSectionStyles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    backgroundColor: Colors?.offWhite,
    borderRadius: 40,
    paddingBottom: 5,
    marginVertical: 20,
  },
  upperContainer: {
    height: "60%",
    flexDirection: "row",
  },
  leftImageContainer: {
    width: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rightTextContainer: {
    flexDirection: "column",
    padding: 20,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  productName: {
    textAlign: "auto",
    fontFamily: "roboto-medium",
    fontSize: 18,
    marginBottom: 10,
  },
  offerSection: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
  },
  percentageDiscount: {
    color: Colors?.white,
    backgroundColor: Colors?.darkRed,
    padding: 4,
    marginRight: 10,
    fontSize: 10,
  },
  offerText: {
    fontSize: 10,
    color: Colors?.darkRed,
  },
  priceSection: {
    flexDirection: "row",
  },
  discountedPrice: {
    fontFamily: "roboto-bold",
    marginRight: 18,
    fontSize: 20,
  },
  originalPrice: {
    fontFamily: "roboto-light",
    fontSize: 13,
  },
  priceCut: {
    textDecorationLine: "line-through",
  },
  inStock: {
    color: Colors?.textGreen,
    fontSize: 12,
  },
  outOfStock: {
    color: Colors?.textRed,
    fontSize: 12,
  },
  productDetails: {
    fontSize: 12,
  },
  middleContainer: {
    flexDirection: "row",
    height: "20%",
    paddingLeft: 20,
    paddingTop: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  lowerContainer: {
    height: "20%",
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  smallButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors?.white,
    textAlignVertical: "center",
    borderRadius: 10,
    height: "70%",
    fontSize: 12,
  },
});
