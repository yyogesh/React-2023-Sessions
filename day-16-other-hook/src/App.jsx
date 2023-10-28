import React, { useState, useTransition } from 'react';
import './App.css';
import ExpensiveComponent from './components/ExpensiveComponent';

function App({ users }) {
  const [input, setInput] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(users);

  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setInput(input + 1);
  };
  const handleChange = ({ target: { value } }) => {
    // Set the search term on the textbox
    setSearchTerm(value);

    // Execute Non-Urgent Code
    startTransition(() => {
      // Filter the user list based on the search term
      setFiltered(users.filter(
        (item) => item.name.includes(value)
      ));
    });
  };

  return (
    <>
      <div className="App">
        <button onClick={handleClick}>Increment Input</button>
        <ExpensiveComponent input={input} />
      </div>
      <hr />
      <div className="container">
        <div>
          {isPending ? (
            <div>Loading...</div>
          ) : (
            <p>
              {users.length !== filtered.length ? `${filtered.length} matches` : null}
            </p>
          )}
        </div>

        <input onChange={handleChange} value={searchTerm} type="text" />

        {isPending ? (
          <div>Loading...</div>
        ) : (
          <div className="cards">
            {filtered.map((user) => (
              <div class="card">
                <div className="profile">
                  <img src={user.avatar} alt={`Avatar image of ${user.name}`} />
                </div>
                <div className="body">
                  <strong>{user.name}</strong>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
