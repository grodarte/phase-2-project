// App for blog example

import { useState } from "react"

function ChildComponent({ isLoggedIn }) {
    console.log("ChildComponent render")

    return <h1>{isLoggedIn ? "You're logged in!" : "You're logged out"}</h1>
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    console.log({ isLoggedIn, setIsLoggedIn })

    function handleClick(){
        setIsLoggedIn(!isLoggedIn)
    
        console.log("button clicked")
    }

    return (
        <div>
            <ChildComponent isLoggedIn={isLoggedIn}/>
            <button onClick={handleClick}>{isLoggedIn ? "Logged In" : "Logged Out"}</button>
        </div>
    )
}

export default App