import { useReducer, useEffect } from "react";
import { defaultStateReducer } from "../utils/CommonUtils";
import { prepareProductScreenData } from "../data/ProductData";

const initialState = {
  productData: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const { productData } = state;
  console.log("productData upper ", productData);

  useEffect(() => {
    console.log("productData app", productData);
  }, [productData]);

  // useEffect(()=>{
  //   loadFilteredData();
  // },[]);

  const loadAllData = () => {
    const productData = prepareProductScreenData();
    dispatch({
      payload: {
        productData: productData,
      },
    });
  };

  // const loadFilteredData = () => {
  //   console.log(searchString);
  //   console.log("productData ", productData);
  //   if (searchString) {
  //     const filteredData = productData.filter((data) => {
  //       console.log("data ", data);
  //       data.category.map((cat) => {
  //         console.log("category", cat);
  //         return cat.toLowerCase().includes(searchString);
  //       });
  //     });
  //     console.log("filtered data ", filteredData);
  //     if(filteredData.length>0){
  //       dispatch({
  //         payload: {
  //           productData: filteredData,
  //         },
  //       });
  //     }
  //   }
  //   else{
  //     loadAllData();
  //   }
  // };

  return {
    productData,
    loadAllData,
    // loadFilteredData,
  };
};

export default useApplicationData;
