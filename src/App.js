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

  function handleAddNewGift(newGift){
    setGifts([
      ...gifts,
      newGift
    ])
  }

  function handleUpdateGifts(updatedGift){
    const updatedGiftList = gifts.map(gift=>{
      if(gift.id === updatedGift.id){
        return updatedGift
      } else {
        return gift
      }
    })
    setGifts(updatedGiftList)
  }

  const sortedGiftList = [...gifts].sort((a,b)=>a.purchased - b.purchased)

  return (
    <div className="App">
      <header>
          <NavBar/>
      </header>
      <Outlet context={{gifts: sortedGiftList, onAddNewGift: handleAddNewGift, onUpdateGifts: handleUpdateGifts}}/>
    </div>
  );
}

export default App;
