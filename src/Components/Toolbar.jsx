import React from 'react';
import { useTheme } from './ThemeProvider';

const Toolbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex items-center justify-center h-full mt-8">
      <button onClick={toggleTheme} 
        className="text-blue-500 hover:text-blue-700 font-medium bg-transparent border-none cursor-pointer">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default Toolbar;
