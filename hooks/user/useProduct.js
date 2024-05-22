import { useContext, useReducer } from "react";
import { Keyboard } from "react-native";
import { ApplicationContext } from "../../AppContext/appContextProvider";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { generateSearchData } from "../../components/SearchBar/SearchData";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../../constants/commonConstants";

const initiaState = {
  searchText: "",
  searchData: [],
  searching: false,
};

const useProduct = ({ productId }) => {
  const { appState, dispatchAppState } = useContext(ApplicationContext);
  const { productData } = appState;
  const [state, dispatch] = useReducer(defaultStateReducer, initiaState);
  const { searchText, searchData, searching } = state;
  const { navigate } = useNavigation();

  const filterAndDispatchData = (searchProduct) => {
    if (searchProduct) {
      const filteredData = productData.filter((data) => {
        for (let i = 0; i < data.category.length; i++) {
          if (
            data.category[i].toLowerCase().includes(searchProduct.toLowerCase())
          ) {
            return true;
          }
        }
      });
      if (filteredData.length > 0) {
        dispatchAppState({
          payload: {
            productScreenFilteredData: filteredData,
          },
        });
      }
    }
  };

  const filterSearchData = (text, data) => {
    const filteredArr = data.filter((el) => {
      return el.title.toLowerCase().includes(text.toLowerCase());
    });

    return filteredArr;
  };

  const onChangeSearchText = (text) => {
    const data = generateSearchData(productData);
    //api call
    const filteredData = filterSearchData(text, data);

    dispatch({
      payload: {
        searchText: text,
        searchData: filteredData,
      },
    });
  };

  const onCancelButtonClick = () => {
    dispatch({
      payload: {
        searchText: "",
        searchData: [],
        searching: false,
      },
    });
    Keyboard.dismiss();
  };

  const onTextInputFocus = () => {
    const data = generateSearchData(productData);
    const filteredData = filterSearchData(searchText, data);

    dispatch({
      payload: {
        searchData: filteredData,
        searching: true,
      },
    });
  };

  const itemClickHandler = (title) => {
    navigate(RouteNames?.userRouteNames?.userProducts, { searchString: title });
  };

  const productClickHandler = (id) => {
    navigate(RouteNames?.userRouteNames?.productScreen, { productId: id });
  };

  const fetchProductDetails = () => {
    const filteredProduct = productData.filter((data) => {
      return data.id === productId;
    });

    return filteredProduct[0].productInformation;
  };

  return {
    searchText,
    searchData,
    searching,
    filterAndDispatchData,
    onChangeSearchText,
    onCancelButtonClick,
    onTextInputFocus,
    itemClickHandler,
    productClickHandler,
    fetchProductDetails,
  };
};

export default useProduct;
