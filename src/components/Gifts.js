import { useOutletContext } from "react-router-dom"

function Gifts(){
    const gifts = useOutletContext()

    console.log(gifts)

    return (
        <main>
            <h1>Gift Wishlist</h1>
            {/* render gifts */}
        </main>
    )
}

export default Gifts