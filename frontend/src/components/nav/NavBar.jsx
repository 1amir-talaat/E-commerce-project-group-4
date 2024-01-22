import { TiArrowSortedDown } from "react-icons/ti";
import { RiMenuFill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosSearch } from "react-icons/io";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useAuth } from "../../context/AuthContext";

import tempData from "./temp-data.json";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  const [wishlist, setWishlist] = useState(0);

  return (
    <>
      <nav className="navbar text-white">
        <div className="container-fluid px-xl-5 px-md-5 py-2 px-md-4">
          <div className="row w-100">
            <Link className="col-3 col-xxl-1 col-md-2 col-lg-1 col-xl-1 col-sm-7" to={"/"}>
              <h2>logo</h2>
            </Link>
            <div className="col-md-6 col-xl-6  col-sm-12 col-xxl-8 col-lg-6 px-xl-4 ps-xl-5 px-lg-2 px-md-3 d-none d-md-block  ">
              <div className="input-group">
                <input type="text" className="form-control py-2 shadow-none" placeholder="search" />
                <div className="input-group-text">
                  <IoIosSearch size={23} />
                </div>
              </div>
            </div>

            <div className="col-9 col-md-4  col-sm-5 end col-xl-4 col-xxl-3 col-lg-4  col-xxl-3 d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-around  w-100">
                {/* account */}

                <div className="item">
                  {isAuthenticated ? (
                    <div className="dropdown border-0 position-relative">
                      <div className=" d-flex align-items-center dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="dropdown-text d-flex flex-column  ">
                          <img src="./src/assets/images/user.svg" className="navbar-show" alt="" />
                          <span className="nav-text navbar-hide">hello, name</span>
                          <span className="nav-text navbar-hide">My Account</span>
                        </div>
                        <TiArrowSortedDown className="drop-down" />
                      </div>
                      <div className="text-center dropdown-menu progile-detales position-absolute">
                        <div className="dropdown-item-container d-flex flex-column text-dark">
                          <a className="link text-dark">
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/orders_menu_icon_v3.svg" className="" />
                            Orders
                          </a>
                          <a className="link text-dark">
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/addresses_menu_icon_v3.svg" className="" />
                            Addresses
                          </a>
                          <a className="link text-dark">
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/payment_menu_icon_v3.svg" alt="Payments" className="" />
                            Payments
                          </a>
                          <a className="link text-dark">
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/profile_menu_icon_v3.svg" className="" />
                            Profile
                          </a>
                        </div>
                        <div onClick={logout} className="text-dark">
                          Sign Out
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=" d-flex align-items-center">
                      <img src="./src/assets/images/user.svg" alt="" />
                      <Link to={"/login"} className="nav-text ps-1">
                        Login
                      </Link>
                    </div>
                  )}
                </div>

                {/* Wishlist */}
                <div className="item">
                  <div className=" d-flex align-items-center position-relative">
                    <div className="wishlist">
                      <img src="./src/assets/images/wishlist.svg" width={35} alt="" />
                      {wishlist >= 1 && <span className="position-absolute translate-middle badge rounded-pill ">{wishlist}</span>}
                    </div>
                    <span className="nav-text ps-2 navbar-hide">Wishlist</span>
                  </div>
                </div>

                <div className="item">
                  {/* cart */}
                  <div className="d-flex position-relative ">
                    <div className="cart-icon" />
                    <span className="cart-text">cart</span>
                    <span className="cart-number">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group d-flex d-md-none mt-3 mx-sm-5 mx-2 ">
            <input type="text" className="form-control py-2 shadow-none" placeholder="search" />
            <div className="input-group-text">
              <IoIosSearch size={23} />
            </div>
          </div>
        </div>
      </nav>

      <div className="sub-nav border-0">
        <div className="container-fluid px-xl-5 py-2 px-md-4 text-white">
          <div className="d-flex">
            <div className="text-white d-flex align-items-center menu dropdown border-0 position-relative">
              <div className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="col-auto text-white d-flex align-items-center menu">
                  <RiMenuFill size={23} className="me-2 d-block d-md-none" />
                  <span className="munu-text pe-2 d-none d-md-block">All Category</span>
                  <span className="munu-text pe-2 d-block d-md-none">Menu</span>
                  <TiArrowSortedDown size={23} className="category-dropdown d-none d-md-block" />
                </div>
              </div>

              <div className="category-container dropdown-menu position-absolute">
                <div className="categprs">
                  {tempData.categorys.map((ctegory, index) => {
                    return (
                      <Link
                        to={{ pathname: "/products", search: `?data=${JSON.stringify({ categories: [ctegory] })}` }}
                        className="ctegory-item"
                        key={index}
                      >
                        {ctegory}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link to={"/products"} className="menu ms-3 pe-3">
              all products
            </Link>
            <div className="nav-swiper ps-4 d-flex align-items-center">
              <Swiper spaceBetween={50} slidesPerView={"auto"}>
                {tempData.categorys.map((ctegory, index) => {
                  return (
                    <SwiperSlide className="swiper-item" key={index}>
                      <Link to={{ pathname: "/products", search: `?data=${JSON.stringify({ categories: [ctegory] })}` }}> {ctegory}</Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
