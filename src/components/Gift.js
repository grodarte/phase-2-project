

function Gift({ gift }){
    const {id, name, url, image, brand, price, size, color, qty, purchased, notes} = gift

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
            {!purchased ?             
                <button className="buy-button">Buy Now</button> :
                <button className="purchased-button">Purchased</button>
            }     
            </div>
    )
}

export default Gift