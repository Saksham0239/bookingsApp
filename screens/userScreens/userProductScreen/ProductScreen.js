import { productScreenStyles } from "./ProductScreen.styles";
import { useRoute } from "@react-navigation/native";
import DynamicCarousel from "../../../components/DynamicCarousel/DynamicCarousel";
import HomeWrapper from "../userHomeScreen/HomeWrapper";
import useProduct from "../../../hooks/user/useProduct";
import SearchBar from "../../../components/SearchBar/SearchBar";

const ProductScreen = () => {
  const { params } = useRoute();
  const { productId } = params;
  const {
    searchText,
    searchData,
    searching,
    onChangeSearchText,
    onTextInputFocus,
    itemClickHandler,
    onCancelButtonClick,
    fetchProductDetails,
  } = useProduct({ productId });

  const productInfo = fetchProductDetails();

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
      {!searching && (
        <>
          <DynamicCarousel caraouselImages={productInfo?.images} />
        </>
      )}
    </HomeWrapper>
  );
};

export default ProductScreen;
