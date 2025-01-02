import { useEffect, useState } from "react"
import "./RedirectPage.css"

function RedirectPage(){
    const [timeRemaining, setTimeRemaining] = useState(10)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeRemaining(timeRemaining => timeRemaining - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="redirect-message">
            <img className="gift-icon" src="https://www.citypng.com/public/uploads/preview/green-gift-box-silhouette-icon-transparent-png-701751695037226jklrms5hei.png" alt="gift icon"/>
            <h2>Hang Tight!</h2>
            <h3>You will be redirected to the puchasing page in <strong>{timeRemaining}</strong> seconds</h3>
            <p><strong>Don't Forget!</strong> If you purchase this gift, return to the <strong>Wishlist</strong> to update the registry</p>
            <h4>Happy Shopping!</h4>
        </div>
    )
}

export default RedirectPage