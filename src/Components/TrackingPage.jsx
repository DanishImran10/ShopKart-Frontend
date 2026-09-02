import TopBar from "./TopBar"
import { Link, useParams } from "react-router"
import { convertToDateFromMs } from "../utils/convertToDateFromMs"
import "./TrackingPage.css"

function TrackingPage(props) {
    const { orderId, productId } = useParams()

    const order = props.orders.find(order => order._id === orderId)
    const productDetails = order.products.find(product => product.product._id === productId)

    const currentTime = Date.now();

    const totalTime = productDetails.estimatedDeliveryTimeMs - order.orderTimeMs;
    const elapsedTime = currentTime - order.orderTimeMs;

    let productStatus = (elapsedTime / totalTime) * 100;

    // clamp between 0 and 100
    productStatus = Math.max(0, Math.min(100, productStatus));

    //ease for simulating a more realistic progress bar
    const raw = elapsedTime / totalTime;
    const eased = Math.pow(raw, 0.6); // tweak exponent
    productStatus = Math.max(0, Math.min(100, eased * 100));

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
                        <div className="progress-bar"
                            style={{ width: `${productStatus}%` }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingPage