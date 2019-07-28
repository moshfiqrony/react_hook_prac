import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{width: 100, margin: "0 auto"}}>
      
      <div style={{width: 50, margin: "0 auto"}}>
        <h1>{count}</h1>
        </div>
      <button onClick={() => {
        setCount(count+1);
      }}>Click me </button>
    </div>
  );
}

export default App;
