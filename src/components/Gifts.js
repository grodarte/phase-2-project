import { useOutletContext } from "react-router-dom"
import Gift from "./Gift"

function Gifts(){
    const { gifts } = useOutletContext()

    function handleMarkAsPurchased(id){
        if(window.confirm(`Are you sure you want to update this item to purchased?`)){
            console.log(`Item purchased`)
            //PATCH request
            fetch(`http://localhost:3000/gifts/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({purchased: true})
            })
            .then(r=>r.json())
            .then(updatedGift=>console.log(updatedGift))
            //updates state using callback from App component
        } else {
            console.log(`Item not purchased`)
        }
    }

    const giftElements = gifts.map(gift=><Gift key={gift.id} gift={gift} onMarkAsPurchased={handleMarkAsPurchased}/>)

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