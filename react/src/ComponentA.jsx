import React, { useState } from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  const [user , setUser ] = useState("sunand")

  return (
    <div className='box'>
      ComponentA
      <h1>{`hello ${user}`}</h1>
      <ComponentB data={user}/>
    </div>
  )
}

export default ComponentA