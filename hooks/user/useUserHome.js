import { useEffect, useReducer } from "react";
import { Alert , Keyboard} from "react-native";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  cart: [],
  searchText: "",
};

const useUserHome = () => {
  const { addListener, dispatch } = useNavigation();

  useEffect(() => {
    backButtonHandler();
  }, []);

  const [state, dispatchState] = useReducer(defaultStateReducer, initialState);
  const { searchText } = state;

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

  const onChangeSearchText = (text) => {
    dispatchState({
      payload: {
        searchText: text,
      },
    });

    console.log(text);
  };

  const onCancelButtonClick = () => {
    dispatchState({
      payload: {
        searchText: "",
      },
    });
    Keyboard.dismiss();
  };

  return {
    backButtonHandler,
    onChangeSearchText,
    searchText,
    onCancelButtonClick,
  };
};

export default useUserHome;
