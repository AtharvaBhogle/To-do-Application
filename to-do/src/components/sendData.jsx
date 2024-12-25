import React from 'react'
import contextTest from '../context/contextTest'
import { useContext } from 'react'

function sendData() {
    const [input,setInput]=React.useState("")
    const{} = useContext(contextTest)

    const submitHandler = (e) =>{
        e.PreventDefault()

        setData(input)
    }
  return (
    <div>
        <input type="text" onChange={(e)=> setInput(e.target.value)} />
        <button>Send</button>
    </div>
  )
}

export default sendData