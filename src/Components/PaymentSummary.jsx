import "./CheckoutPage.css"
import { displayPrice } from "../utils/displayPrice.js"

function PaymentSummary(props) {
    function calculatePayment() {
        let itemCost = 0, shippingCost = 0
        for (const item of props.cart)
        {
            itemCost += item.quantity * item.product.priceCents
            shippingCost += props.deliveryOptions[item.deliveryOptionId - 1].priceCents
        }

        return {
            itemCost,
            shippingCost,
            totalCostWithoutTax: itemCost + shippingCost,
            taxCost: (itemCost + shippingCost) * 0.1,
            totalCost: itemCost + shippingCost + ((itemCost + shippingCost) * 0.1)
        }
    }

    if (props.deliveryOptions.length === 0)
        return

    const payment = calculatePayment()

    return (
        <div className="payment-summary">
            <div className="payment-summary-title">
                Payment Summary
            </div>

            <div className="payment-summary-row">
                <div>{`Items (${props.quantity}):`}</div>
                <div className="payment-summary-money">{`${displayPrice(payment.itemCost)}`}</div>
            </div>

            <div className="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div className="payment-summary-money">{`${displayPrice(payment.shippingCost)}`}</div>
            </div>

            <div className="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div className="payment-summary-money">{`${displayPrice(payment.totalCostWithoutTax)}`}</div>
            </div>

            <div className="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div className="payment-summary-money">{`${displayPrice(payment.taxCost)}`}</div>
            </div>

            <div className="payment-summary-row total-row">
                <div>Order total:</div>
                <div className="payment-summary-money">{`${displayPrice(payment.totalCost)}`}</div>
            </div>

            <button className="place-order-button button-primary">
                Place your order
            </button>
        </div>
    )
}

export default PaymentSummary