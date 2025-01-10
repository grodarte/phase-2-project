import { useState } from "react";

const blankForm = {
  food: "",
  country: ""
}

function FoodForm() {
  const [foodForm, setFoodForm] = useState(blankForm)
  const [originCountry, setOriginCountry] = useState("")

  const knownCountries = {
    america: "Delicious!",
    italy: "Delizioso!",
    mexico: "Delicioso!",
    spain: "Delicioso!"
  }

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value

    if(value.length > 10){
      return null
    }

    setFoodForm({
      ...foodForm,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setOriginCountry(foodForm.country.toLowerCase())
    setFoodForm(blankForm)
  }

    return (
      <div>
        <h1>Put form below:</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="favorite food" name="food" value={foodForm.food} onChange={handleChange}/>
          <input type="text" placeholder="country of origin" name="country" value={foodForm.country} onChange={handleChange}/>
          <input type="submit"/>
        </form>
        {originCountry ? <h1>{knownCountries[originCountry] || "Yummy!"}</h1> : null}
      </div>
    );
  }
  
  export default FoodForm