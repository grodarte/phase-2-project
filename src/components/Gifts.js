import { useOutletContext } from "react-router-dom"
import Gift from "./Gift"

function Gifts(){
    const { gifts } = useOutletContext()

    function handleMarkAsPurchased(id){
        
    }

    const giftElements = gifts.map(gift=><Gift key={gift.id} gift={gift} onMarkAsPuchased={handleMarkAsPurchased}/>)

    return (
        <main>
            <h1 className="my-title">🎁 My Christmas Wishlist 🎁</h1>
            <div className="wishlist-container">
                {giftElements}
            </div>
        </main>
    )
}

export default Gifts