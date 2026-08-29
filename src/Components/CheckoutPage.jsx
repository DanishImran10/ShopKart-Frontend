import CheckoutHeader from "./CheckoutHeader"
import CartItem from "./CartItem"
import cart from "../assets/cart"
import "./CheckoutPage.css"
import PaymentSummary from "./PaymentSummary"
import { itemsInCart } from "../utils/itemsInCart"

function CheckoutPage() {
    const cartQuantity = itemsInCart(cart)
    
    return (
        <>
            <CheckoutHeader quantity={cartQuantity} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {cart.map((item) => <CartItem key={item.productId} item={item} />)}
                    </div>

                    <PaymentSummary quantity={cartQuantity} />
                </div>
            </div>
        </>
    )
}

export default CheckoutPage