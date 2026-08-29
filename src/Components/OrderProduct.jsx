import {Link} from "react-router"
import "./OrdersPage.css"
import products from "../assets/products.js"
import { convertToDateFromMs } from "../utils/convertToDateFromMs"

function OrderProduct(props) {
    const product = products.find(p => p.id === props.productDetails.productId);

    return (
        <>
            <div className="product-image-container">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="product-details">
                <div className="product-name">
                    {product.name}
                </div>
                <div className="product-delivery-date">
                    {`Arriving on: ${convertToDateFromMs(props.productDetails.estimatedDeliveryTimeMs)}`}
                </div>
                <div className="product-quantity">
                    {`Quantity: ${props.productDetails.quantity}`}
                </div>
                <button className="buy-again-button button-primary">
                    <img className="buy-again-icon" src="images/icons/buy-again.png" />
                    <span className="buy-again-message">Add to Cart</span>
                </button>
            </div>

            <div className="product-actions">
                <Link to={`/tracking/${props.order.id}/${props.productDetails.productId}`}>
                    <button className="track-package-button button-secondary">
                        Track package
                    </button>
                </Link>
            </div>
        </>
    )
}

export default OrderProduct