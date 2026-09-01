import CheckoutHeader from "./CheckoutHeader"
import CartItem from "./CartItem"
import "./CheckoutPage.css"
import PaymentSummary from "./PaymentSummary"
import { itemsInCart } from "../utils/itemsInCart"
import axios from "axios"
import { useState, useEffect } from "react"

function CheckoutPage(props) {
    const [deliveryOptions, setDeliveryOptions] = useState([])

    const loadDeliveryOptions = async () => {
        const res = await axios.get('http://localhost:5000/api/deliveryOptions')
        setDeliveryOptions(res.data)
    }

    useEffect(() => async () => {
        await loadDeliveryOptions()
    }, [])

    const cartQuantity = itemsInCart(props.cart)

    return (
        <>
            <CheckoutHeader quantity={cartQuantity} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {props.cart.map((item) => <CartItem key={item._id} item={item}
                            loadCart={props.loadCart} deliveryOptions={deliveryOptions} />)}
                    </div>

                    <PaymentSummary quantity={cartQuantity} cart={props.cart}
                        deliveryOptions={deliveryOptions} />
                </div>
            </div>
        </>
    )
}

export default CheckoutPage