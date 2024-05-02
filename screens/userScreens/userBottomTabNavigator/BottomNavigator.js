import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../userHomeScreen/Home";

const Tab = createBottomTabNavigator();

const BottomNavigator = () =>{

    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}/>
            {/* <Tab.Screen /> */}
        </Tab.Navigator>
    )

}

export default BottomNavigator;