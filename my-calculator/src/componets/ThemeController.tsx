import { FC, useContext } from 'react'
import style from "./themeController.module.css"
import { ThemeContext } from "../App";

const ThemeController:FC = () => {
  const theme = useContext(ThemeContext)

  return (
    <header className={`${style.header} ${theme === 0? "light-switch" : theme === 1 ? "dark-switch" : "purple-switch"}`}>
      <h1>calc</h1>
      <div>
        <label htmlFor="theme-selector">THEME</label>
        <input type="range" name="theme-selector" id="theme_selector" min={1} max={3} className={`${style.range} ${theme === 0? "light-input" : theme === 1 ? "dark-input" : "purple-input"}`}/>
        <ul className={style.list} id="theme-selec">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </header>
  )
}

export default ThemeController