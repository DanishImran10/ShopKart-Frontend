import CheckoutHeader from "./CheckoutHeader"
import CartItem from "./CartItem"
import "./CheckoutPage.css"
import PaymentSummary from "./PaymentSummary"
import { itemsInCart } from "../utils/itemsInCart"

function CheckoutPage(props) {
    const cartQuantity = itemsInCart(props.cart)
    
    return (
        <>
            <CheckoutHeader quantity={cartQuantity} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {props.cart.map((item) => <CartItem key={item.product._id} item={item} />)}
                    </div>

                    <PaymentSummary quantity={cartQuantity} />
                </div>
            </div>
        </>
    )
}

export default CheckoutPage