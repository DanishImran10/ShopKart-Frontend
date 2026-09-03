<img width="1354" height="605" alt="image" src="https://github.com/user-attachments/assets/ce1f86dc-1e39-4044-a5cf-661dea01f115" /># ShopKart Frontend

A modern and responsive e-commerce web application built using React. This frontend serves as the user interface for browsing products, managing a cart, placing orders, and tracking deliveries in real time through API integration with a backend service.

<img src="./images/homepage.png" alt="Homepage" width="500">
---

## Features

* **Dynamic Product Rendering**:

  * Fetches product data from a backend API using `axios`.
  * Renders products dynamically using React state.

* **Cart Management**:

  * Add/remove items from cart.
  * Real-time cart updates synced with backend.

<img src="./images/checkout.png" alt="Checkout Page" width="500">

* **Order Placement & Tracking**:

  * Checkout flow for placing orders.
  * Dedicated tracking page using route parameters.

<img src="./images/orders.png" alt="Orders Page" width="500">

* **Client-side Routing**:

  * Seamless navigation using `react-router`.
  * Dynamic routes for tracking (`/tracking/:orderId/:productId`).

* **State Management**:

  * Uses `useState` for managing products, cart, and orders.
  * Centralized data flow across components via props.

* **API Integration**:

  * Communicates with backend REST APIs using `axios`.
  * Handles asynchronous data fetching with `useEffect`.

* **Reusable Component Architecture**:

  * Modular components like `HomePage`, `CheckoutPage`, `OrdersPage`, `TrackingPage`.
  * Props-based communication between parent and child components.

* **Conditional Rendering**:

  * Displays UI based on fetched data.
  * Handles loading states and dynamic updates.

* **Responsive UI & Styling**:

  * Clean layout with CSS.
  * Structured rendering using `.map()` and conditional logic.

<img src="./images/tracking.png" alt="Tracking Page" width="500">

---

## How It Works

1. On initial load, the app fetches:

   * Products
   * Cart items
   * Orders
     using asynchronous API calls inside `useEffect`.

2. Data is stored in React state and passed down to components via props.

3. Users can:

   * Browse products on the homepage
   * Add/remove items from cart
   * Proceed to checkout
   * View orders and track specific items

4. Routing enables navigation between pages without reloads.

5. UI updates dynamically based on backend responses.

---

## Technologies Used

* **React**:

  * Functional components
  * `useState` and `useEffect`
  * Props for component communication

* **React Router**:

  * Dynamic routing
  * Route parameters for tracking pages

* **Axios**:

  * API communication with backend
  * Promise-based HTTP requests

* **JavaScript (ES6+)**:

  * Async/await
  * Array methods (`map`, `filter`)

* **CSS**:

  * Styling and layout

---

## Implementation Highlights

* Structured component hierarchy for scalability
* Separation of concerns between UI and data fetching
* Efficient rendering using React's virtual DOM
* Dynamic API-driven UI instead of static content
* Route-based rendering for multi-page experience

---

## Deployed Application

Live frontend: https://shopkart-frontend-penv.onrender.com

> Note: Backend is hosted on a free tier and may experience cold starts (~30–60 seconds on first request).

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Future Improvements

* Global state management (Context API / Redux)
* Loading skeletons for better UX
* Authentication system
* Payment integration
* Performance optimizations (memoization, caching)
