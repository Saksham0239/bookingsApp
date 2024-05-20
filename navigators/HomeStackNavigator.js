import { createStackNavigator } from "@react-navigation/stack";
import { RouteNames } from "../constants/commonConstants";
import ProductsScreen from "../screens/userScreens/userProductsScreen/ProductsScreen";
import Home from "../screens/userScreens/userHomeScreen/Home";
import ProductScreen from "../screens/userScreens/userProductScreen/ProductScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={RouteNames?.userRouteNames?.userHome}>
      <Stack.Screen
        name={RouteNames?.userRouteNames?.userHome}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouteNames?.userRouteNames?.userProducts}
        component={ProductsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={RouteNames?.userRouteNames?.productScreen}
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
