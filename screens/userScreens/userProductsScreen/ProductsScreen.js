//all the products will be rendered here
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { productScreenStyles } from "./ProductsScreen.styles";
import { ApplicationContext } from "../../../AppContext/appContextProvider";
import { useContext } from "react";
import useProductScreen from "../../../hooks/user/useProductScreen";
import SearchBar from "../../../components/SearchBar/SearchBar";
import HomeWrapper from "../userHomeScreen/HomeWrapper";

const ProductsScreen = () => {
  const { params } = useRoute();
  const { searchString } = params;
  const {
    onChangeSearchText,
    searchText,
    onCancelButtonClick,
    searchData,
    onTextInputFocus,
    searching,
    itemClickHandler,
    productClickHandler,
  } = useProductScreen({ searchString });
  const { appState } = useContext(ApplicationContext);
  const { productScreenFilteredData } = appState;
  console.log("searching", searching);
  return (
    <HomeWrapper style={productScreenStyles?.container} searching={searching}>
      <SearchBar
        onChangeSearchText={onChangeSearchText}
        searchText={searchText}
        onCancelButtonClick={onCancelButtonClick}
        filteredData={searchData}
        onTextFocus={onTextInputFocus}
        searching={searching}
        clickHandler={itemClickHandler}
      />
      {productScreenFilteredData &&
        !searching &&
        productScreenFilteredData.map((product) => {
          return (
            <ProductCard
              clickHandler={productClickHandler}
              key={product.id}
              productId={product.id}
              productName={product.productName}
              imgSrc={product.productImageUri}
              rating={product.rating}
              numberRated={product.numberOfPeopleRated}
              productDetails={product.productDetails}
              percentageDiscount={product.percentageDiscount}
              discountedPrice={product.discountedPrice}
              originalPrice={product.originalPrice}
              deliveryTime={product.deliveryTime}
              precentageDiscount={product.precentageDiscount}
            />
          );
        })}
    </HomeWrapper>
  );
};

export default ProductsScreen;
