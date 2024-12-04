import { useState } from "react"
import { useOutletContext } from "react-router-dom"

const blankGiftForm = {
    name: "",
    brand: "",
    image: "",
    url: "",
    price: "",
    qty: "",
    size: "",
    color: "",
    notes: "",
    purchased: false
}

function NewGiftForm(){
    const [newGiftForm, setNewGiftForm] = useState(blankGiftForm)

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <main className="form-container">
            <h1 className="form-title">All I Want For Christmas Is... 🎁</h1>
            <form action="submit" className="form" onSubmit={handleSubmit}>
                <input type="text" className="form-input" placeholder="Gift Title" name="name"/>
                <input type="text" className="form-input" placeholder="Brand" name="brand"/>
                <input type="url" className="form-input" placeholder="Shop Gift URL" name="url"/>
                <input type="url" className="form-input" placeholder="Gift Image URL" name="image"/>
                <input type="number" step="0.01" className="form-input" placeholder="Price" name="price"/>
                <input type="number" step="1" min="0" className="form-input" placeholder="Qty" name="qty"/>
                <input type="number" step="0.1" min="0" className="form-input" placeholder="Size" name="size"/>
                <input type="text" className="form-input" placeholder="Color" name="color"/>
                <textarea type="text" className="form-textarea" placeholder="Notes" name="notes"/>
                <br/>
                <button type="submit" className="form-button">Add Gift</button>

            </form>
            {/* controlled form with submittal resulting in POST request / updating parent state / clearing form */}
        </main>
    )
}

export default NewGiftForm