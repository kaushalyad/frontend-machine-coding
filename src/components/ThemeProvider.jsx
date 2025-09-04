import React, { createContext, useContext, useState } from "react";

// 1. Create the context
const ThemeContext = createContext();

// 2. ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);
