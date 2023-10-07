import { useCallback, useState } from 'react';
import './App.css';
import Child from './components/Child';

function App() {
  const [count, setCount] = useState<number>(0);

  const handleChildClick = () => {
    console.log('Child Click')
  }

  function handleClick() {
    setCount(count + 1);
 }
  return (
    <div className="App">
      <button onClick={handleClick}>Parent Click</button>
      <Child onChildClick={handleChildClick} />
    </div>
  );
}

export default App;
