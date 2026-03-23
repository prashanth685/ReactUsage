import React, { useState } from "react";
import { ThemeContexts } from "../contexts/ThemeContext";

const Home = () => {
  const [theme, setTheme] = useState(ThemeContexts);
  return (
    <>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#000",
          color: theme === "light" ? "#fff" : "#000",
          height: "100vh",
        }}
      >
        <h1>{theme} mode</h1>
        <button onClick={toggleTheme}>toggle theme</button>
      </div>
    </>
  );
};

export default Home;
