import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = (user) => {
  return (
    <div className='box'>
      ComponentC 
      <ComponentD data={user.user}/>
      </div>
  )
}

export default ComponentC