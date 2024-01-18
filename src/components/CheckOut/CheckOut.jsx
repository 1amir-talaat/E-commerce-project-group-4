import React from 'react'
import "./CheckOutData.css"
import { CheckOutData } from './usersData';
import loca from './images/2838912.png'
import watch from './images/watch.jpg'
import credit from './images/360_F_307140983_MDNd4Mtv5qgd3LAUK40ru1EPyYWL4elG.jpg';
import cash from "./images/download.png";
function CheckOut() {
    return(
        <div className='container'>
            <div className='clientData'>
                <p className='titleSection'>Shipping Address</p>
                <div className='seccontainer shipping'>
                    <div className='firstDiv'>
                        <img src={loca} id='locationImg' alt='Error to find' title='Your location' />
                        <div className='contetn_user'>
                            {
                                CheckOutData.map((userdata) => {
                                    return (
                                        <>
                                            <p>{userdata.name}</p>
                                            <p>{userdata.adderss}</p>
                                            <p>{userdata.city}</p>
                                            <p>{userdata.phone}</p>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                        <div className='leaveDoor'>
                            <hr style={{ opacity: ".2" }} />
                            <form className='formaction' about='' action='' method=''>
                                <input type='checkbox' name='leavedoorname' />
                                <p>Leave the door</p>
                            </form>
                        </div>
                </div>
                <p className='titleSection'>Your Order</p>
                <div className='seccontainer order'>
                    {
                        CheckOutData.map((user) => {
                            return(
                                user.cart.map((item) => {
                                    return (
                                        <div className={`${item.name_product} item`} key={item.id}>
                                            <p className='p-name'>{item.name_product} ({(item.number_product > 1 ? item.number_product + " items" : item.number_product + " item")})</p>
                                            <div className='productcontainer'>
                                                {/* <img src={item.img_product} alt="Can't Find the source" /> */}
                                                <img src={watch} alt="Can't Find the source" />
                                                <div className='dataOfProduct'>
                                                    <p>{item.category_name}</p>
                                                    <p>{item.name_product}</p>
                                                    <p>{user.Currency}: <span style={{color:"green"}}>{item.price_product}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        })
                    }
                </div>
                <p className='titleSection'>Payement</p>
                <div className='seccontainer payement'>

                    <div className='credit typemoney'>
                        <img src={credit} alt="Can't find the source"/>
                        <p>Debit/Credit Card</p>
                    </div>
                    <hr />
                    <div className='cash typemoney'>
                        <img src={cash} alt="Can't find the source" />
                        <p>Extra Charges</p>
                        <p>Can be applied</p>
                    </div>

                </div>
            </div>

            <div className='orderData'>
                <p className='titleSection'>Order Summary</p>
                <div className='details ow'>
                    <h3 style={{padding:"10px"}}>Our Details</h3>
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
                        <p>Shipping Free</p>
                        <p style={{ color: "green", fontWeight: "700",fontSize:"24px" }}>
                            Free
                        </p>
                    </div>
                    <hr />
                    <div className='subTotal'>
                        <p style={{ fontWeight: "700" }}>Total</p>
                        <p style={{ color: "green",fontWeight:"700" }}>
                            {CheckOutData[0].Currency + " "}

                            {CheckOutData[0].cart.reduce((acc, curr) => {
                                return acc + parseFloat(curr.price_product);
                            }, 0).toFixed(2)}
                        </p>
                    </div>
                </div>
                    <button className='orderbtn'>Place Order</button>
            </div>

        </div>
    )
}

export default CheckOut;