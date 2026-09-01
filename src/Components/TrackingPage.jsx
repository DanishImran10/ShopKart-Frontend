import TopBar from "./TopBar"
import {Link, useParams} from "react-router"
import { convertToDateFromMs } from "../utils/convertToDateFromMs"
import "./TrackingPage.css"

function TrackingPage(props) {
    const { orderId, productId } = useParams();

    const order = props.orders.find(order => order._id === orderId);
    const productDetails = order.products.find(product => product.product._id === productId);

    return (
        <>
            <TopBar cart={props.cart} />
            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        {convertToDateFromMs(productDetails.estimatedDeliveryTimeMs)}
                    </div>

                    <div className="product-info">
                        {productDetails.product.name}
                    </div>

                    <div className="product-info">
                        {`Quantity: ${productDetails.quantity}`}
                    </div>

                    <img className="product-image" src={`../../${productDetails.product.image}`} alt={productDetails.product.name} />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingPage