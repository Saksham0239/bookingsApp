import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/userScreens/userHomeScreen/Home";
import Settings from "../screens/userScreens/userSettingsScreen/Settings";
import HomeSeller from "../screens/sellerScreens/sellerHomeScreen/Home";
import SettingsSeller from "../screens/sellerScreens/sellerSettingsScreen/Settings";
import { RouteNames, UserType } from "../constants/commonConstants";
import MainScreen from "../unauthorized/MainScreen";
import SellerSignUpScreen from "../screens/sellerScreens/sellerSignUpScreen/SellerSignUpScreen";
import SellerLoginScreen from "../screens/sellerScreens/sellerLoginScreen/SellerLoginScreen";
import UserSignUpScreen from "../screens/userScreens/userSignUpScreen/UserSignUpScreen";
import UserLoginScreen from "../screens/userScreens/userLoginScreen/UserLoginScreen";
import { AuthContext } from "../authContext/AuthContextProvider";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const { authState } = React.useContext(AuthContext);
  const { userType } = authState;

  const getInitialRouteName = () => {
    if (userType === UserType?.User) {
      return RouteNames?.userRouteNames?.userHome;
    } else if (userType === UserType?.Seller) {
      return RouteNames?.sellerRouteNames?.sellerHome;
    } else {
      return RouteNames?.mainScreen;
    }
  };

  return (
    <NavigationContainer style={navigatorStyles.container}>
      <Stack.Navigator initialRouteName={RouteNames?.mainScreen}>
        <Stack.Screen
          name={RouteNames?.mainScreen}
          component={MainScreen}
          options={{ title: "EaseWithBookings" }}
        />
        <Stack.Screen
          name={RouteNames?.userRouteNames?.userSignUp}
          component={UserSignUpScreen}
          options={{ title: "User SignUp" }}
        />
        <Stack.Screen
          name={RouteNames?.userRouteNames?.userLogin}
          component={UserLoginScreen}
          options={{ title: "User Login" }}
        />
        <Stack.Screen
          name={RouteNames?.sellerRouteNames?.sellerSignUp}
          component={SellerSignUpScreen}
          options={{ title: "Seller SignUp" }}
        />
        <Stack.Screen
          name={RouteNames?.sellerRouteNames?.sellerLogin}
          component={SellerLoginScreen}
          options={{ title: "Seller Login" }}
        />
        <Stack.Screen
          name={RouteNames?.userRouteNames?.userHome}
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name={RouteNames?.userRouteNames?.userSettings}
          component={Settings}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name={RouteNames?.sellerRouteNames?.sellerHome}
          component={HomeSeller}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name={RouteNames?.sellerRouteNames?.sellerSettings}
          component={SettingsSeller}
          options={{ title: "Settings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const navigatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainStackNavigator;
