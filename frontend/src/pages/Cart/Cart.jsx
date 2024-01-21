import React from "react";
import "./Cart.css";
import { useCart } from './Cartlogic';
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = (item) => {
    return item.price * item.amount;
  };

  const total = cart.reduce((acc, item) => acc + calculateTotal(item), 0);

  const ratediv = (rating) => (
    Array.from({ length: rating }, (_, index) => (
      <span key={index} className="star">
        ★
      </span>
    ))
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="table-cart">
        {cart.length > 0 ? (
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
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="d-flex">
                    <div className="image">
                      <img
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <div className="p-info">
                      <Link to="">
                        {item.title}
                      </Link>
                      <p>Brand: {item.brand}</p>
                      <p>Rating: {ratediv(item.rate)}</p>
                    </div>
                  </td>
                  <td>
                    {item.price}
                  </td>
                  <td>
                    <button
                      className='btn btn-1'
                      onClick={() => updateQuantity(index, item.amount - 1)}
                    >
                      -
                    </button>
                    {item.amount}
                    <button
                      className='btn btn-2'
                      onClick={() => updateQuantity(index, item.amount + 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    {calculateTotal(item)}
                  </td>
                  <td>
                    {ratediv(item.rate)}
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => removeFromCart(index)}
                    >
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

        <Link className="shopping-btn">
          Continue shopping
        </Link>
      </div>
      <div className="summary-order d-flex justify-content-between ">
        <div className="instructions">
          <p>Order special instructions</p>
          <textarea name="" id="" cols="70" rows="5"></textarea>
        </div>
        <div className="sub-info ">
          <p>
            Subtotal <span>${total}</span>
          </p>
          <p>Taxes and shipping calculated at checkout</p>
          <Link className="check-btn">Check out</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
