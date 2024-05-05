import { useContext, useEffect, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { validateEmail, validatePassword } from "../../utils/ValidationUtils";
import { AuthContext } from "../../authContext/AuthContextProvider";
import { UserType } from "../../constants/commonConstants";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../../constants/commonConstants";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  showPassword: false,
};

const useUserLoginScreen = () => {
  const { navigate } = useNavigation();
  const { authState, dispatchAuthState } = useContext(AuthContext);
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const { email, password, emailError, passwordError, showPassword } = state;
  const checkFormValidity = () => {
    if (emailError === "" && passwordError === "" && email && password) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (authState?.isAuthorized && authState?.userType === UserType?.User) {
      navigate(RouteNames?.userRouteNames?.userHomeNavigator);
    }
  }, [authState?.userType]);

  const submitLoginForm = () => {
    dispatchAuthState({
      payload: {
        isAuthorized: true,
        userType: UserType?.User,
      },
    });
    navigate(RouteNames?.userRouteNames?.userHomeNavigator);
    console.log("submitted");
  };

  const onChangeEmail = (value) => {
    const validationMsg = validateEmail(value);
    dispatch({
      payload: {
        emailError: validationMsg,
        email: value,
      },
    });
  };

  const onChangePassword = (value) => {
    const validationMsg = validatePassword(value);
    dispatch({
      payload: { passwordError: validationMsg, password: value },
    });
  };

  const toggleShowPassword = () => {
    dispatch({
      payload: {
        showPassword: !showPassword,
      },
    });
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    showPassword,
    submitLoginForm,
    checkFormValidity,
    onChangeEmail,
    onChangePassword,
    toggleShowPassword,
  };
};

export default useUserLoginScreen;
