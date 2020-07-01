import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const CountApp = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1)
  }
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>カウンターApp</h1>
      <p>{count}</p>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <CountApp />,                       // HelloWorldコンポーネントを
  document.getElementById('root')       // id='root'の要素にrenderする
);