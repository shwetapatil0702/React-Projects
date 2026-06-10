import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2 className="title">Counter App</h2>
      <h2 className="count">{count}</h2>

      <div className="buttons">
        <button
          className="increment"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="decrement"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;