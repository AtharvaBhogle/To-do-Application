import React from 'react'
import contextTest from '../context/contextTest'
import { useContext } from 'react'

function Recievedata() {
  const {data} = useContext(contextTest)
  
  if(!data) return <div>No Data Found</div>

  return <div>Data Found :: {data}</div>
}

export default Recievedata