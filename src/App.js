import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [counterIsLive, setCounterIsLive] = useState(false);

  useEffect(() => {
    const counterFromLocalStorage = Number(localStorage.getItem('counter'));
    if(counterFromLocalStorage){
      setCounter(counterFromLocalStorage);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('counter',  counter.toString())
  },[counter])

  useEffect(() =>{
    if(counterIsLive) {
      setTimeout(() =>{
        setCounter(counter +1);
      },1000);
    }
  }, [counter, counterIsLive])

  const setValueOfCounter = value => () => {
    setCounter(value);
  }

  const handleInputChange = e => {
    setInputVal(e.target.value);
  };

  const handleUpdateViaInput = () =>{
    const value = Number(inputVal);
    if(!isNaN(value)){
      setCounter(value);
    }
      setInputVal('');
  }

  const handleCounter = () =>{
    setCounterIsLive(!counterIsLive);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={setValueOfCounter(counter-1)}>-1</button>
        <button onClick={setValueOfCounter(0)}>Reset</button>
        <button onClick={setValueOfCounter(counter+1)}>+1</button>
      </div>
      <div>
        <input onChange={handleInputChange} value={inputVal} ></input>
        <button onClick={handleUpdateViaInput}>Set Number</button>
      </div>
      <div>
        <button onClick={handleCounter}>
          {counterIsLive ? 'Stop' : 'Start'} Counter</button>
      </div>
    </div>
  );
}

export default App;
