import React from "react";
import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Swal from "sweetalert2";
import Modal from "react-modal";
//css changed may
import "./ProductInfo.css";
// importing data form a local file
import data from "../data.json";

//SVGS
import { MdShoppingCartCheckout } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
// Cards
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
// Components
import "./ProductInfo.css";

function Productsdetails() {
  // How Many Would you like ?
  const reduce = (state, action) => {
    switch (action.type) {
      case "increase":
        return state + 1;
      case "decrease":
        return state > 0 ? state - 1 : state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reduce, 0);

  // ( Fetching ) Getting a single products Locally
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = data.find((item) => item.id === parseInt(id, 10));

    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      console.error(`Product with ID ${id} not found.`);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product);

  // ( Fetching ) Getting a single products online api
  // const Productsparams = useParams();
  // const [product, setProduct] = useState([]);
  // const getdata = async () => {
  //   const respone = await axios.get(
  //     `https://fakestoreapi.com/products/${Productsparams.id}`
  //   );
  //   setProduct(respone.data);
  // };
  // useEffect(() => {
  //   getdata();
  // });
  // rating automata
  document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", (e) => {
      if (!button.classList.contains("loading")) {
        button.classList.add("loading");

        setTimeout(() => button.classList.remove("loading"), 3700);
      }
      e.preventDefault();
    })
  );



  const WishListAdd = () => {
    // Use SweetAlert to show a custom message
    Swal.fire({
      icon: "success",
      title: "Added to WishList!",
      showConfirmButton: false,
      timer: 1500, 
    });
    setTimeout(() => {

    }, 2000);
  };

  const CompareListAdd = () => {
    // Use SweetAlert to show a custom message
    Swal.fire({
      icon: "success",
      title: "Added to Compare List!",
      showConfirmButton: false,
      timer: 1200, 
    });
 
  };




  const total = state * product.price;
  const rating = Math.ceil(product.rate);
  const ratediv = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="star">
      ★
    </span>
  ));

  return (
    <>
      <div className="main">
        {/* Dynamic: Image */}
        <div className="first-section row">
          <div className="first-big col-12" id="imagemagnify">
            <ReactImageMagnify
              id="mag"
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: product.img,
                },
                largeImage: {
                  src: product.img,
                  width: 900,
                  height: 800,
                },
                isHintEnabled: true,
              }}
            />
          </div>
          <div className="subimages container col-12 row " id="imagemagnify">
            {product?.subImgs?.map((sub, index) => (
              <div key={index} className="col-6">
                <ReactImageMagnify
               id="mag"
                  {...{
                    smallImage: {
                      alt: `Subimage ${index + 1}`,
                      isFluidWidth: true,
                      src: sub,
                    },
                    largeImage: {
                      src: sub,
                      width: 1200,
                      height: 1000,
                    },
                    isHintEnabled: true,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="product-cardd ">
          <div className="product-info">
            {/* Dynamic: Title */}
            <h2 className="product-title">{product.title}</h2>
            <hr />
            {/* Dynamic: Price */}
            <div className="price">${product.price}</div>
            {/* Dynamic: Reviews */}
            <div className="rating d-flex ">
              {ratediv}
              <p>({rating} review)</p>
              <hr />
            </div>
            <p>
              <a href="#review" className="writing-rev">
                Write a review
              </a>
            </p>
            <hr />
            <div className="brand-info">
              <p>
                <span>Brand: </span>
                <span>
                  {/* Dynamic:  Brand */}
                  {product.brand}
                </span>
              </p>
              <p className="d-flex">
                {" "}
                <span>Tags: </span>
                <p className="spans-paragraph">
                  {/* Dynamic: Tags */}
                  <span> mobile </span>
                  <span> speaker </span>
                  <span> wire </span>
                  <span> oppo </span>
                </p>
              </p>
              <p>Size </p>
              <button className="btn">L</button>
              <button className="btn">M</button>
              <div className="color-section">
                <p>Color </p>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="option1"
                    name="option"
                    value="Option1"
                  />
                  <label for="option1"></label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="option2"
                    name="option"
                    value="Option2"
                  />
                  <label for="option2"></label>
                </div>
              </div>
              <div className="quantity">
                <p>Quantity </p>

                <div className="button-quan">
                  <div
                    onClick={() => {
                      dispatch({ type: "increase" });
                    }}
                    tabIndex={0}
                    className="plusButton"
                  >
                    <svg
                      className="plusIcon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                    >
                      <g mask="url(#mask0_21_345)">
                        <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z" />
                      </g>
                    </svg>
                  </div>
                  <span>{state}</span>
                  {/* <input
                        type="button"
                        value="-"
                        onClick={() => {
                          dispatch({ type: "decrease" });
                        }}
                      /> */}
                  <div
                    onClick={() => {
                      dispatch({ type: "decrease" });
                    }}
                    tabIndex={0}
                    className="minusButton"
                  ></div>
                </div>
                <div className="buttons">
                  {/* <button
                    type="button"
                    className="btn-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add To Cart
                  </button> */}
                  <>
                    <button className="button" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                      <span>Add to cart</span>
                      <div className="cart">
                        <svg viewBox="0 0 36 26">
                          <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5" />
                          <polyline points="15 13.5 17 15.5 22 10.5" />
                        </svg>
                      </div>
                    </button>
                    {/* dribbble - twitter */}
                    <a
                      className="dribbble"
                      href="https://dribbble.com/shots/9713067-Add-to-cart"
                      target="_blank"
                    >
                      <img
                        src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
                        alt=""
                      />
                    </a>
                  </>

                  <button className="btn-3">Buy It Now</button>
                </div>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade main-mon"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog " id="dialogu">
                    <div className="modal-content " id="modal-main">  
                      <div className="modal-body modal-clas d-flex">
                        <div className="image-cart">
                          <img src={product.img} className="imgcart" alt="" />
                        </div>
                        <div className="infocart">
                          <p>{product.title}</p>
                          <p>
                            Quantity: <span> {state} </span>
                          </p>
                          <p>
                            Price: <span> ${product.price}</span>
                          </p>
                          <p>
                            Total: <span> ${total}</span>
                          </p>
                        </div>
                      </div>
                      <div className="" id="footer-modal">
                        <a href="#">
                          <p
                            type="button"
                            id="button-footer-close"
                            className=""
                            data-bs-dismiss="modal"
                          >
                            View My Cart
                          </p>
                        </a>
                        <a href="#">
                          <p type="button" id="save-button-footer" className="">
                            Check Out
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="Wish">
                <span className="hearted">
                  <input type="button" onClick={WishListAdd} value="❤️" name="" id="" />
                  <span>Add to wishlist </span>
                </span>



                <span className="hearted">
                  <input type="button" onClick={CompareListAdd} value="🔗" name="" id="" />
                  <span>Add to compare </span>
                </span>
              </div>


              <div className="accrdings">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed w-100"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <MdShoppingCartCheckout className="shoppingCar" />
                        Shopping & Returns
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Free shipping and returns available on all orders! We
                        ship all US domestic orders within 5-10 business days!
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button w-100 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <CiSettings className="MatrialsSVG" />
                        Matrials
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Running Shoes cushions your stride with soft foam to
                        keep you running in comfort. Lightweight knit material
                        wraps your foot in breathable support, while a
                        minimalist design fits in just about anywhere your day
                        takes you.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button w-100 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <CiHeart className="HEARTSVG" />
                        Care Instructions
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Use a soft damp cloth and a drop of mild soap to remove
                        any haze. Air dry.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="share-div">
                <FaRegShareFromSquare className="ShareSVG" />
                <p>Share</p>
              </div>
              <div className="cards-pay">
                <div className="cards">
                  <p>
                    <strong> Payment methods</strong>
                  </p>
                  <FaCcVisa className="Visa" />
                  <FaCcMastercard className="MasterCard" />
                  <FaPaypal className="Paypal" />
                  <FaCcDiscover className="Discover" />
                </div>
              </div>
              <div className="accordion mt-3 faqs" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button w-100 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <IoMdCheckmark className="Mark" />
                      FAQs
                    </button>
                  </h2>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>The Standard Lorem Ipsum Passage</strong> <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi accumsan turpis posuere cursus ultricies. Ut nunc
                      justo, faucibus eget elit quis, vehicula rhoncus nulla.
                      Phasellus convallis sem nec facilisis commodo. Fusce ut
                      molestie turpis. Suspendisse aliquet sed massa in
                      vulputate. Quisque gravida suscipit tincidunt.
                      <br />
                      <strong>
                        At Vero Eos Et Accusamus Et Iusto Odio Dignissimos
                      </strong>{" "}
                      <br />
                      Mauris elementum scelerisque elit non egestas. Cras lacus
                      nibh, pretium quis bibendum nec, dapibus a metus. Morbi
                      eros lectus, aliquam eu aliquam id, fringilla nec eros.
                      Praesent suscipit commodo diam, non viverra turpis dapibus
                      malesuada. Duis cursus metus eu sem eleifend, id rhoncus
                      odio porttitor.
                      <br />
                      <strong>
                        Certain Circumstances And Owing To The Claims Of Duty Or
                        The Obligations
                      </strong>{" "}
                      <br />
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes.
                      <br />
                      <strong>
                        Integer Ultrices Laoreet Nunc In Gravida
                      </strong>{" "}
                      <br />
                      Sed lobortis pulvinar viverra. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Mauris suscipit dolor scelerisque, bibendum
                      tellus ac, pharetra sapien. Praesent lacinia scelerisque
                      odio et consequat. In a facilisis lacus. Maecenas vel
                      lobortis tellus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid desc-main">
        <h3 className="main-title">Description</h3>

        <div className="description">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </div>

        <h3 className="review-title">Reviews</h3>
        <div className="Reviews-div">
          <div className="Reviews-Written">
            <div className="rating ">
              <h4>Customer Reviews</h4>
              <div className="d-flex dd">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★ </span>
                <p> Based on 1 review</p>
                <div className="write-review">
                  <a href="">
                    <p className=""> Write a reveiw</p>
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="rating ">
            {/* Rating Reviews */}
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★ </span>
            {/* Account Name */}
            <h4>Kkllkl</h4>
            <div className="d-flex dd">
              <p> kl on Jan 30, 2023</p>
              <div className="written-review">
                {/* The review and date */}
                <a href="">
                  <p>Report as Inappropriate </p>
                </a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Productsdetails;
