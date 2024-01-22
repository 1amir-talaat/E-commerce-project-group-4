// App.jsx
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
// import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./pages/Cart/Cartlogic";
import Products from "./pages/Products/Products";
import CheckOut from "./pages/CheckOut/CheckOut";
import Register from "./pages/Register/Register";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login/Login";

function App() {
  const { isAuthenticated, user } = useAuth();
  console.log(user);
  return (
    // <CartProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="productinfo/:id" element={<ProductInfo />} /> */}
        <Route path="products" element={<Products />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {isAuthenticated ? (
          <>
            <Route path="cart" element={<Cart />} />
          </>
        ) : null}
      </Route>
      {isAuthenticated ? <Route path="/check-out" element={<CheckOut />} /> : <Route path="/check-out" element={<Navigate to="/login" />} />}
    </Routes>
    // </CartProvider>
  );
}

export default App;
