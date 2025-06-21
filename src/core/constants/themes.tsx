import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { NativeTheme } from '../models';

export const lightTheme: NativeTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: '#000000',
    primary: '#007bff',
    card: '#f8f9fa',
  },
};

export const darkTheme: NativeTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    text: '#ffffff',
    primary: '#1e90ff',
    card: '#1c1c1c',
  },
};
