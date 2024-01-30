import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import CheckOut from "./pages/CheckOut/CheckOut";
import Register from "./pages/Register/Register";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login/Login";
import Wishlist from "./pages/WishList/Wishlist";
import Productsdetails from "./pages/ProductInfo/ProductInfo";
import Error from "./pages/Error";
import Successfullypage from "./pages/Successfullypage";
function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Productsdetails />} />
        <Route path="products" element={<Products />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {isAuthenticated ? <Route path="wishList" element={<Wishlist />} /> : <Route path="wishList" element={<Navigate to="/login" />} />}
        {isAuthenticated ? <Route path="cart" element={<Cart />} /> : <Route path="cart" element={<Navigate to="/login" />} />}
        <Route path="*" element={<Error />} />
        <Route path="ordersuccess" element={<Successfullypage />} />
      </Route>
      {isAuthenticated ? <Route path="/check-out" element={<CheckOut />} /> : <Route path="/check-out" element={<Navigate to="/login" />} />}

    </Routes>
  );
}

export default App;
