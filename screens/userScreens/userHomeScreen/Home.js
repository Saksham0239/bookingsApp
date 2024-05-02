import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { RouteNames } from "../../../constants/commonConstants";
import { AuthContext } from "../../../authContext/AuthContextProvider";
import useUserHome from "../../../hooks/user/useUserHome";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CarouselCards from "../../../components/Carousel/CarouselCards";
import HomeWrapper from "./HomeWrapper";

const Home = () => {
  const {
    searchText,
    searchData,
    searching,
    onChangeSearchText,
    onCancelButtonClick,
    onTextInputFocus,
  } = useUserHome();
  
  const { authState } = useContext(AuthContext);
  const { isAuthorized } = authState;
  const { navigate } = useNavigation();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(RouteNames?.mainScreen);
    }
  }, [isAuthorized]);

  return (
    <HomeWrapper searching={searching}>
      {/* <View> */}
      <SearchBar
        onChangeSearchText={onChangeSearchText}
        searchText={searchText}
        onCancelButtonClick={onCancelButtonClick}
        filteredData={searchData}
        onTextFocus={onTextInputFocus}
        searching={searching}
      />
      {!searching && (
        <>
          <Text></Text>
          <CarouselCards />
        </>
      )}
      {/* </View> */}
    </HomeWrapper>
  );
};

export default Home;
