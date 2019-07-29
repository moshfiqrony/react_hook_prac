import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState("Please Write Something");


  return (
    <div>
        <h1>{count}</h1>
        <input name="val" onChange={(e) => addValue(e.target.value)} placeholder="Enter Value"/>
    </div>
  );



  function addValue(val){
    if(val === ''){
        setCount("Please Write Something");
    }else{
        setCount(val);
    }
  }
}

export default App;
