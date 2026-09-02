import { displayPrice } from "../utils/displayPrice.js"
import { useState } from "react"
import axios from "axios"
import BASE_URL from "../BaseUrl.js"

function Product(props) {
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [addedToCart, setAddedToCart] = useState(false)

    async function addItemToCart()
    {
        setAddedToCart(true)
        setTimeout(() => setAddedToCart(false), 2000)

        const item = {
            productId: props.product._id,
            quantity: selectedQuantity,
        }

        await axios.post(`${BASE_URL}/api/cart`, item)
        await props.loadCart()
    }

    return (
        <div className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                    src={`../${props.product.image}`} />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {props.product.name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                    src={`../images/ratings/rating-${props.product.rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                    {props.product.rating.count}
                </div>
            </div>

            <div className="product-price">
                {displayPrice(props.product.priceCents)}
            </div>

            <div className="product-quantity-container">
                <select value={selectedQuantity} onChange={(e) => setSelectedQuantity(Number(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className={`added-to-cart ${addedToCart ? "added-opacity1" : "added-opacity0"}`}>
                <img src="../images/icons/checkmark.png" />
                Added
            </div>

            <button className="add-to-cart-button button-primary"
                onClick={addItemToCart}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default Product