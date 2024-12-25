import React from 'react'
import contextTest from './contextTest'

function contextTestProvider({child}) {
    const[data,setData]= React.useState("")
  return (
    <contextTest.Provider value={{data,setData}}>
        {child}
    </contextTest.Provider>
  )
}

export default contextTestProvider