 import React, { createContext, useState } from 'react'



 export const userContext = createContext()
 const Context = (props) => {

    const [name , setName ] = useState("alan")
    const [age , setAge] = useState(22)


    const value = {
        name ,
        age
    }

   return (
     <div>
        <userContext.Provider value={value}>
            {props.children}
        </userContext.Provider>
     </div>
   )
 }
 
 export default Context