import React, { useState, useContext, createContext } from 'react';
import { getTheme } from '../Misc/localStorage';

const themeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => useContext(themeContext);

export { useTheme, ThemeProvider };
