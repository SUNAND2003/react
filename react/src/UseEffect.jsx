import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [color, setColor ] = useState("green")


  useEffect(() => {
    document.title = `count ${count} ${color}`
  },[])

  const increment = () => {
    setCount(count + 1);
  };

  const handleColor = () => {
    setColor(prev => prev === "green" ? "red" : "green")
  }

  return (
    <div>
      <h1 style={{color: color}}>Counter:{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={handleColor}>Change color</button>
    </div>
  );
};

export default UseEffect;
