import uuid from "react-native-uuid";

export const generateSearchData = (productData) => {
  const SearchData = [];

  productData.map((product) => {
    product.category.map((category) => {
      let isAvailable = false;
      SearchData.map((data) => {
        // if category is there inside searchData do not add it again
        if (data.title === category) {
          isAvailable = true;
        }
      });
      if (!isAvailable) {
        SearchData.push({ title: category });
        isAvailable = false;
      }
    });
  });

  SearchData.forEach((data) => {
    data.id = uuid.v4();
  });

  return SearchData;
};
