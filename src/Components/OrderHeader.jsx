import "./OrdersPage.css"
import { displayPrice } from "../utils/displayPrice"
import { convertToDateFromMs } from "../utils/convertToDateFromMs"

function OrderHeader(props) {
    return (
        <div className="order-header">
                <div className="order-header-left-section">
                    <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>{convertToDateFromMs(props.order.orderTimeMs)}</div>
                    </div>
                    <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>{displayPrice(props.order.totalCostCents)}</div>
                    </div>
                </div>

                <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{props.order.id}</div>
                </div>
            </div>
    )
}

export default OrderHeader