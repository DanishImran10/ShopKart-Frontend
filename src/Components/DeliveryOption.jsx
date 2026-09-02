import "./CheckoutPage.css"
import { getDate } from "../utils/getDate.js"
import { displayPrice } from "../utils/displayPrice.js"

function DeliveryOptions(props) {
    return (
        <div className="delivery-option">
            <input type="radio" defaultChecked={props.selected}
                className="delivery-option-input"
                name={`delivery-option-${props.productId}`}
                onChange={() => props.updateCartItem({ deliveryOptionId: props.deliveryOption.index })} />
            <div>
                <div className="delivery-option-date">
                    {getDate(props.deliveryOption.deliveryDays)}
                </div>
                <div className="delivery-option-price">
                    {props.deliveryOption.priceCents === 0 ? 
                    "FREE Shipping" : `${displayPrice(props.deliveryOption.priceCents)} - Shipping`}
                </div>
            </div>
        </div>
    )
}

export default DeliveryOptions