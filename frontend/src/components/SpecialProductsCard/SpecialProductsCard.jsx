import { MdStarRate } from "react-icons/md";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCheck, FaEye } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import { useWishlist } from "../../context/WishlistContext";
import { TailSpin } from "react-loader-spinner";
import { MdArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import "./SpecialProductsCard.css";

import { useRef } from "react";
import Timer from "../timer/Timer";

function SpecialProductsCard(props) {
  console.log(props);
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [hurt, setHurt] = useState(false);
  const [wishlistLoader, setWishlistLoader] = useState(false);

  const [cart, setCart] = useState(false);
  const card = useRef();
  const [mainImg, setMainImg] = useState(props.data.mainImage);

  const time = new Date(props.data.saleEndDate);

  const handleWishlistAction = async () => {
    try {
      if (hurt) {
        await removeFromWishlist(productIdToCheck, setWishlistLoader);
      } else {
        await addToWishlist(productIdToCheck, setWishlistLoader);
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    <>
      <div className={`product-card special-products-card position-relative ${props.margin ? "mb-2" : ""}`}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="product-img w-50">
            <div className="main-img position-relative">
              <img src={mainImg} alt="" />
              <div className="product-hover position-absolute top-0 gap-5 gap-sm-1 end-0 p-2">
                {wishlistLoader ? (
                  <TailSpin
                    visible={true}
                    height="26"
                    width="26"
                    color="#f08804"
                    ariaLabel="tail-spin-loading"
                    radius="1.8"
                    wrapperStyle={{ width: "35px", height: "35px" }}
                    className="rounded-pill card-icon"
                  />
                ) : hurt ? (
                  <IoMdHeart onClick={handleWishlistAction} size={35} color="f08804" className="rounded-pill card-icon mb-1" />
                ) : (
                  <IoIosHeartEmpty onClick={handleWishlistAction} size={35} fillOpacity={0.9} className="rounded-pill card-icon mb-1" />
                )}

                <div className="hide d-flex mt-1 align-items-center flex-column">
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
                  {props.data.subImgs.map((src, index) => {
                    return (
                      <SwiperSlide key={index} onClick={() => setMainImg(src.imageUrl)}>
                        <div className="sub-img">
                          <img src={src.imageUrl} alt="" className="w-100" />
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
                return Math.floor(props.data.rating) >= index ? <MdStarRate fill="#ffc30e" /> : <MdStarRate fill="gray" fillOpacity={0.339} />;
              })}
            </div>
            <p className="product-price">{props.data.price}$</p>
            <div className="mb-3">
              <Timer expiryTimestamp={time} />
            </div>

            <Link to={`product/${props.id}`} className="product-btn btn btn-secondary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialProductsCard;
