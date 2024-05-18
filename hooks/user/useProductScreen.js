import { useEffect, useContext } from "react";
import { ApplicationContext } from "../../AppContext/appContextProvider";

const useProductScreen = ({ searchString }) => {
  const { appState, dispatchAppState } = useContext(ApplicationContext);
  const { productData } = appState;

  useEffect(() => {
    filterAndDispatchData();
  }, []);

  const filterAndDispatchData = () => {
    if (searchString) {
      console.log("searchString ", searchString);
      const filteredData = productData.filter((data) => {
        for (let i = 0; i < data.category.length; i++) {
          console.log(data.category[i].toLowerCase());
          if (
            data.category[i].toLowerCase().includes(searchString.toLowerCase())
          ) {
            console.log("true");
            return true;
          }
        }
      });
      console.log("filtered data ", filteredData);
      if (filteredData.length > 0) {
        dispatchAppState({
          payload: {
            productScreenFilteredData: filteredData,
          },
        });
      }
    }
  };

  return {
    filterAndDispatchData,
  };
};

export default useProductScreen;
