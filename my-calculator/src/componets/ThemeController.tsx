import { FC, useContext, Dispatch, SetStateAction } from 'react'
import style from "./themeController.module.css"
import { ThemeContext, themeContextType } from "../App";
import React from 'react';

interface propis {
  changeTheme: (arg0:themeContextType) => void
}

const ThemeController:FC<propis> = ({changeTheme}) => {
  const theme = useContext(ThemeContext)

  function changeRen(e: React.ChangeEvent<HTMLInputElement>) {
    changeTheme(+e.target.value as themeContextType)
  }

  return (
    <header className={`${style.header} ${theme === 0? "light-switch" : theme === 1 ? "dark-switch" : "purple-switch"}`}>
      <h1>calc</h1>
      <div>
        <label htmlFor="theme-selector">THEME</label>
        <input type="range" onChange={changeRen}  name="theme-selector" id="theme_selector" min={0} max={2}  className={`${style.range} ${theme === 0? "light-input" : theme === 1 ? "dark-input" : "purple-input"}`}/>
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