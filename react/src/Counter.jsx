import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
       
       
    }
    const decrement = () => {
        setCount(prev => prev - 1)
       
       
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>increment</button>
        
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter