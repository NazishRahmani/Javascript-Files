import React, { useContext, useState } from "react";
import Second from "./Second";
import { ThemeContext } from "../App";

const First = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [bgc, setBgc] = useState("white");

  function themeHandler() {
    if (theme === "light") {
      setTheme("dark");
      setBgc("black");
    } else {
      setTheme("light");
      setBgc("white");
    }
  }

  const styles = {
    backgroundColor: bgc,
    color: theme === "light" ? "black" : "white",
    padding: "20px",
  };

  return (
    <div style={styles}>
      <button onClick={themeHandler}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Phone</a></li>
          <li><a href="#">Address</a></li>
        </ul>
      </nav>

      <Second />
    </div>
  );
};

export default First;
