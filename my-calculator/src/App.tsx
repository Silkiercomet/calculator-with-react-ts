import { useState, createContext } from 'react'
import './App.css'
import KeyPanel from './componets/KeyPanel'
import Screen from './componets/Screen'

import ThemeController from './componets/ThemeController'
type themeContextType = 0 | 1 | 2
export const ThemeContext= createContext<themeContextType>(0)

function App() {
  const [input,setInput] = useState("0")
  const [theme, setTheme] = useState<themeContextType>(0)


  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <ThemeController/>
        <Screen input={input}/>
        <KeyPanel setInput={setInput} input={input}/>
      </div>
    </ThemeContext.Provider>

  )
}

export default App
