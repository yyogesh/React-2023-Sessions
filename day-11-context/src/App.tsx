import { useState } from 'react';
import './App.css';
import MyPage from './components/MyPage';
import { Theme, ThemeContext } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState(Theme.Light);
  console.log('theme', theme)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App">
        <MyPage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
