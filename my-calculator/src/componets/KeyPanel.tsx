import React from "react"
import { FC,Dispatch,SetStateAction }from 'react'
interface set {
    setInput:Dispatch<SetStateAction<string>>
    input:string

}
let keys:{id:string, value:string}[] = [{id:"7",value:"7"},{id:"8",value:"8"},{id:"9",value:"9"},{id:"del",value:"del"},{id:"4",value:"4"},{id:"5",value:"5"},{id:"6",value:"6"},{id:"+",value:"+"},{id:"1",value:"1"},{id:"2",value:"2"},{id:"3",value:"3"},{id:"-",value:"-"},{id:".",value:"."},{id:"0",value:"0"},{id:"/",value:"/"},{id:"x",value:"*"},{id:"reset",value:"reset"},{id:"=",value:"="}]
const KeyPanel:FC<set> = ({setInput,input}) => {
  let handleClick = ({ target, currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    console.log(currentTarget.value)
    switch(currentTarget.value){
      case "reset":
        setInput("0")
      break;
      case "=":
        let result
        try {
          result = Function("return " + input)()
        } catch (error) {
          console.error(error);
          result = "Syntax Error"
        }
        setInput(result)
      break;
      case "del":
        if(input.length <= 1){
          setInput("0")
        }else{
          let newInput = input.slice(0,input.length-1)
          setInput(newInput)
        }
      break;
      default:
        let addInput = input + currentTarget.value
        setInput(addInput)
    }
  }
  return (
    <div>{keys.map(element => <button value={element.value} onClick={handleClick} key={element.id}>{element.id}</button>)}</div>
  )
}

export default KeyPanel