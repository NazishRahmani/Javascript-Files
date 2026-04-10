import React, { createContext, useState } from "react";
import First from "./components/First";

const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <First />
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };
