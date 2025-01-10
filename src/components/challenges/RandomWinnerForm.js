import { useState } from "react";

function RandomWinnerForm() {
    const [userName, setUserName] = useState("")
    const [contestants, setContestants] = useState([])
    const [winner, setWinner] = useState("")
    
    function handleChange(e){
        if(e.target.value.length > 15){
            return null
        } else {
            setUserName(e.target.value)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(userName.length < 2){
            return null
        } else {
            setContestants([
                ...contestants,
                userName
            ])
            setUserName("")
        }
    }

    function handleSelectWinner(){
        if(contestants.length <= 1){
            setWinner("Please add more contestants")
        } else {
            const randomNumber = Math.floor(Math.random() * contestants.length)
            setWinner(contestants[randomNumber].toUpperCase())
        }
    }

    return (
      <div>
        <h1>Put Form here!</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="User Name" value={userName} onChange={handleChange}/>
            <input type="submit"/>
        </form>
        <h3>Put Contestants here:</h3>
        <ul>
            {contestants ? contestants.map(contestant=><li key={contestant}>{contestant}</li>) : null}
        </ul>
        <h3>Put Winner here</h3>
        {winner ? <h4>{winner}</h4> : null}
        <button onClick={handleSelectWinner}>Select Winner</button>
      </div>
    );
  }
  
  export default RandomWinnerForm
