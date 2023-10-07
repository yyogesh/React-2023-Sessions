import { useMemo, useState } from 'react';
import './App.css';

// RENDER 
function App() {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);
  const [count, setCount] = useState<number>(0);

  const sum = useMemo(() => {
    console.log('Calculating sum....', numbers);
    return numbers.reduce((prev, curr) => prev + curr, 0);
  }, [numbers])

  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    setNumbers([...numbers, newNumber])
  }

  function handleClick() {
    setCount(count + 1);
 }

  return (
    <div className="App">
      <h1>Number List</h1>
      <ul>
        {
          numbers.map((number, index) => <li key={index}>{number}</li>)
        }
      </ul>
      <p>Sum of Numbers: {sum}</p>
      <button onClick={addNumber}>Add Random Number</button>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App; 
