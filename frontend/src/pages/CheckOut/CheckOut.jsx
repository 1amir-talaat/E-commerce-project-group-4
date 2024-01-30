import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./CheckOutData.css";
import { CheckOutData } from "./usersData.js";
import locations from "../../assets/images/2838912.png";
import watch from "../../assets/images/watch.jpg";
import credit from "../../assets/images/360_F_307140983_MDNd4Mtv5qgd3LAUK40ru1EPyYWL4elG.jpg";
import Footer from "../../components/footer/Footer.jsx";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const navigate = useNavigate();
  const { items, total } = useCart();
  console.log(items, total);
  console.log(items);
  const [showModal, setShowModal] = useState(false);
  const [paymentType, setPaymentType] = useState("cash");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [isCardValid, setIsCardValid] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [currentData, setCurrentData] = useState([
    CheckOutData[0].name,
    CheckOutData[0].address,
    CheckOutData[0].city,
    CheckOutData[0].phone,
    CheckOutData[0].id,
  ]);

  const [formAddress, setFormAdderss] = useState({
    name: CheckOutData[0].name,
    address: CheckOutData[0].address,
    city: CheckOutData[0].city,
    phone: CheckOutData[0].phone,
  });

  console.log(formAddress);

  const changeAddress = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const luhnCheck = (cardNumber) => {
    let sum = 0;
    let double = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i], 10);
      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      double = !double;
    }
    return sum % 10 === 0;
  };

  const handleCardNumber = (e) => {
    const enteredCardNumber = e.target.value.replace(/\s/g, "");
    if (enteredCardNumber == "0000000000000000") {
      setIsCardValid(false);
    }
    setCardNumber(enteredCardNumber);
    setIsCardValid(luhnCheck(enteredCardNumber));
  };

  const handleCvv = (e) => {
    const inputValue = e.target.value;
    if (!/^[0-9]{3}$/.test(inputValue) || inputValue == "000") {
      setCvv("");
    } else {
      setCvv(inputValue);
    }
  };

  const handleMonth = (e) => {
    const inputValue = e.target.value;
    if (inputValue > 12 || inputValue < 1) {
      setMonth("");
    } else {
      setMonth(inputValue);
    }
  };

  const handleYear = (e) => {
    const inputValue = e.target.value;
    if (inputValue < new Date().getFullYear() || inputValue > new Date().getFullYear() - 2000 + 10) {
      setYear("");
    } else {
      setYear(inputValue);
    }
  };

  const renderPayment = () => {
    if (paymentType === "credit") {
      return (
        <>
          <form method="" action="" className="roform">
            <div>
              <label className="card-header">Card Number</label>
              <input
                className={`form-control ${!isCardValid ? "is-invalid" : ""}`}
                type="text"
                placeholder="**** **** **** ****"
                name="cardNumber"
                onChange={handleCardNumber}
                maxLength={16}
                style={{ padding: "10px" }}
              />
              {!isCardValid && (
                <p style={{ color: "red", fontSize: "13px" }} className="invalid-fee">
                  Invalid Card Number
                </p>
              )}
              <br />
              <div className="seclabel">
                <label className="card-header">EXPIRY DATE</label>
                <div className={`twodivs d-flex align-items-center text-center ${month === "" && "border-danger"}`}>
                  <div className="firstdivInput">
                    <input
                      type="text"
                      placeholder="MM"
                      name="mm"
                      id="mm"
                      maxLength={2}
                      className="form-control shadow-none border-0"
                      onChange={handleMonth}
                    />
                  </div>
                  <span>/</span>
                  <input
                    type="text"
                    placeholder="YY"
                    name="yy"
                    id="yy"
                    className="form-control shadow-none border-0"
                    maxLength={2}
                    onChange={handleYear}
                  />
                </div>
                <div style={{ display: "flex", gap: "10px", width: "fit-content" }}>
                  {month === "" ? <p style={{ color: "red", fontSize: "12px" }}>Invalid month</p> : <p></p>}
                  {year === "" ? <p style={{ color: "red", fontSize: "12px" }}>Invalid year</p> : <p></p>}
                </div>
                <div className="cvv">
                  <label className="card-header">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="***"
                    name="cvv"
                    maxLength={3}
                    onChange={handleCvv}
                    style={{ padding: "10px" }}
                  />
                  {cvv === "" ? <p style={{ color: "red", fontSize: "14px" }}>Invalid CVV</p> : null}
                </div>
              </div>
            </div>
          </form>
        </>
      );
    }
    window.scrollTo({
      bottom: "0px",
      behavior: "smooth",
    });
    return null;
  };

  const renderButton = () => {
    if (paymentType == "credit") {
      if (month != "" && year != "" && (isCardValid != true || isCardValid != "0000000000000000") && cvv != "") {
        return <button onClick={() => { navigate("/ordersuccess") }} className="orderbtn">Place Order</button>;      } else {
        return (
          <button className="orderbtn" style={{ background: "grey", pointerEvents: "none" }} type="disabled">
            Place Order
          </button>
        );
      }
    } else {
      return <button onClick={() => { navigate("/ordersuccess")}} className="orderbtn">Place Order</button>;
    }
  };

  return (
    <div className="checkout">
      <div className="nav">
        <div className="widtNav">
          <Link to={"/"} className="third">
            {"Logo"}
          </Link>
          <div className="seconde">{"Check Out"}</div>
          <Link to="/cart" className="first">
            {"Cart"}
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="checkout-container">
          <div className="clientData">
            <p className="titleSection">Shipping Data</p>
            <div className="seccontainer shipping">
              <div className="firstDiv">
                <img src={locations} id="locationImg" alt="Error to find" title="Your location" />
                <div className="content_user">
                  <React.Fragment key={currentData[4]}>
                    <p>{currentData[0]}</p>
                    <p>{currentData[1]}</p>
                    <p>{currentData[2]}</p>
                    <p>{currentData[3]}</p>
                  </React.Fragment>
                </div>
              </div>
              <div className="leaveDoor">
                <hr style={{ opacity: ".2" }} />
                <div className="change">
                  <form className="formaction d-flex align-items-center justify-content-between w-100 gap-2">
                    <div className="input-group d-flex align-items-center gap-2">
                      {" "}
                      <input type="checkbox" id="aaaaa" name="leavedoorname" />
                      <lable for="aaaaa" className="m-0">
                        Leave at door
                      </lable>
                    </div>
                  </form>
                  <button
                    className="btn-modal w-50"
                    style={{ outline: "none", border: "none", background: "white", color: "blue", marginRight: "40px" }}
                    type="button"
                    onClick={changeAddress}
                  >
                    Change address
                  </button>
                </div>
              </div>
            </div>
            <br />
            <p className="titleSection">Your Order</p>
            <div className="seccontainer order">
              {items.map((item) => {
                console.log(item)
                return (
                  <div className={`${item.title} item`} key={item.id}>
                    <div className="productcontainer">
                      <div className="badgee position-relative">
                        <span
                          style={{ top: "20px", left: "70px", padding: "7px", fontSize: "15px" }}
                          className="position-absolute translate-middle badge rounded-pill bg-secondary"
                        >
                          {item.quantity}
                        </span>
                        <img src={item.Product.mainImage} alt="Can't Find the source" />
                      </div>
                      <div className="dataOfProduct">
                        <p>{item.Product.brand}</p>
                        <p>{item.Product.title}</p>
                        <p>{/* {user.Currency}: <span style={{ color: "green" }}>{item.price_product}</span> */}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <br />

            <p className="titleSection">Payment</p>
            <div className="payment">
              <div className="flexpayment">
                <div className={`typemoney ${paymentType === "credit" ? "active" : ""}`} id="bo" onClick={() => setPaymentType("credit")}>
                  <img src={credit} alt="Can't find the source" />
                  <p>Debit/Credit Card</p>
                </div>
                <div className={`typemoney ${paymentType === "cash" ? "active" : ""}`} id="do" onClick={() => setPaymentType("cash")}>
                  <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/cod-en.svg" alt="Can't find the source" />
                  <p>Extra Charges Can be </p>
                </div>
              </div>
              {renderPayment()}
            </div>
          </div>

          <div class="orderData">
            <p className="titleSection">Order Summary</p>
            <div className="details ow">
              <h3 style={{ padding: "10px" }}>Our Details</h3>
              <div className="subTotal">
                <p>SubTotal</p>
                <p>EGP {total}</p>
              </div>
              <div className="shippingFree subTotal">
                <p>Shipping</p>

                {CheckOutData[0].cart
                  .reduce((acc, curr) => {
                    return acc + parseFloat(curr.price_product);
                  }, 0)
                  .toFixed(2) < 350 ? (
                  <p style={{ color: "green", fontWeight: "700", fontSize: "24px" }}>Free</p>
                ) : (
                  <p style={{ color: "red", fontWeight: "700", fontSize: "24px" }}>{"EGP " + 15}</p>
                )}
              </div>
              <hr />
              <div className="subTotal">
                <p style={{ fontWeight: "700" }}>Type Payment</p>
                <p style={{ color: "green", fontWeight: "700" }}>{paymentType}</p>
              </div>
              <div className="subTotal">
                <p style={{ fontWeight: "700" }}>Total</p>
                <p style={{ color: "green", fontWeight: "700" }}>
                  <p style={{ color: "green", fontWeight: "700", fontSize: "24px" }}>{total + 15}</p>
                </p>
              </div>
            </div>
            {renderButton()}
          </div>

          <Modal style={{ marginTop: "8%", padding: "30px" }} show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>New Address</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: "20px" }}>
              <form action="">
                <input
                  style={{ width: "300px", marginRight: "13px", padding: "10px" }}
                  type="text"
                  className="form-control w-100"
                  placeholder="New Name"
                  name="newName"
                  onChange={(e) => setFormAdderss({ ...formAddress, name: e.target.value })}
                  defaultValue={currentData[0]}
                />
                <br />
                <input
                  style={{ width: "300px", marginRight: "13px", padding: "10px" }}
                  type="text"
                  className="form-control w-100"
                  placeholder="New Address"
                  onChange={(e) => setFormAdderss({ ...formAddress, address: e.target.value })}
                  name="newAddress"
                  defaultValue={currentData[1]}
                />
                <br />
                <input
                  style={{ width: "300px", marginRight: "13px", padding: "10px" }}
                  type="text"
                  className="form-control w-100"
                  onChange={(e) => setFormAdderss({ ...formAddress, city: e.target.value })}
                  placeholder="New City"
                  name="newCity"
                  defaultValue={currentData[2]}
                />
                <br />
                <input
                  style={{ width: "300px", marginRight: "13px", padding: "10px" }}
                  type="text"
                  className="form-control w-100"
                  placeholder="New Phone"
                  onChange={(e) => setFormAdderss({ ...formAddress, phone: e.target.value })}
                  name="newPhone"
                  defaultValue={currentData[3]}
                />
                <br />
                <input
                  type="button"
                  onClick={(e) => {
                    setCurrentData(Object.values(formAddress));
                    closeModal();
                  }}
                  value={"Save Changes"}
                  className="btn btn-primary w-100"
                />
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
