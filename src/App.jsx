import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './Components/HomePage'
import OrdersPage from './Components/OrdersPage'
import TrackingPage from './Components/TrackingPage'
import CheckoutPage from './Components/CheckoutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
