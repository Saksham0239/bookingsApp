import { createStackNavigator } from "@react-navigation/stack";
import { RouteNames } from "../constants/commonConstants";
import ProductsScreen from "../screens/userScreens/userProductsScreen/ProductsScreen";
import Home from "../screens/userScreens/userHomeScreen/Home";

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
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
