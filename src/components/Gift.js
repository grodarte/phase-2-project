

function Gift({ gift }){
    const {id, name, url, image, brand, price, size, color, qty, purchased} = gift

    return (
        <>
            <img src={image} alt={name} className="gift-image"/>
            <h2>{`${name} | ${brand}`}</h2>
            <p>Size: {size} | Color: {color}</p>
            <p >${price.toFixed(2)}</p>
            <button>Buy Gift</button>
            
        </>
    )
}

export default Gift