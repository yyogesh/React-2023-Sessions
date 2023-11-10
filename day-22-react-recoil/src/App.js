import './App.css';
import { useRecoilState } from 'recoil' // importing useRecoilState hook from 'recoil'
import { Atom_todo_list } from './recoilState';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [val, setVal] = useState('') // useState hook where default value of val is empty string
  const [_, setList] = useRecoilState(Atom_todo_list) // useRecoilState hook returns the current atom state data

  const handleChange = (e) => {
    setVal(e.target.value) // updating the value of val
  }

  const add_item = () => {
    setList(val)
    setVal('') 
  }
  return (
    <div className="todo-creator">
      <input type="text" value={val} onChange={handleChange} />
      <button className="btn" onClick={add_item}>
        Click to add a task
      </button>
      <About/>
    </div>
  );
}

export default App;
