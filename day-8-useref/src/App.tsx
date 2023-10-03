import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  let countRef = useRef<number>(0);
  let inputRef = useRef<any>();
  // only call on page load
  useEffect(() => {
    // body of hook
  }, [])

  // only call on change on count
  useEffect(() => {
    // body of hook
  }, [count])

  // only call unmount/destroy
  useEffect(() => {
    // body of hook

    // () => {
    //   // unmount logic
    // }
  }, [count])

  function handleClick() {
     setCount(count + 1);
  }
  
  function handleRefClick() {
    countRef.current += 1;
    console.log('countRef value', countRef.current);
    inputRef.current.focus();
  }

  console.log('reload the component count value', count, countRef.current);
  return (
    <div className="App">
      <input type='text' ref={inputRef}/>
      <button onClick={handleClick}>{'Count ' + count}</button>
      <button onClick={handleRefClick}>{'RefCount ' + countRef.current}</button>
    </div>
  );
}

export default App;
