//all the products will be rendered here
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { productScreenStyles } from "./ProductsScreen.styles";
import { ApplicationContext } from "../../../AppContext/appContextProvider";
import { useContext, useEffect } from "react";

const ProductsScreen = () => {
  const { params } = useRoute();
  const { searchString } = params;
  const { useApplicationData } = useContext(ApplicationContext);
  const { productData, loadFilteredData } = useApplicationData({
    searchString,
  });

  useEffect(() => {
    loadFilteredData();
  }, [searchString]);

  return (
    <ScrollView style={productScreenStyles?.container}>
      {productData.map((product) => {
        return (
          <ProductCard
            key={product.id}
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
    </ScrollView>
  );
};

export default ProductsScreen;
