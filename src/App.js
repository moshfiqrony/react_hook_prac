import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);
  return (
    <div style={{width: 100, margin: "0 auto"}}>
      
      <div style={{width: 50, margin: "0 auto"}}>
        <h1>{count}</h1>
        <input name="val" onChange={(e) => {
            setVal(e.target.value)
        }} placeholder="Enter Value"/>
        </div>
      <button onClick={() => {
        setCount(parseInt(count)+parseInt(val));
      }}>Click me </button>
    </div>
  );
}

export default App;
