import { useState } from "react"


function Counter(){
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count=>count + 1)}>Counter</button>
        </>
    )
}

export default Counter