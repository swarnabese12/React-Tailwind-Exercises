import React, { createContext, useContext, useState } from 'react';

// Create a Theme Context
const ThemeContext = createContext();

// Create a Theme Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
