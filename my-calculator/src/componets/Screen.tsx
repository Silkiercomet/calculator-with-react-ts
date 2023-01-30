import { FC, useContext } from 'react'
import { ThemeContext } from "../App";

interface Input {
    input:string
}

const Screen:FC<Input> = ({input}) => {

const theme = useContext(ThemeContext)

  return (
    <div className={`screen ${theme === 0? "light-s" : theme === 1 ? "dark-s" : "purple-s"}`}> {input} </div>
  )
}

export default Screen