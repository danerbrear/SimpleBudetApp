import React, { createContext, useContext, useEffect, useState } from 'react';
import { DefaultTheme, useNavigation } from '@react-navigation/native';
import { Appearance } from 'react-native';

import { lightTheme, darkTheme } from '../core/constants/themes';
import { NativeTheme } from '../core/models';

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

export const ThemeContext = createContext<{ theme: NativeTheme, toggleTheme: () => void }>({ theme: DefaultTheme, toggleTheme: () => {} });

export const ThemeProvider = ({children}: any) => {
    const colorScheme = Appearance.getColorScheme();
    const [theme, setTheme] = useState<NativeTheme>(colorScheme === 'dark' ? darkTheme : lightTheme);

    const toggleTheme = () => {
        setTheme(prev => (prev.dark ? lightTheme : darkTheme));
    };

    useEffect(() => {
        const listener = Appearance.addChangeListener(({ colorScheme }) => {
            console.log('Appearance changed: ', colorScheme);
            setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
        });

        return () => listener.remove();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
