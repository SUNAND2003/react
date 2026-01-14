import React, { useContext } from 'react'
import { userContext } from './context/Context'

const ComponentR = () => {
    const user = useContext(userContext)
  return (
    <div>
        {user.name} <br />
        {user.age}
    </div>
  )
}

export default ComponentR