import { useState } from 'react'
import './App.css'
import KeyPanel from './componets/KeyPanel'
import Screen from './componets/Screen'
import ThemeController from './componets/ThemeController'


function App() {
  const [input,setInput] = useState("0")

  return (
    <div className="App">
      <ThemeController/>
      <Screen input={input}/>
      <KeyPanel setInput={setInput} input={input}/>
    </div>
  )
}

export default App
