import { createContext, useReducer } from "react";
import { defaultStateReducer } from "../utils/CommonUtils";
import { UserType } from "../constants/commonConstants";

const initialState = {
  isAuthorized: true,
  userType: UserType.User,
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
