import { useReducer } from "react";
import { defaultStateReducer } from "../utils/CommonUtils";
import { prepareProductScreenData } from "../data/ProductData";

const initialState = {
  productData: [],
};

const useApplicationData = ({ searchString }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const { productData } = state;

  const loadAllData = () => {
    const productData = prepareProductScreenData();
    dispatch({
      payload: {
        productData,
      },
    });
  };

  const loadFilteredData = () => {
    console.log(searchString);
    console.log("productData ", productData);
    if (searchString) {
      const filteredData = productData.filter((data) => {
        console.log("data ", data);
        data.category.map((cat) => {
          console.log("category", cat);
          return cat.toLowerCase().includes(searchString);
        });
      });
      console.log("filtered data ", filteredData);

      dispatch({
        payload: {
          productData: filteredData,
        },
      });
    }
  };

  return {
    productData,
    loadAllData,
    loadFilteredData,
  };
};

export default useApplicationData;
