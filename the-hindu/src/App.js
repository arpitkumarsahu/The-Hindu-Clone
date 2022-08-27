
import { useState } from 'react';
import './App.css';
import { Menu } from './components/Menu';
import HomePage from './Pages/HomePage';




function App() {

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
    {toggle ? (
      <HomePage handleToggle={handleToggle} />
    ) : (
      <Menu handleToggle={handleToggle} />
    )}
   
  </div>
        
  );
}

export default App;
