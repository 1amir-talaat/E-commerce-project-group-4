import { Link } from "react-router-dom";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

import Card from "../../components/card/Card";
import BannerCard from "../../components/BannerCard/BannerCard";
import SpecialProductsCard from "../../components/SpecialProductsCard/SpecialProductsCard";
import PopularProductsCard from "../../components/PopularProductsSection/PopularProductsCard";

import "swiper/css";
import "./Home.css";

import { useProduct } from "../../context/ProductsContext";

function Home() {
  const featuredCollectionRef = useRef();
  const specialProductsRef = useRef();

  const { products } = useProduct();

  const offerProducts = products.filter((product) => {
    return product.sale != null;
  });

  
  const midpoint = Math.ceil(offerProducts.length / 2);
  
  const firstHalf = offerProducts.slice(0, midpoint);
  const secondHalf = offerProducts.slice(-midpoint);
  console.log(secondHalf);

  return (
    <>
      {/* Start Landing Page*/}
      <section className="landing-page py-5 bg-white">
        <div className="container">
          <div className="row">
            <div id="carouselExampleIndicators" className="carousel slide col-lg-6 position-relative " data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="src/assets/images/main-banner-1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="src/assets/images/main-banner.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div className="mainland-text position-absolute handel-overflow pb-2">
                <h4>Supercharged for pros.</h4>
                <h5>special sale</h5>
                <p>
                  from $999.00 or $41.62/mo.
                  <br />
                  for 24 mo. Footnote*
                </p>
                <Link to={{ pathname: "/products", search: `?data=${JSON.stringify({ sale: true })}` }} className="button">
                  buy now
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" d-flex flex-wrap justify-content-between align-items-center">
                <Link to={"/products"} className="small-mainland position-relative">
                  <img src="src/assets/images/catbanner-01.jpg" alt="" />
                  <div className="small-mainland-text position-absolute">
                    <h4>best sale</h4>
                    <h5 className="text-dark">Laptops Max</h5>
                    <p>
                      from $1699.00 or
                      <br />
                      $64.62/mo.
                    </p>
                  </div>
                </Link>
                <div className="small-mainland position-relative">
                  <img src="src/assets/images/catbanner-02.jpg " alt="" />
                  <div className="small-mainland-text position-absolute">
                    <h4>new arival</h4>
                    <h5 className="text-dark">By Ipad Air</h5>
                    <p>from $599 or $49.91/mo.</p>
                  </div>
                </div>
                <div className="small-mainland position-relative ">
                  <img src="src/assets/images/catbanner-03.jpg" alt="" />
                  <div className="small-mainland-text position-absolute">
                    <h4>15% off</h4>
                    <h5 className="text-dark">Smartwatch 7</h5>
                    <p>
                      shop the latest band
                      <br />
                      stylys and colors.
                    </p>
                  </div>
                </div>
                <div className="small-mainland position-relative">
                  <img src="src/assets/images/catbanner-04.jpg" alt="" />
                  <div className="small-mainland-text position-absolute">
                    <h4>free engraving</h4>
                    <h5 className="text-dark">AirPods Max</h5>
                    <p>
                      fHigh-fidelity playback &.
                      <br />
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Landing Page*/}
      {/* Start Services */}
      <section className="px-0 p services py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className=" d-flex align-items-center justify-content-evenly flex-wrap">
                <div className="d-flex align-items-center serve ">
                  <img src="src/assets/images/service.png" alt="" />
                  <div className="ms-2">
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center serve">
                  <img src="src/assets/images/service-02.png" alt="" />
                  <div className="ms-2">
                    <h6>Daily Suprise Offers</h6>
                    <p className="mb-0">Save up to 25$ off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center serve">
                  <img src="src/assets/images/service-03.png" alt="" />
                  <div className="ms-2">
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center serve">
                  <img src="src/assets/images/service-04.png" alt="" />
                  <div className="ms-2">
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory default price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center serve">
                  <img src="src/assets/images/service-05.png" alt="" />
                  <div className="ms-2">
                    <h6>Secure payments</h6>
                    <p className="mb-0">100% protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services */}
      {/* start section 3 */}
      <section className="categories-section home-wrapper-2 py-5">
        <div className="container">
          <div className="categories d-flex align-items-center justify-content-between bg-white flex-wrap">
            <div className="categorie-item d-flex align-items-center justify-content-between">
              <div>
                <h6>Camera</h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img src="./src/assets/images/camera.jpg" alt="camera" />
            </div>
            <div className="categorie-item d-flex align-items-center justify-content-between">
              <div>
                <h6>Smart Tv</h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img src="./src/assets/images/tv.jpg" alt="camera" />
            </div>
            <div className="categorie-item d-flex align-items-center justify-content-between">
              <div>
                <h6>Music & Gaming</h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img src="./src/assets/images/headphone.jpg" alt="camera" />
            </div>
            <div className="categorie-item d-flex align-items-center justify-content-between">
              <div>
                <h6>Smart Watch</h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img width={110} src="./src/assets/images/watch.jpg" alt="camera" />
            </div>
            <div className="categorie-item d-flex align-items-center justify-content-between">
              <div>
                <h6>Mobiles & Taplet </h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img src="./src/assets/images/camera.jpg" alt="camera" />
            </div>
            <div className="categorie-item d-flex align-items-center justify-content-between">
              <div>
                <h6>Accessories</h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img src="./src/assets/images/acc.jpg" alt="camera" />
            </div>
            <div className="categorie-item d-flex align-items-center justify-content-between">
              <div>
                <h6>Camera</h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img src="./src/assets/images/camera.jpg" alt="camera" />
            </div>
            <div className="categorie-item d-flex align-items-center justify-content-between">
              <div>
                <h6>Camera</h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img src="./src/assets/images/camera.jpg" alt="camera" />
            </div>
            <div className="categorie-item item-5 d-flex align-items-center justify-content-between">
              <div>
                <h6>Camera</h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img src="./src/assets/images/camera.jpg" alt="camera" />
            </div>
            <div className="categorie-item item-6 d-flex align-items-center justify-content-between">
              <div>
                <h6>Camera</h6>
                <p className="opacity-50">10 item</p>
              </div>
              <img src="./src/assets/images/camera.jpg" alt="camera" />
            </div>
          </div>
        </div>
      </section>
      {/* end section 3 */}
      {/* start Featured Collection */}
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3>Featured Collection</h3>
            <div>
              <MdArrowBackIosNew onClick={() => featuredCollectionRef.current.slidePrev()} className="swiper-arrow me-2" size={23} />
              <MdArrowForwardIos onClick={() => featuredCollectionRef.current.slideNext()} className="swiper-arrow" size={23} />
            </div>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerGroup={2}
            onSwiper={(swiper) => {
              featuredCollectionRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              660: {
                slidesPerView: 3,
              },
              990: {
                slidesPerView: 4,
              },
              1270: {
                slidesPerView: 5,
              },
              1470: {
                slidesPerView: 6,
              },
            }}
          >
            {products.map((card) => {
              return (
                <SwiperSlide key={card.id} className="swiper-card">
                  <Card data={card} id={card.id} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* end Featured Collection */}
      {/* start Banner section */}
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              660: {
                slidesPerView: 3,
              },
              1270: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide className="p-1">
              <BannerCard
                data={{
                  text: "white",
                  label: "big screen",
                  subTitle: "Smart Watch Series 7",
                  title: "From $399or $16.62/mo. for 24 mo.*",
                  img: "./src/assets/images/subbanner-01.webp",
                }}
              />
            </SwiperSlide>
            <SwiperSlide className="p-1">
              <BannerCard
                data={{
                  text: "dark",
                  label: "Studio Display",
                  subTitle: "600 nits of brightness.",
                  title: "27-inch 5K Retina display",
                  img: "./src/assets/images/subbanner-02.webp",
                }}
              />
            </SwiperSlide>
            <SwiperSlide className="p-1">
              <BannerCard
                data={{
                  text: "dark",
                  label: "smart phones",
                  subTitle: "Smartphone 13 Pro.",
                  title: "Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*",
                  img: "./src/assets/images/subbanner-03.webp",
                }}
              />
            </SwiperSlide>
            <SwiperSlide className="p-1">
              <BannerCard
                data={{
                  text: "dark",
                  label: "home speakers",
                  subTitle: "Room-filling sound.",
                  title: "From $699 or $116.58/mo. for 12 mo.*",
                  img: "./src/assets/images/subbanner-04.webp ",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* end banner section */}
      {/* start Special Products  */}
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3>Special Products</h3>
            <div>
              <MdArrowBackIosNew onClick={() => specialProductsRef.current.slidePrev()} className="swiper-arrow me-2" size={23} />
              <MdArrowForwardIos onClick={() => specialProductsRef.current.slideNext()} className="swiper-arrow" size={23} />
            </div>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            onSwiper={(swiper) => {
              specialProductsRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              990: {
                slidesPerView: 2,
              },
              1470: {
                slidesPerView: 3,
              },
            }}
          >
            {firstHalf &&
              firstHalf.map((_, index) => {
                console.log(index);
                return (
                  <>
                    <SwiperSlide key={firstHalf[index].id} className="p-1">
                      <SpecialProductsCard id={firstHalf[index].id} margin="20px" data={firstHalf[index]} />
                      <SpecialProductsCard id={secondHalf[index].id} data={secondHalf[index]} />
                    </SwiperSlide>
                  </>
                );
              })}
          </Swiper>
        </div>
      </section>
      {/* end Special Products  */}
      {/* start Popular Products */}
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <PopularProductsCard products={products} />
        </div>
      </section>
      {/* end Popular Products */}
    </>
  );
}

export default Home;
