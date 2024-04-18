import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { RouteNames } from "../../../constants/commonConstants";

const Home = () => {
  const isAuthorized = false;
  const { navigate } = useNavigation();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(RouteNames?.userRouteNames?.userLogin);
    }
  }, [isAuthorized]);

  return (
    <View>
      <Text>user Home screen</Text>
    </View>
  );
};

export default Home;
