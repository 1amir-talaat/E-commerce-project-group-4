import { MdStarRate } from "react-icons/md";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCheck, FaEye } from "react-icons/fa";

import { useState, useEffect } from "react";
import { useWishlist } from "../../context/WishlistContext";
import { TailSpin } from "react-loader-spinner";

import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./card.css";

function Card(props) {
  // console.log(props);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistLoader, setWishlistLoader] = useState(false);
  const [cartLoader, setCartLoader] = useState(false);
  const [inCart, setInCart] = useState(false);

  const productIdToCheck = props.id;

  useEffect(() => {
    setIsInWishlist(wishlist.some((item) => item.productId === productIdToCheck));
  }, [productIdToCheck, wishlist]);

  const handleAddToCart = async (productId, quantity = 1) => {
    try {
      setCartLoader(true);
      await addToCart(productId, quantity);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setCartLoader(false);
      setInCart(true);
    }
  };

  const handleWishlistAction = async () => {
    try {
      setWishlistLoader(true);

      if (isInWishlist) {
        await removeFromWishlist(productIdToCheck, setWishlistLoader);
      } else {
        await addToWishlist(productIdToCheck, setWishlistLoader);
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    } finally {
      setWishlistLoader(false);
    }
  };

  return (
    <>
      <div className="product-card position-relative p-2 " style={props.grid === 4 ? { display: "flex" } : {}}>
        <Link className="text-dark" to={`product/${props.id}`}>
          <div className="product-img" style={props.grid === 4 ? { height: "240px", width: "35%" } : {}}>
            <img src={props.data.mainImage} alt="" />
          </div>
          <div className={`product-info ${props.grid === 4 && "d-flex flex-column justify-content-center;"}`}>
            <p className="product-brand">{props.data.brand}</p>
            <p className="product-title">{props.data.title}</p>
            <div className="product-rate">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return Math.floor(props.data.rating) >= index ? <MdStarRate fill="#ffc30e" /> : <MdStarRate fill="gray" fillOpacity={0.339} />;
              })}
            </div>
            <div className="product-price">{props.data.price}$</div>
          </div>
        </Link>
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
          ) : isInWishlist ? (
            <IoMdHeart onClick={handleWishlistAction} size={35} color="f08804" className="rounded-pill card-icon mb-1" />
          ) : (
            <IoIosHeartEmpty onClick={handleWishlistAction} size={35} fillOpacity={0.9} className="rounded-pill card-icon mb-1" />
          )}

          <div className="hide d-flex mt-1 align-items-center flex-column">
            {cartLoader ? (
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
            ) : !inCart ? (
              <MdAddShoppingCart onClick={() => handleAddToCart(props.id, 1)} fillOpacity={0.9} size={33} className="rounded-pill card-icon mb-1" />
            ) : (
              <FaCheck fillOpacity={0.9} size={33} className="rounded-pill card-icon mb-1" />
            )}
            <FaEye size={30} fillOpacity={0.9} className="rounded-pill card-icon mb-1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
