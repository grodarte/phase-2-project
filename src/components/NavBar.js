import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar(){
    return (
        <nav>
            <div className="navbar-title">My Christmas Wishlist</div>
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/gifts"
                className="nav-link"
            >
                Wishlist
            </NavLink>
            <NavLink
                to="/newgiftform"
                className="nav-link"
            >
                Add New Gift
            </NavLink>
        </nav>
    )
}

export default NavBar