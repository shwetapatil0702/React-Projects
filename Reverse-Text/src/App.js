import React, { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("");

  const ReverseText = (str) => {
    return str.split("").reverse().join("");
  };

  return (
    <div className='container'>
      <div className="card">
        <h2>Reverse String</h2>
      <input type='text' placeholder='enter the text' onChange={(e) => setText(e.target.value)}></input>
      <h4> Original: {text}</h4>
      <h4>Reverse: {ReverseText(text)}</h4>
    </div>
    </div>
  );
}

export default App;
