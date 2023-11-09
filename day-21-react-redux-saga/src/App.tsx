import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import { getUserFetch } from './redux/actions';

function App() {
  const user = useSelector((state: any) => state?.user?.user) || [];
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(getUserFetch())}>Get Users</button>
      <div>
          Users: {user.map((user: any) => (<div>{user.name}</div>))}
        </div>
    </div>
  );
}

export default App;
