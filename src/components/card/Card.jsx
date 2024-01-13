import { MdStarRate } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { LuBellRing } from "react-icons/lu";

import { FaEye } from "react-icons/fa";

import React, { useState } from "react";
import "./card.css";

function Card({ data }) {
  const [hurt, setHurt] = useState(true);

  return (
    <>
      <div className="product-card position-relative">
        <div className="product-img">
          <img src="./src/assets/images/tab.jpg" alt="" />
        </div>
        <div className="product-info">
          <p className="product-brand">{data.brand}</p>
          <p className="product-title">{data.title}</p>
          <div className="product-rate">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return Math.floor(data.rate) >= index ? <MdStarRate fill="#ffc30e" /> : <MdStarRate fill="gray" fillOpacity={0.339} />;
            })}
          </div>
          <div className="product-price">{data.price}$</div>
        </div>
        <div className="product-hover position-absolute top-0 gap-5 end-0 p-2">
          {hurt ? (
            <IoMdHeart onClick={() => setHurt(!hurt)} size={35} color="f08804" className="rounded-pill card-icon mb-1" />
          ) : (
            <IoIosHeartEmpty onClick={() => setHurt(!hurt)} size={35} fillOpacity={0.9} className="rounded-pill card-icon mb-1" />
          )}
          <div className="hide d-flex align-items-center flex-column">
            <MdAddShoppingCart fillOpacity={0.9} size={33} className="rounded-pill card-icon mb-1" />
            <FaEye size={30} fillOpacity={0.9} className="rounded-pill card-icon mb-1" />
            <LuBellRing size={30} fillOpacity={0.9} className="rounded-pill card-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
