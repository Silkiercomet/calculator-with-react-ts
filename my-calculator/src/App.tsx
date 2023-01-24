import { useState, createContext } from 'react'
import './App.css'
import KeyPanel from './componets/KeyPanel'
import Screen from './componets/Screen'
import ThemeController from './componets/ThemeController'

export const ThemeContext:any= createContext(null)

function App() {
  const [input,setInput] = useState("0")
  const [theme, setTheme] = useState(0)


  return (
    <ThemeContext.Provider value={{theme}}>
      <div className="App">
        <ThemeController/>
        <Screen input={input}/>
        <KeyPanel setInput={setInput} input={input}/>
      </div>
    </ThemeContext.Provider>

  )
}

export default App
