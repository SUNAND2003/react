import React, { useRef } from 'react'

const Ref = () => {
    const inputRef = useRef(null)
    const textRef = useRef(null)


    const handleRef = () => {
        textRef.current.textContent = inputRef.current.value
    }

  return (
    <div>
        <input onChange={handleRef} ref={inputRef} type="text" />
        <p ref={textRef}></p>
    </div>
  )
}

export default Ref