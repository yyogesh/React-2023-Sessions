import { useCallback, useState } from 'react';
import './App.css';
import Child from './components/Child';

function App() {
  const [count, setCount] = useState<number>(0);

  // callback is memoized by useCallback(). As long as term is the same, useCallback() returns the same function object.
  //the hook returns the same function instance between renderings
  const handleChildClick = useCallback(() => {
    console.log('Child Click')
  }, [])

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Parent Click {count}</button>
      <Child onChildClick={handleChildClick} />
    </div>
  );
}

export default App;
