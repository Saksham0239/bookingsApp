import uuid from "react-native-uuid";

export const generateSearchData = (productData) => {
  const SearchData = [];

  productData.map((product) => {
    product.category.map((category) => {
      SearchData.push({ title: category });
    });
  });

  SearchData.forEach((data) => {
    data.id = uuid.v4();
  });

  return SearchData;
};
