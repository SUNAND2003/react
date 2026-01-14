import React from 'react'

const List = () => {

    const fruits = [
        {id: 1,name: "apple"},
        { id: 2, name: "oranges"}, 
        {id: 3, name: "lemon"}, 
        {id: 4, name: "tomato"}]

    const list = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>)

  return (
    <div>
        <ol>{list}</ol>
    </div>
  )
}

export default List