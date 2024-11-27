import './App.css';
import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [gifts, setGifts] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/gifts`)
    .then(r=>r.json())
    .then(giftData=>setGifts(giftData))
  }, [])

  return (
    <div className="App">
      <header>
          <NavBar/>
      </header>
      <Outlet context={gifts}/>
    </div>
  );
}

export default App;
