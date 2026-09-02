import TopBar from "./TopBar"
import "./HomePage.css"
import "./OrdersPage.css"
import OrderContainer from "./OrderContainer"
import axios from "axios"

function OrdersPage(props) {
    async function checkOrdersStatus() {
        const currentTime = Date.now()
        for (const order of props.orders)
        {
            let allDelivered = true
            for (const product of order.products)
            {
                if (product.estimatedDeliveryTimeMs > currentTime)
                {
                    allDelivered = false
                    break
                }
            }

            if (allDelivered)
            {
                await axios.delete(`http://localhost:5000/api/orders/${order._id}`)
            }
        }
        await props.loadOrders()
    }

    checkOrdersStatus()

    return (
        <>
            <TopBar cart={props.cart} />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {props.orders.map((order) => <OrderContainer key={order._id} order={order}/>)}
                </div>
            </div>
        </>
    )
}

export default OrdersPage