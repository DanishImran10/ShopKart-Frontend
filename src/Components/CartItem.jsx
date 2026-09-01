import {displayPrice} from "../utils/displayPrice"
import "./CheckoutPage.css"

function CartItem(props) {
    return (
        <div className="cart-item-container">
            <div className="delivery-date">
                Delivery date: Tuesday, June 21
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
                        <span>
                            Quantity: <span className="quantity-label">{props.item.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                            Delete
                        </span>
                    </div>
                </div>

                <div className="delivery-options">
                    <div className="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    <div className="delivery-option">
                        <input type="radio" defaultChecked
                            className="delivery-option-input"
                            name={`delivery-option-${props.item.product._id}`} />
                        <div>
                            <div className="delivery-option-date">
                                Tuesday, June 21
                            </div>
                            <div className="delivery-option-price">
                                FREE Shipping
                            </div>
                        </div>
                    </div>
                    <div className="delivery-option">
                        <input type="radio"
                            className="delivery-option-input"
                            name={`delivery-option-${props.item.product._id}`} />
                        <div>
                            <div className="delivery-option-date">
                                Wednesday, June 15
                            </div>
                            <div className="delivery-option-price">
                                $4.99 - Shipping
                            </div>
                        </div>
                    </div>
                    <div className="delivery-option">
                        <input type="radio"
                            className="delivery-option-input"
                            name={`delivery-option-${props.item.product._id}`} />
                        <div>
                            <div className="delivery-option-date">
                                Monday, June 13
                            </div>
                            <div className="delivery-option-price">
                                $9.99 - Shipping
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem