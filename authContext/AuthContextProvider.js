import { createContext, useReducer } from "react";
import { defaultStateReducer } from "../utils/CommonUtils";

const initialState = {
  isAuthorized: false,
  userType: "",
};

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  return (
    <AuthContext.Provider
      value={{ authState: state, dispatchAuthState: dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
