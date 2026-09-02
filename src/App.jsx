import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './Components/HomePage'
import OrdersPage from './Components/OrdersPage'
import TrackingPage from './Components/TrackingPage'
import CheckoutPage from './Components/CheckoutPage'
import { useState, useEffect } from 'react'
import axios from "axios"
import BASE_URL from './BaseUrl.js'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])

  const loadProducts = async () => {
    const result = await axios.get(`${BASE_URL}/api/products`)
    setProducts(result.data)
  }

  const loadCart = async () => {
    const result = await axios.get(`${BASE_URL}/api/cart`)
    setCart(result.data)
  }

  const loadOrders = async () => {
    const result = await axios.get(`${BASE_URL}/api/orders`)
    setOrders(result.data)
  }

  useEffect(() => {
    const fetchData = async () => {
      await loadProducts()
      await loadCart()
      await loadOrders()
    }

    fetchData()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage products={products} cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage orders={orders} loadOrders={loadOrders} cart={cart} />} />
      <Route path="/tracking/:orderId/:productId" element={<TrackingPage products={products} cart={cart} orders={orders} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} loadOrders={loadOrders} />} />
    </Routes>
  )
}

export default App
