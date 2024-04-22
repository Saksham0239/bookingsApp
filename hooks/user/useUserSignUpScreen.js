import { useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import {
  validateEmail,
  validatePassword,
  validateText,
} from "../../utils/ValidationUtils";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  passwordError: "",
};

const useUserSignUpScreen = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const {
    firstName,
    lastName,
    email,
    password,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
  } = state;

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
    //api conformation
    //navigate to userHome
    // navigate(RouteNames?.userRouteNames?.userHome);
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

  return {
    firstName,
    lastName,
    email,
    password,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    submitSignUpForm,
    checkFormValidity,
    onChangeEmail,
    onChangePassword,
    onChangeFirstName,
    onChangeLastName,
  };
};

export default useUserSignUpScreen;
