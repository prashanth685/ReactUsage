import React, { useState } from "react";
import { ThemeContexts } from "./ThemeContext";

const ThemeProvider = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContexts.Provider value={{ theme, toggleTheme }}>
        {childern}
      </ThemeContexts.Provider>
    </>
  );
};

export default ThemeProvider;
