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
        
        fetch(`http://localhost:3000/gifts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newGiftForm)
        })
        .then(r=>r.json())
        .then(newGiftData=>{
            console.log(newGiftData)
            setNewGiftForm(blankGiftForm)
        })
    }

    function handleFormChange(e){
        const name = e.target.name
        const value = e.target.type === "number" ? Number(e.target.value) : e.target.value
        
        setNewGiftForm({
            ...newGiftForm,
            [name]: value
        })
    }

    return (
        <main className="form-container">
            <h1 className="form-title">All I Want For Christmas Is... 🎁</h1>
            <form action="submit" className="form" onSubmit={handleSubmit}>
                <input type="text" className="form-input" placeholder="Gift Title" name="name" onChange={handleFormChange} value={newGiftForm.name}/>
                <input type="text" className="form-input" placeholder="Brand" name="brand" onChange={handleFormChange} value={newGiftForm.brand}/>
                <input type="url" className="form-input" placeholder="Shop Gift URL" name="url" onChange={handleFormChange} value={newGiftForm.url}/>
                <input type="url" className="form-input" placeholder="Gift Image URL" name="image" onChange={handleFormChange} value={newGiftForm.image}/>
                <input type="number" step="0.01" className="form-input" placeholder="Price" name="price" onChange={handleFormChange} value={newGiftForm.price}/>
                <input type="number" step="1" min="0" className="form-input" placeholder="Qty" name="qty" onChange={handleFormChange} value={newGiftForm.qty}/>
                <input type="text" className="form-input" placeholder="Size" name="size" onChange={handleFormChange} value={newGiftForm.size}/>
                <input type="text" className="form-input" placeholder="Color" name="color" onChange={handleFormChange} value={newGiftForm.color}/>
                <textarea type="text" className="form-textarea" placeholder="Notes" name="notes" onChange={handleFormChange} value={newGiftForm.notes}/>
                <br/>
                <button type="submit" className="form-button">Add Gift</button>

            </form>
            {/* controlled form with submittal resulting in POST request / updating parent state / clearing form */}
        </main>
    )
}

export default NewGiftForm