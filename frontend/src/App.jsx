import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./pages/Cart/Cartlogic";
import Products from "./pages/Products/Products";
import CheckOut from "./pages/CheckOut/CheckOut";
import Register from "./pages/Register/Register";
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productinfo/:id" element={<ProductInfo />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/check-out" element={<CheckOut />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
