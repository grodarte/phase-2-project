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

    return (
        <main>
            <h1>New Gift Form</h1>
            <form action="submit" id="new-gift-form">
                <input type="text" placeholder="Gift Title" name="name"/>
                <input type="text" placeholder="Brand" name="brand"/>
                <input type="url" placeholder="Shop Gift URL" name="url"/>
                <input type="url"placeholder="Gift Image URL" name="image"/>
                $<input type="number" step="0.01" placeholder="Price" name="price"/>
                <input type="number" step="1" min="0" placeholder="Qty" name="qty"/>
                <input type="number" step="0.1" min="0" placeholder="Size" name="size"/>
                <input type="text" placeholder="Color" name="color"/>
                <input type="text" placeholder="Notes" name="notes"/>
                <button type="submit">Add Gift</button>

            </form>
            {/* controlled form with submittal resulting in POST request / updating parent state / clearing form */}
        </main>
    )
}

export default NewGiftForm