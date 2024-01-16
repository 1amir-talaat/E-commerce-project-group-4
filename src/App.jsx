import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product-info" element={<ProductInfo />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
