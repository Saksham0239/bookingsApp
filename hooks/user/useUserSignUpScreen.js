import { useContext, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import {
  validateEmail,
  validatePassword,
  validateText,
} from "../../utils/ValidationUtils";
import { useNavigation } from "@react-navigation/native";
import { RouteNames, UserType } from "../../constants/commonConstants";
import { AuthContext } from "../../authContext/AuthContextProvider";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  passwordError: "",
  showPassword:false,
};

const useUserSignUpScreen = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const {navigate} = useNavigation();
  const {
    firstName,
    lastName,
    email,
    password,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    showPassword
  } = state;
  const {dispatchAuthState} = useContext(AuthContext);

  const checkFormValidity = () => {
    if (
      firstNameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      passwordError === "" &&
      firstName &&
      lastName &&
      email &&
      password
    ) {
      return true;
    }
    return false;
  };

  const submitSignUpForm = () => {
    dispatchAuthState({
      payload: {
        isAuthorized: true,
        userType: UserType?.User,
      },
    });
    navigate(RouteNames?.userRouteNames?.userHomeNavigator);
    console.log("submitted");
  };

  const onChangeFirstName = (value) => {
    const validationMsg = validateText(value, "firstName");
    dispatch({
      payload: {
        firstNameError: validationMsg,
        firstName: value,
      },
    });
  };

  const onChangeLastName = (value) => {
    const validationMsg = validateText(value, "lastName");
    dispatch({
      payload: {
        lastNameError: validationMsg,
        lastName: value,
      },
    });
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

  const toggleShowPassword = () =>{
    dispatch({
      payload:{
        showPassword:!showPassword,
      }
    })
  }

  return {
    firstName,
    lastName,
    email,
    password,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    showPassword,
    submitSignUpForm,
    checkFormValidity,
    onChangeEmail,
    onChangePassword,
    onChangeFirstName,
    onChangeLastName,
    toggleShowPassword,
  };
};

export default useUserSignUpScreen;
