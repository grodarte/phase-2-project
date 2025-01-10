import React, { useState } from "react";

function AnimalContainer() {
  const [filterBy, setFilterBy] = useState("")
  const [animals, setAnimals] = useState([
        {id: 1, name: "Ron", species: "Lion", hungry: true}, 
        {id: 2, name: "Leslie", species: "Rabbit", hungry: false}, 
        {id: 3, name: "Ann", species: "Koala", hungry: false}, 
        {id: 4, name: "April", species: "Hyena", hungry: true}
    ])

    function getFilteredAnimals(){
      if (filterBy) {
        return animals.filter(animal=> filterBy === "hungry" ? animal.hungry : !animal.hungry)
      }
      return []
    }

  return (
    <div>
      <button onClick={()=>setFilterBy("hungry")}>Hungry Animals</button>
      <button onClick={()=>setFilterBy("full")}>Full Animals</button>
      <h3>Animals go below:</h3>
       <ul>
        {filterBy && getFilteredAnimals().map(animal=> <li key={animal.id}>{animal.name} is {filterBy}</li>)}
      </ul>
    </div>
  );
}

export default AnimalContainer