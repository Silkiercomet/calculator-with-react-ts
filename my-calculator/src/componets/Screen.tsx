import { FC } from 'react'
interface Input {
    input:string
}
const Screen:FC<Input> = ({input}) => {
let x = Function("return " + "1+2")()
  return (
    <div>Screen {x} {input} </div>
  )
}

export default Screen