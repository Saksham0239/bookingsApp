import { createContext } from "react";
import useApplicationData from "./useApplicationData";

export const ApplicationContext = createContext();

const AppContextProvider = ({ children }) => {
  return (
    <ApplicationContext.Provider
      value={{ useApplicationData: useApplicationData }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContextProvider;
