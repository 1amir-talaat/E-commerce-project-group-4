import { MdStarRate } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import { FaEye } from "react-icons/fa";
import "./SpecialProductsCard.css";

import React, { useState, useRef } from "react";
import Timer from "../timer/Timer";

function SpecialProductsCard(props) {
  const [hurt, setHurt] = useState(false);
  const [cart, setCart] = useState(false);
  const card = useRef();
  const [mainImg, setMainImg] = useState(props.data.img);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <>
      <div className={`product-card special-products-card position-relative`} style={props.margin && { marginBottom: props.margin }}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="product-img w-50">
            <div className="main-img position-relative">
              <img src={mainImg} alt="" />
              <div className="product-hover position-absolute top-0 gap-5 end-0 p-2">
                {hurt ? (
                  <IoMdHeart onClick={() => setHurt(!hurt)} size={35} color="f08804" className="rounded-pill card-icon mb-1" />
                ) : (
                  <IoIosHeartEmpty onClick={() => setHurt(!hurt)} size={35} fillOpacity={0.9} className="rounded-pill card-icon mb-1" />
                )}
                <div className="hide d-flex align-items-center flex-column">
                  {cart ? (
                    <FaCheck fillOpacity={0.9} size={33} className="rounded-pill card-icon mb-1" />
                  ) : (
                    <MdAddShoppingCart onClick={() => setCart(!cart)} fillOpacity={0.9} size={33} className="rounded-pill card-icon mb-1" />
                  )}
                  <FaEye size={30} fillOpacity={0.9} className="rounded-pill card-icon mb-1" />
                </div>
              </div>
            </div>
            <div className="sub-imgs d-flex position-relative">
              <MdArrowBackIosNew onClick={() => card.current.slidePrev()} className="special-products-arrow arrow-back me-2" size={20} />
              <div className="m-auto carouse-continer">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={2}
                  onSwiper={(swiper) => {
                    card.current = swiper;
                  }}
                >
                  {props.data.subImgs.map((src) => {
                    return (
                      <SwiperSlide onClick={() => setMainImg(src)}>
                        <div className="sub-img">
                          <img src={src} alt="" className="w-100" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              <MdArrowForwardIos onClick={() => card.current.slideNext()} className="special-products-arrow arrow-front ms-2" size={20} />
            </div>
          </div>
          <div className="product-info w-50">
            <p className="product-brand">{props.data.brand}</p>
            <p className="product-title">{props.data.title}</p>
            <div className="product-rate">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return Math.floor(props.data.rate) >= index ? <MdStarRate fill="#ffc30e" /> : <MdStarRate fill="gray" fillOpacity={0.339} />;
              })}
            </div>
            <p>
              <Timer expiryTimestamp={time}/>
            </p>
            <p className="product-price">{props.data.price}$</p>

            <a href="#" className="product-btn btn btn-secondary">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialProductsCard;
