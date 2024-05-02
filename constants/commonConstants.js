import { Dimensions } from "react-native";

export const Colors = {
  black: "#000000",
  darkRed: "#C70039",
  darkBlue: "#003b95",
  offWhite: "#FAF9F6",
  white: "#FFFFFF",
  lightBlue: "#add8e6",
  linkBlue: "0000EE",
  lightGrey: "#D3D3D3",
  cobaltBlue: "#079CFF",
  textColor: "#222",
};

export const RouteNames = {
  mainScreen: "mainScreen",
  userRouteNames: {
    userHomeNavigator: "userHomeNavigator",
    userHome: "userHome",
    userSettings: "userSettings",
    userLogin: "userLogin",
    userSignUp: "userSignUp",
    userCart: "userCart",
    userMenu:"userMenu",
  },
  sellerRouteNames: {
    sellerHome: "sellerHome",
    sellerSettings: "sellerSettings",
    sellerLogin: "sellerLogin",
    sellerSignUp: "sellerSignUp",
  },
};

export const UserType = {
  User: "user",
  Seller: "seller",
};

export const SLIDER_WIDTH = Dimensions.get("window").width;

export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
