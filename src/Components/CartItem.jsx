import { useState } from "react"
import {displayPrice} from "../utils/displayPrice"
import "./CheckoutPage.css"
import DeliveryOption from "./DeliveryOption"
import { getDate } from "../utils/getDate.js"
import axios from "axios"

function CartItem(props) {
    const [isUpdating, setIsUpdating] = useState(false)
    const [quantity, setQuantity] = useState(props.item.quantity)

    const updateCartItem = async(update) => {
        await axios.put(`http://localhost:5000/api/cart/${props.item._id}`, update)
        await props.loadCart()
    }

    const updateClicked = async() => {
        if (isUpdating)
            await updateCartItem({ quantity })

        setIsUpdating(() => !isUpdating)
    }

    const deleteClicked = async() => {
        await axios.delete(`http://localhost:5000/api/cart/${props.item._id}`)
        await props.loadCart()
    }

    return (
        <div className="cart-item-container">
            <div className="delivery-date">
                {getDate(props.deliveryOptions[props.item.deliveryOptionId - 1]?.deliveryDays)}
            </div>

            <div className="cart-item-details-grid">
                <img className="product-image"
                    src={props.item.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {props.item.product.name}
                    </div>
                    <div className="product-price">
                        {displayPrice(props.item.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                        {
                            isUpdating ? 
                            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} 
                                onKeyDown={(e) => e.key === "Enter" && updateClicked()}/> : (
                            <span>
                                Quantity: <span className="quantity-label">{props.item.quantity}</span>
                            </span>)
                        }
                        <span className="update-quantity-link link-primary" onClick={updateClicked}>
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary" onClick={deleteClicked}>
                            Delete
                        </span>
                    </div>
                </div>

                <div className="delivery-options">
                    <div className="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    {props.deliveryOptions.map((deliveryOption) => 
                        <DeliveryOption key={deliveryOption._id}
                        deliveryOption={deliveryOption} productId={props.item.product._id} 
                        selected={deliveryOption.index === props.item.deliveryOptionId}
                        updateCartItem={updateCartItem}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default CartItem