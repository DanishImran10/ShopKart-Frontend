import TopBar from "./TopBar"
import "./HomePage.css"
import "./OrdersPage.css"
import OrderContainer from "./OrderContainer"
import orders from "../assets/orders"

function OrdersPage() {
    return (
        <>
            <TopBar />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.map((order) => <OrderContainer key={order.id} order={order}/>)}
                </div>
            </div>
        </>
    )
}

export default OrdersPage