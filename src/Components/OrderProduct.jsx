import {Link} from "react-router"
import "./OrdersPage.css"
import { convertToDateFromMs } from "../utils/convertToDateFromMs"

function OrderProduct(props) {
    return (
        <>
            <div className="product-image-container">
                <img src={props.productDetails.product.image} alt={props.productDetails.product.name} />
            </div>

            <div className="product-details">
                <div className="product-name">
                    {props.productDetails.product.name}
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
                <Link to={`/tracking/${props.order._id}/${props.productDetails.product._id}`}>
                    <button className="track-package-button button-secondary">
                        Track package
                    </button>
                </Link>
            </div>
        </>
    )
}

export default OrderProduct