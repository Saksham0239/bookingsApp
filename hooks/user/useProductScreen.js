import { useEffect, useContext, useReducer } from "react";
import { Keyboard } from "react-native";
import { ApplicationContext } from "../../AppContext/appContextProvider";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { generateSearchData } from "../../components/SearchBar/SearchData";

const initialState = {
  cart: [],
  searchText: "",
  searchData: [],
  searching: false,
};

const useProductScreen = ({ searchString }) => {
  const { appState, dispatchAppState } = useContext(ApplicationContext);
  const { productData } = appState;
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const { cart, searchText, searchData, searching } = state;

  useEffect(() => {
    filterAndDispatchData(searchString);
    dispatch({
      payload: {
        searchText: searchString,
      },
    });
  }, []);

  const filterAndDispatchData = (searchProduct) => {
    if (searchProduct) {
      const filteredData = productData.filter((data) => {
        for (let i = 0; i < data.category.length; i++) {
          console.log(data.category[i].toLowerCase());
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
    console.log("item clicked", title);
    filterAndDispatchData(title);
    dispatch({
      payload: {
        searchData: [],
        searchText: title,
        searching: false,
      },
    });
  };

  return {
    cart,
    searchText,
    searchData,
    searching,
    filterAndDispatchData,
    onChangeSearchText,
    onCancelButtonClick,
    onTextInputFocus,
    itemClickHandler,
  };
};

export default useProductScreen;
