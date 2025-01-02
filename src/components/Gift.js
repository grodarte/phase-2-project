import { useNavigate } from "react-router-dom"

function Gift({ gift, onMarkAsPurchased }){
    const {id, name, url, image, brand, price, size, color, qty, purchased, notes} = gift
    const navigate = useNavigate()

    function handleBuyNow(){
        navigate("/redirecting")
        setTimeout(()=>{
            window.open(url, "_blank")
            navigate("/gifts")
        }, 10000)
    }

    return (
        <div className="gift-card">
            <img src={image} alt={name} className="gift-image" />
            <div className="gift-details">
                <h2>{`${name} | ${brand}`}</h2>
                <p className="gift-info">Size: {size} | Color: {color}</p>
                <p className="gift-price">${price.toFixed(2)}</p>
                <div className="gift-stats">
                    {notes ? <p>Notes: {notes}</p> : null}
                    <p>Desired: {qty}</p>
                </div>
            </div>
            {!purchased && <button className="buy-button" disabled={purchased} onClick={handleBuyNow}>Buy Now</button>}
            <button className="mark-purchased-button" disabled={purchased} onClick={()=>onMarkAsPurchased(id)}>
                {purchased ? "Purchased" : "I already bought this gift"}
            </button>
        </div>
    )
}

export default Gift

/*
{!purchased ? 
    <button className="buy-button" disabled={purchased} onClick={handleBuyNow}>Buy Now</button>
    <button className="mark-purchased-button" disabled={purchased} onClick={()=>onMarkAsPurchased(id)}>I already bought this gift</button>
    :
    <button className="already-purchased-button" 
}
*/