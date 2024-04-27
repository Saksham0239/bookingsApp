import { useEffect, useReducer } from "react";
import { Alert, Keyboard } from "react-native";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { useNavigation } from "@react-navigation/native";
import { generateSearchData } from "../../components/SearchBar/SearchData";

const initialState = {
  cart: [],
  searchText: "",
  searchData:[],
};

const useUserHome = () => {
  const { addListener, dispatch } = useNavigation();

  useEffect(() => {
    backButtonHandler();
  }, []);

  const [state, dispatchState] = useReducer(defaultStateReducer, initialState);
  const { searchText,searchData } = state;

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

  const filterSearchData = (text,data)=>{
     const filteredArr =  data.filter((el)=>{
        return el.title.toLowerCase().includes(text);
      });

      return filteredArr;
  } 

  const onChangeSearchText = (text) => {

    //api call
    const data = generateSearchData();
    const filteredData = filterSearchData(text,data);

    dispatchState({
      payload: {
        searchText: text,
        searchData:filteredData,
      },
    });
  };

  const onCancelButtonClick = () => {
    dispatchState({
      payload: {
        searchText: "",
        searchData:generateSearchData(),
      },
    });
    Keyboard.dismiss();
  };

  const onTextInputFocus = ()=>{
    console.log('text focused');
    const data = generateSearchData();

    dispatchState({
      payload:{
        searchData:data,
      }
    });
  }

  return {
    searchText,
    searchData,
    backButtonHandler,
    onChangeSearchText,
    onCancelButtonClick,
    onTextInputFocus,
  };
};

export default useUserHome;
