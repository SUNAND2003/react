import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (data) => {
  return (
    <div className='box'>
      ComponentB
      <ComponentC user={data.data}/>
      </div>

  )
}

export default ComponentB