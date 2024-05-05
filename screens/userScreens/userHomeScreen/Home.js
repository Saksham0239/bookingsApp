import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { RouteNames } from "../../../constants/commonConstants";
import { AuthContext } from "../../../authContext/AuthContextProvider";
import useUserHome from "../../../hooks/user/useUserHome";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CarouselCards from "../../../components/Carousel/CarouselCards";
import HomeWrapper from "./HomeWrapper";
import CardItem from "../../../components/CardItem/CardItem";
import CardRow from "../../../components/CardRow/CardRow";
import { cardImageUrls,cardText } from "../../../constants/CardSectionConstants";

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
  const {homeApplainces,clothes,food,footWear,gymEquipments,books} = cardImageUrls;
  const {homeApplainces:homeApplaincesText,clothes:clothesText,food:foodText,footWear:footWearText,gymEquipmentsText,booksText} = cardText;

  useEffect(() => {
    if (!isAuthorized) {
      navigate(RouteNames?.mainScreen);
    }
  }, [isAuthorized]);

  return (
    <HomeWrapper searching={searching}>
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
          <CarouselCards />
          <CardRow>
            <CardItem imageUri={homeApplainces} textLabel={homeApplaincesText}/>
            <CardItem imageUri={clothes} textLabel={clothesText}/>
          </CardRow>
          <CardRow>
            <CardItem imageUri={food} textLabel={foodText}/>
            <CardItem imageUri={footWear} textLabel={footWearText}/>
          </CardRow>
          <CardRow>
            <CardItem imageUri={gymEquipments} textLabel={gymEquipmentsText}/>
            <CardItem imageUri={books} textLabel={booksText}/>
          </CardRow>
        </>
      )}
    </HomeWrapper>
  );
};

export default Home;
