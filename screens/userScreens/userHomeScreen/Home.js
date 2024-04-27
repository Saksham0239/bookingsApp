import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { RouteNames } from "../../../constants/commonConstants";
import { AuthContext } from "../../../authContext/AuthContextProvider";
import useUserHome from "../../../hooks/user/useUserHome";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { homeStyles } from "./Home.styles";
import { generateSearchData } from "../../../components/SearchBar/SearchData";

const Home = () => {
  const { searchText,searchData,onChangeSearchText, onCancelButtonClick,onTextInputFocus } = useUserHome();
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
        filteredData={searchData}
        onTextFocus={onTextInputFocus}
      />
    </View>
  );
};

export default Home;
