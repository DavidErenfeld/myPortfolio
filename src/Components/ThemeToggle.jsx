import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../App";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? (
        <FaSun className="sun-icon" />
      ) : (
        <FaMoon className="moon-icon" />
      )}
    </div>
  );
};

export default ThemeToggle;
