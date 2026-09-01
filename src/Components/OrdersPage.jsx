import TopBar from "./TopBar"
import "./HomePage.css"
import "./OrdersPage.css"
import OrderContainer from "./OrderContainer"

function OrdersPage(props) {
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