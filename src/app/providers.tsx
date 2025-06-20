import React, { createContext, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

const NavigationContext = createContext({});

export const NavigationProvider = ({ children }: any) => {
    const navigation = useNavigation();

    const context = {
        navigation,
    };

    return (
        <NavigationContext.Provider value={context}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
