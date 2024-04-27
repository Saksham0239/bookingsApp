import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { RouteNames } from "../../../constants/commonConstants";
import { AuthContext } from "../../../authContext/AuthContextProvider";
import useUserHome from "../../../hooks/user/useUserHome";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { homeStyles } from "./Home.styles";

const Home = () => {
  const { onChangeSearchText, searchText, onCancelButtonClick } = useUserHome();
  const { authState } = useContext(AuthContext);
  const { isAuthorized } = authState;
  const { navigate } = useNavigation();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(RouteNames?.mainScreen);
    }
  }, [isAuthorized]);

  return (
    <View style={homeStyles?.container}>
      <SearchBar
        onChangeSearchText={onChangeSearchText}
        searchText={searchText}
        onCancelButtonClick={onCancelButtonClick}
      />
    </View>
  );
};

export default Home;
