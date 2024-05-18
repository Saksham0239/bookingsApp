import { createContext, useReducer } from "react";
import { defaultStateReducer } from "../utils/CommonUtils";

export const ApplicationContext = createContext();

const initialState = {
  productData: [],
  productScreenFilteredData: [],
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  return (
    <ApplicationContext.Provider
      value={{ appState: state, dispatchAppState: dispatch }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContextProvider;
