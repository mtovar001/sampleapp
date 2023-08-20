import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    setCount(prevCount =>{
      return (prevCount + 1)
    });
  };

  const handlerMinus = () => {
    setCount(prevCount =>{
      return (prevCount - 1)
    });
  };

  const handlerReset = () => {
    setCount(0)
  }

  const negativeValue = (count) => {
    if (count === 0) {
      return ("Count can't be less than zero.");
    } else {
      return count;
    }
  };

   return (
    <>
      <button onClick={handlerMinus}className="btn btn-primary btn-sm">-</button>
      <span>{count}</span>
      <button onClick={handlerPlus} className="btn btn-primary btn-sm">+</button>
      <br></br>
      <br></br>
      <button onClick={handlerReset} className="btn btn-primary btn-lg btn-block">Reset</button>
    </>
  )
}

export default Counter;