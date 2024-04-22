import { useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { validateEmail, validatePassword } from "../../utils/ValidationUtils";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

const useUserLoginScreen = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const { email, password, emailError, passwordError } = state;

  const checkFormValidity = () => {
    if (emailError === "" && passwordError === "" && email && password) {
      return true;
    }
    return false;
  };

  const submitLoginForm = () => {
    //api conformation
    //navigate to userHome
    // navigate(RouteNames?.userRouteNames?.userHome);
    console.log("submitted");
  };

  const onChangeEmail = (value) => {
    const validationMsg = validateEmail(value);
    dispatch({
      payload: {
        emailError: validationMsg,
        email:value
      },
    });
  };

  const onChangePassword = (value) => {
    const validationMsg = validatePassword(value);
    dispatch({
      payload: { passwordError: validationMsg , password:value},
    });
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    submitLoginForm,
    checkFormValidity,
    onChangeEmail,
    onChangePassword,
  };
};

export default useUserLoginScreen;
