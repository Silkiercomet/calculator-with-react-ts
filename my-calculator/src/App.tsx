import { useState, createContext } from "react";
import "./App.css";
import KeyPanel from "./componets/KeyPanel";
import Screen from "./componets/Screen";

import ThemeController from "./componets/ThemeController";
export type themeContextType = 0 | 1 | 2;
export const ThemeContext = createContext<themeContextType>(2);

function App() {
  const [input, setInput] = useState("0");
  const [theme, setTheme] = useState<themeContextType>(2);

  const changeTheme = (num: themeContextType) => {
    setTheme(num);
  };

  return (
    <div
      className={`wrapper ${
        theme === 0 ? "light-bg" : theme === 1 ? "dark-bg" : "purple-bg"
      }`}
    >
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <ThemeController changeTheme={changeTheme} />
          <Screen input={input} />
          <KeyPanel setInput={setInput} input={input} />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
