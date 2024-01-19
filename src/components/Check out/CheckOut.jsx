import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./CheckOutData.css";
import { CheckOutData } from './usersData.js';
import locations from './images/2838912.png';
import watch from './images/watch.jpg';
import credit from './images/360_F_307140983_MDNd4Mtv5qgd3LAUK40ru1EPyYWL4elG.jpg';
import cash from "./images/download.png";

function CheckOut() {
    const [showModal, setShowModal] = useState(false);
    const [paymentType, setPaymentType] = useState('cash');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [isCardValid, setIsCardValid] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [currentData, setCurrentData] = useState([
        CheckOutData[0].name,
        CheckOutData[0].address,
        CheckOutData[0].city,
        CheckOutData[0].phone,
        CheckOutData[0].id,
    ]);

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
        const enteredCardNumber = e.target.value.replace(/\s/g, '');
        if (enteredCardNumber == '0000000000000000') {
            setIsCardValid(false);
        }
        setCardNumber(enteredCardNumber);
        setIsCardValid(luhnCheck(enteredCardNumber));
    };

    const handleCvv = (e) => {
        const inputValue = e.target.value;
        if (!/^[0-9]{3}$/.test(inputValue) || inputValue == '000') {
            setCvv('');
        } else {
            setCvv(inputValue);
        }
    };
    
    const handleMonth = (e) => {
        const inputValue = e.target.value;
        if (inputValue > 12 || inputValue < 1) {
            setMonth('');
        } else {
            setMonth(inputValue);
        }
    };

    const handleYear = (e) => {
        const inputValue = e.target.value;
        if (inputValue < new Date().getFullYear() || inputValue > new Date().getFullYear() + 10) {
            setYear('');
        } else {
            setYear(inputValue);
        }
    };

    const renderPayment = () => {
        if (paymentType === 'credit') {
            
            return (
                <>
                <hr />
                <form method='' action='' className='roform'>
                    <div>
                        <label style={{fontSize:"20px"}}>Credit Card</label>
                        <input
                            className={`form-control ${!isCardValid ? 'is-invalid' : ''}`}
                            type='text'
                            placeholder='**** **** **** ****'
                            name='cardNumber'
                            onChange={handleCardNumber}
                            maxLength={16}
                            style={{ padding: "10px" }}
                        />
                        {!isCardValid && <p style={{color:"red",fontSize:"16px"}} className="invalid-feedback">Invalid Card Number</p>}
                        <br />
                        <div className='seclabel'>
                            <label style={{ fontSize: "20px" }}>EXPIRY DATE</label>
                            <div className='twodivs'>
                                <div className='firstdivInput' >
                                    <input
                                        className='w-50'
                                        type='text'
                                        placeholder='MM'
                                        name='mm'
                                        id='mm'
                                        maxLength={2}
                                        onChange={handleMonth}
                                        style={{padding:"10px"}}
                                    />
                                </div>
                                <input
                                    className='w-50'
                                    type='text'
                                    placeholder='YY'
                                    name='yy'
                                    id='yy'
                                    maxLength={4}
                                    onChange={handleYear}
                                    style={{ padding: "10px" }}
                                />
                            </div>
                            <div style={{ display: "flex", justifyContent:"space-around",width:"33%" }}>
                                {month === '' ? (
                                    <p style={{ color: 'red', fontSize: '14px' }}>Invalid month</p>
                                ) : <p></p>}
                                {year === '' ? (
                                    <p style={{ color: 'red', fontSize: '14px', paddingLeft: "50px" }}>Invalid year</p>
                                    ) : <p></p>}
                            </div>
                            <div className='cvv'>
                                <label style={{ fontSize: "20px" }}>CVV</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='***'
                                    name='cvv'
                                    maxLength={3}
                                    onChange={handleCvv}
                                    style={{ padding: "10px" }}

                                />
                                {cvv === '' ? (
                                    <p style={{ color: 'red', fontSize: '14px' }}>Invalid CVV</p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </form>
    </>
            );
        }
        window.scrollTo({
            bottom: "0px",
            behavior: 'smooth'
        });
        return null;
    };

    const saveChanges = (e) => {
        setCurrentData(e.target.newAddress.value);
        setCurrentData(e.target.newName.value);
        setCurrentData(e.target.newCity.value);
        setCurrentData(e.target.newPhone.value);
        e.preventDefault()
        closeModal();
        return false;
    }

    const renderButton = () => {
        if (paymentType == "credit") {
            if (month != '' && year != '' && (isCardValid != true || isCardValid != '0000000000000000') && cvv != '') {
                return (
                    <button className='orderbtn'>Place Order</button>
                )
            } else {
                return <button className='orderbtn' style={{background:"grey",pointerEvents:"none"}} type='disabled'>Place Order</button>
            }
        } else{
            return <button className='orderbtn'>Place Order</button>
        }
    }

    return (
        <div>
        <div className='nav'>
            <div className='widtNav'>
                    <div className='first'>
                        { "Cart"}
                    </div>
                    <div className='seconde'>
                        {"Check Out"}
                    </div>
                    <div className='third'>
                        {"Logo"}
                    </div>
            </div>
        </div>
        <div className='container'>
            <div className='clientData'>
                <p className='titleSection'>Shipping Data</p>
                <div className='seccontainer shipping'>
                    <div className='firstDiv'>
                        <img src={locations} id='locationImg' alt='Error to find' title='Your location' />
                        <div className='content_user'>
                                    <React.Fragment key={currentData[4]}>
                                    <p>{currentData[0]}</p>
                                    <p>{currentData[1]}</p>
                                    <p>{currentData[2]}</p>
                                    <p>{currentData[3]}</p>
                                    </React.Fragment>
                        </div>
                    </div>
                    <div className='leaveDoor'>
                        <hr style={{ opacity: ".2" }} />
                        <div className='change'>
                            <form className='formaction' about='' action='' method=''>
                                <input type='checkbox' name='leavedoorname' />
                                <p>Leave the door</p>
                            </form>
                            <button className='btn-modal' style={{ outline: "none", border: "none", background: "white", color: "blue", textDecoration: "underline", marginTop: "-15px" }} type="button" onClick={changeAddress}>
                                Change address/Edit data
                            </button>
                        </div>
                    </div>
                </div>
                <br />
                <p className='titleSection'>Your Order</p>
                <div className='seccontainer order'>
                    {CheckOutData.map((user) => {
                        return user.cart.map((item) => {
                            return (
                                <div className={`${item.name_product} item`} key={item.id}>
                                    <div className='productcontainer'>
                                        <div className='badgee position-relative'>
                                            <span style={{ top: "20px", left: "70px", padding: "7px",fontSize:"15px" }} className="position-absolute translate-middle badge rounded-pill bg-secondary">
                                                {item.number_product}
                                            </span>
                                            <img src={watch} alt="Can't Find the source" />
                                        </div>
                                        <div className='dataOfProduct'>
                                            <p>{item.category_name}</p>
                                            <p>{item.name_product}</p>
                                            <p>
                                                {user.Currency}: <span style={{ color: "green" }}>{item.price_product}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        });
                    })}
                </div>
                <br />

                <p className='titleSection'>Payment</p>
                <div className='payment'>
                    <div className='flexpayment'>
                        <div className={`typemoney ${paymentType === 'credit' ? 'active' : ''}`} id='bo' onClick={() => setPaymentType('credit')}>
                            <img src={credit} alt="Can't find the source" />
                            <p>Debit/Credit Card</p>
                        </div>
                        <div className={`typemoney ${paymentType === 'cash' ? 'active' : ''}`} onClick={() => setPaymentType('cash')}>
                            <img src={cash} alt="Can't find the source" />
                            <p>Extra Charges Can be applied</p>
                        </div>
                    </div>
                    {renderPayment()}
                </div>
            </div>

            <div class='orderData'>
                <p className='titleSection'>Order Summary</p>
                <div className='details ow'>
                    <h3 style={{ padding: "10px" }}>Our Details</h3>
                    <div className='subTotal'>
                        <p>SubTotal</p>
                        <p>
                            {CheckOutData[0].Currency + " "}
                            {CheckOutData[0].cart.reduce((acc, curr) => {
                                return acc + parseFloat(curr.price_product);
                            }, 0).toFixed(2)}
                        </p>
                    </div>
                    <div className='shippingFree subTotal'>
                        <p>Shipping</p>
                        
                            {CheckOutData[0].cart.reduce((acc, curr) => {
                                return acc + parseFloat(curr.price_product);
                            }, 0).toFixed(2) < 350 ? <p style={{ color: "green", fontWeight: "700", fontSize: "24px" }}>Free</p> : 
                            <p style={{ color: "red", fontWeight: "700", fontSize: "24px" }}>{"EGP "+15}</p>
                                }
                    </div>
                    <hr />
                    <div className='subTotal'>
                        <p style={{ fontWeight: "700" }}>Type Payment</p>
                        <p style={{ color: "green", fontWeight: "700" }}>
                            {paymentType}
                        </p>
                    </div>
                    <div className='subTotal'>
                        <p style={{ fontWeight: "700" }}>Total</p>
                        <p style={{ color: "green", fontWeight: "700" }}>
                            <p style={{ color: "green", fontWeight: "700", fontSize: "24px" }}>{CheckOutData[0].Currency + (+CheckOutData[0].cart.reduce((acc, curr) => {
                                return acc + parseFloat(curr.price_product);
                            }, 0).toFixed(2) + 15)}</p>
                        </p>
                    </div>
                </div>
                {renderButton()}
            </div>

            <Modal style={{marginTop:"8%",padding:"30px"}} show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding: "20px" }}>
                    <form >
                        <input
                            style={{ width: "300px", marginRight: "13px", padding:"10px" }}
                            type='text'
                            className='form-control w-100'
                            placeholder='New Name'
                            name='newName'
                            defaultValue={currentData[0]}
                        />
                        <br />
                            <input
                                style={{ width: "300px", marginRight: "13px", padding: "10px" }}
                                type='text'
                                className='form-control w-100'
                                placeholder='New Address'
                                name='newAddress'
                                defaultValue={currentData[1]}
                            />
                        <br />
                            <input
                                style={{ width: "300px", marginRight: "13px", padding: "10px" }}
                                type='text'
                                className='form-control w-100'
                                placeholder='New City'
                                name='newCity'
                                defaultValue={currentData[2]}
                            />
                        <br />
                            <input
                                style={{ width: "300px", marginRight: "13px", padding: "10px" }}
                                type='text'
                                className='form-control w-100'
                                placeholder='New Phone'
                                name='newPhone'
                                defaultValue={currentData[3]}
                            />
                        <br />
                        <input type='submit' onSubmit={(e) => saveChanges(e)} value={"Save Changes"} className='btn btn-primary w-100' />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>
    );
}

export default CheckOut;
