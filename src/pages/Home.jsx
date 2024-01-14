import React, { useRef } from "react";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import Card from "../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";

function Home() {
  const swiperRef = useRef();

  return (
    <>
      {/* Start Landing Page*/}
      <section className="landing-page py-5">
        <div className="container">
          <div className="row w-100">
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
                <a className="button">buy now</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-mainland position-relative">
                  <img src="src/assets/images/catbanner-01.jpg" alt="" />
                  <div className="small-mainland-text position-absolute">
                    <h4>best sale</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      from $1699.00 or
                      <br />
                      $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-mainland position-relative">
                  <img src="src/assets/images/catbanner-02.jpg " alt="" />
                  <div className="small-mainland-text position-absolute">
                    <h4>new arival</h4>
                    <h5>By Ipad Air</h5>
                    <p>from $599 or $49.91/mo.</p>
                  </div>
                </div>
                <div className="small-mainland position-relative ">
                  <img src="src/assets/images/catbanner-03.jpg" alt="" />
                  <div className="small-mainland-text position-absolute">
                    <h4>15% off</h4>
                    <h5>Smartwatch 7</h5>
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
                    <h5>AirPods Max</h5>
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
              <MdArrowBackIosNew onClick={() => swiperRef.current.slidePrev()} className="swiper-arrow me-2" size={23} />
              <MdArrowForwardIos onClick={() => swiperRef.current.slideNext()} className="swiper-arrow" size={23} />
            </div>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={6}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
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
            {[...Array(15)].map(() => {
              return (
                <SwiperSlide className="swiper-card">
                  <div>
                    <Card
                      data={{
                        brand: "Havells",
                        title: "Kids headphones bulk 10 pack multi colored for students",
                        rate: "2.4",
                        price: 200,
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* end Featured Collection */}
    </>
  );
}

export default Home;
