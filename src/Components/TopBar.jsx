import {Link} from "react-router"
import "./TopBar.css"
import { itemsInCart } from "../utils/itemsInCart"

function TopBar(props) {
    return (
        <div className="header">
            <div className="left-section">
                <Link to="/">
                    <img className="logo"
                        src="../../images/shopkart-logo.png" />
                </Link>
            </div>


            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="../../images/icons/cart-icon.png" />
                    <div className="cart-quantity">{itemsInCart(props.cart)}</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
    )
}

export default TopBar