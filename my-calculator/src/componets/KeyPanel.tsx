import { FC,Dispatch,SetStateAction } from 'react'
interface set {
    setInput:Dispatch<SetStateAction<string>>
}
const KeyPanel:FC<set> = ({setInput}) => {
  return (
    <div>KeyPanel</div>
  )
}

export default KeyPanel