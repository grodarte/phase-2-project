import React, { useState } from "react";

function ItemsContainer() {
  const [items, setItems] = useState([
        {id: 1, name: "Milk", category: "Dairy", price: 2}, 
        {id: 2, name: "Banana", category: "Produce", price: 10}, 
        {id: 3, name: "Vanilla Ice Cream", category: "Dairy", price: 4}, 
        {id: 4, name: "Saffron Truffle Gold-Flecked Ice Cream", category: "Dairy", price: 14}, 
        {id: 5, name: "Spinach", category: "Produce", price: 4}, 
        {id: 6, name: "Pomegranates", category: "Produce", price: 11}])

  const [search, setSearch] = useState("")
  const [filterCheap, setFilterCheap] = useState(false)

  const displayItems = items.filter(item => item.category.toLowerCase().includes(search.toLowerCase()))
    .filter(item => filterCheap ? item.price < 5 : item )
  
  return (
    <div>
      <input type="text" placeholder="category search" value={search} onChange={e=>setSearch(e.target.value)}/>
      <button onClick={()=>setFilterCheap(true)}>Cheap</button>
      <button onClick={()=>setFilterCheap(false)}>All Prices</button>
      <h3>Items go here:</h3>
       <ul>
        {displayItems.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default ItemsContainer