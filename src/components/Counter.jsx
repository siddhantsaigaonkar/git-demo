import React,{useState} from 'react'

export default function Counter() {

  const [count, setCount] = useState(5)
  
  const increment = () => {
  setCount(count+2);
  setCount(((count)=>count+4));
  setCount(count + 5);
    
  }
  const decrement = () => {
        setCount(count - 1-1-1);
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
