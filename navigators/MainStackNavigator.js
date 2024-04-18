import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/userScreens/userHomeScreen/Home";
import Settings from "../screens/userScreens/userSettingsScreen/Settings";
import HomeSeller from "../screens/sellerScreens/sellerHomeScreen/Home";
import SettingsSeller from "../screens/sellerScreens/sellerSettingsScreen/Settings";
import { RouteNames } from "../constants/commonConstants";
import MainScreen from "../unauthorized/MainScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer style={navigatorStyles.container}>
      <Stack.Navigator initialRouteName={RouteNames?.mainScreen}>
        <Stack.Screen
          name={RouteNames?.mainScreen}
          component={MainScreen}
          options={{ title: "EaseWithBookings" }}
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
