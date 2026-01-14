import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.count.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      
    </div>
  )
}

export default Counter

