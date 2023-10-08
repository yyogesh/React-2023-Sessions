import React from "react";

export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
}

export type ThemeContextType = {
    theme: Theme | undefined;
    setTheme: (Theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>(
    { theme: undefined, setTheme: theme => console.log('set theme for ' + theme) }
)
