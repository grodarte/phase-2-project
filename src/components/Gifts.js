import { useOutletContext } from "react-router-dom"
import Gift from "./Gift"

function Gifts(){
    const gifts = useOutletContext()

    console.log(gifts)

    const giftElements = gifts.map(gift=><Gift key={gift.id} gift={gift}/>)

    return (
        <main>
            <h1>Gift Wishlist</h1>
            {/* render gifts */}
        </main>
    )
}

export default Gifts