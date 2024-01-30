import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { items, total, addToCart, removeFromCart, getAllCartItems } = useCart();

  useEffect(() => {
    getAllCartItems();
  }, []);

  const calculateTotal = (item) => {
    if (item && item.Product) {
      return item.Product.price * item.quantity;
    }
    return 0;
  };

  const ratediv = (rating) =>
    Array.from({ length: rating }, (_, index) => (
      <span key={index} className="star">
        ★
      </span>
    ));

  return (
    <div className="cart container mt-5 pb-5">
      <h2>Your Cart</h2>
      <div className="table-cart">
        {items.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="d-flex">
                    <div className="image">
                      <img src={item.Product?.mainImage} style={{ width: "100px" }} alt={item.Product?.title} />
                    </div>
                    <div className="p-info">
                      <Link to="">{item.Product?.title}</Link>
                      <p>Brand: {item.Product?.brand}</p>
                      <p>Rating: {ratediv(item.Product?.rating)}</p>
                    </div>
                  </td>
                  <td>{item.Product?.price}</td>
                  <td>
                    <button
                      className="btn btn-1"
                      onClick={() => {
                        if (item.quantity > 1) {
                          removeFromCart(item.id);
                        }
                      }}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button className="btn btn-2" onClick={() => addToCart(item.Product.id, 1)}>
                      +
                    </button>
                  </td>
                  <td>{calculateTotal(item)}</td>
                  <td>{ratediv(item.Product?.rating)}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Your cart is empty.</p>
        )}

        <Link className="shopping-btn" to="/">
          Continue shopping
        </Link>
      </div>
      <div className="summary-order d-flex container justify-content-between ">
        <div className="sub-info ">
          <p>
            Subtotal <span>${total}</span>
          </p>
          <p>Taxes and shipping calculated at checkout</p>
          <Link className="check-btn btn btn-success " to="/check-out">
            Check out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
