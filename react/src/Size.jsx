import React, { useEffect, useState } from 'react'

const Size = () => {

    const [width, setWidth ] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)


    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log('listner added')

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("listner removed")
        }
    },[])

    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

  return (
    <div>
        <h1>width: {width} px</h1>
        <h1>height: {height}px</h1>
    </div>
  )
}

export default Size