import { createContext, useContext } from 'react';
import { userStore } from 'store/userStore';
import { deviceStore } from 'store/deviceStore';

export const Context = createContext(null);
export const useAppContext = () => useContext(Context);

export const AppContext = ({ children }) => {
  return (
    <Context.Provider
      value={{
        user: userStore,
        device: deviceStore,
      }}
    >
      {children}
    </Context.Provider>
  );
};
