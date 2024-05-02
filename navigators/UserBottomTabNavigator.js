import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/userScreens/userHomeScreen/Home";
import Settings from "../screens/userScreens/userSettingsScreen/Settings";
import { Colors, RouteNames } from "../constants/commonConstants";
import { Entypo,Feather } from "@expo/vector-icons";
import CartScreen from "../screens/userScreens/userCartScreen/CartScreen";
import MenuScreen from "../screens/userScreens/userMenuScreen/MenuScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={RouteNames?.userRouteNames?.userHome}>
      <Tab.Screen
        name={RouteNames?.userRouteNames?.userHome}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel:"Home",
          tabBarIcon: ({ color=Colors?.black, size=20 }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteNames?.userRouteNames?.userSettings}
        component={Settings}
        options={{
            headerShown: false,
            tabBarLabel:"Settings",
            tabBarIcon: ({ color=Colors?.black, size=20 }) => (
                <Feather name="settings" size={size} color={color}/>
            ),
          }}
      />
      <Tab.Screen
        name={RouteNames?.userRouteNames?.userCart}
        component={CartScreen}
        options={{
            headerShown: false,
            tabBarLabel:'Cart',
            tabBarIcon: ({ color=Colors?.black, size=20 }) => (
              <Entypo name="shopping-cart" size={size} color={color} />
            ),
          }}
      />

    <Tab.Screen
        name={RouteNames?.userRouteNames?.userMenu}
        component={MenuScreen}
        options={{
            headerShown: false,
            tabBarLabel:'Menu',
            tabBarIcon: ({ color=Colors?.black, size=20 }) => (
              <Entypo name="menu" size={size} color={color} />
            ),
          }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
