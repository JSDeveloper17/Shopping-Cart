import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"
import logo from "../assets/logo.png"
import "./Header.css"

export const Header = () => {
    const { cartList} = useCart()
    return (
        <header>
            <div className="header">
                <div >
                    <Link to="/" className="logo">
                        <img src={logo} alt="shopping logo" />
                        <span>Shopping Cart</span>
                    </Link>
                </div>
                <nav className="navigation">
                    <NavLink to="/" className="link">Home</NavLink>
                    <NavLink to="/cart" className="link">Cart</NavLink>
                </nav>
                <Link className="items"><span>Cart :{cartList.length}</span></Link>
            </div>
        </header>
    )
}
