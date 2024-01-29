import { MdStarRate } from "react-icons/md";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCheck, FaEye } from "react-icons/fa";

import { useState, useEffect } from "react";
import { useWishlist } from "../../context/WishlistContext";
import { TailSpin } from "react-loader-spinner";

import "./card.css";

function Card(props) {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [hurt, setHurt] = useState(false);
  const [wishlistLoader, setWishlistLoader] = useState(false);
  const [cart, setCart] = useState(false);

  const productIdToCheck = 2;

  useEffect(() => {
    setHurt(wishlist.some((item) => item.productId == productIdToCheck));
  }, [productIdToCheck, wishlist]);

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
      <div className="product-card position-relative p-2 " style={props.grid == 4 ? { display: "flex" } : {}}>
        <div className="product-img" style={props.grid == 4 ? { height: "240px", width: "35%" } : {}}>
          <img src={props.data.img} alt="" />
        </div>
        <div className={`product-info ${props.grid == 4 && "d-flex flex-column justify-content-center;"}`}>
          <p className="product-brand">{props.data.brand}</p>
          <p className="product-title">{props.data.title}</p>
          <div className="product-rate">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return Math.floor(props.data.rate) >= index ? <MdStarRate fill="#ffc30e" /> : <MdStarRate fill="gray" fillOpacity={0.339} />;
            })}
          </div>
          <div className="product-price">{props.data.price}$</div>
        </div>
        <div className="product-hover position-absolute top-0 gap-5 gap-sm-1 end-0 p-2">
          {wishlistLoader ? (
            <TailSpin
              visible={true}
              height="26"
              width="26"
              color="#f08804"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{width:"35px", height:"35px"}}
              className="rounded-pill card-icon mb-1"
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
    </>
  );
}

export default Card;
