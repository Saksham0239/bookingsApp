import { useEffect, useReducer, useContext } from "react";
import { Alert, Keyboard, View } from "react-native";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { useNavigation } from "@react-navigation/native";
import { generateSearchData } from "../../components/SearchBar/SearchData";
import { ApplicationContext } from "../../AppContext/appContextProvider";

const initialState = {
  cart: [],
  searchText: "",
  searchData: [],
  searching: false,
};

const useUserHome = () => {
  const { useApplicationData } = useContext(ApplicationContext);
  const { productData, loadAllData } = useApplicationData({ searchString: "" });
  const { addListener, dispatch } = useNavigation();
  const [state, dispatchState] = useReducer(defaultStateReducer, initialState);
  const { searchText, searchData, searching } = state;

  useEffect(() => {
    backButtonHandler();
    loadAllData();
  }, []);

  const backButtonHandler = () => {
    addListener("beforeRemove", (e) => {
      e.preventDefault();
      Alert.alert(
        "Login Again",
        "Do you want to login with a different email?",
        [
          {
            text: "No",
            style: "cancel",
            onPress: () => {},
          },
          {
            text: "yes",
            style: "default",
            onPress: () => dispatch(e.data.action),
          },
        ],
      );
    });
  };

  const filterSearchData = (text, data) => {
    const filteredArr = data.filter((el) => {
      return el.title.toLowerCase().includes(text);
    });

    return filteredArr;
  };

  const onChangeSearchText = (text) => {
    //api call
    const data = generateSearchData(productData);
    const filteredData = filterSearchData(text, data);

    dispatchState({
      payload: {
        searchText: text,
        searchData: filteredData,
      },
    });
  };

  const onCancelButtonClick = () => {
    dispatchState({
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

    dispatchState({
      payload: {
        searchData: data,
        searching: true,
      },
    });
  };

  return {
    searchText,
    searchData,
    searching,
    backButtonHandler,
    onChangeSearchText,
    onCancelButtonClick,
    onTextInputFocus,
  };
};

export default useUserHome;
