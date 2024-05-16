//all the products will be rendered here
import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { productScreenStyles } from "./ProductsScreen.styles";
import { useEffect } from "react";
import { prepareProductScreenData } from "../../../data/ProductData";

const ProductsScreen = () => {
  const { params } = useRoute();
  const { searchString } = params;
  const [productData, setProductData] = useState([]);
  console.log(searchString);

  useEffect(() => {
    const productData = prepareProductScreenData();
    setProductData(productData);
  }, []);

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
