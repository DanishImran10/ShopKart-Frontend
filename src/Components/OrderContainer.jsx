import "./OrdersPage.css"
import OrderHeader from "./OrderHeader"
import OrderProduct from "./OrderProduct"

function OrderContainer(props) {
    return (
        <div className="order-container">
            <OrderHeader order={props.order} />

            <div className="order-details-grid">
                {props.order.products.map((product) => 
                <OrderProduct key={product.productId} order={props.order} productDetails={product} />)}
            </div>
        </div>
    )
}

export default OrderContainer