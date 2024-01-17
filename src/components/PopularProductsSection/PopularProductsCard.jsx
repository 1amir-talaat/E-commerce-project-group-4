// import "./styleCard.css";
import React, { useState, useRef } from "react";
import data from "./data";
import "./PopularProductsCard.css";
import Card from "../card/Card";
import { Swiper, SwiperSlide } from "swiper/react";

function PopularProductsCard() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(data)[0]);
  const propularProductsRef = useRef();

  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };
  return (
    <>
      <div className="popular-cards-sm mb-3">
        <Swiper spaceBetween={10} slidesPerView={"auto"} className="popular-cards-swiper">
          {Object.keys(data).map((categoryKey, index) => {
            const category = data[categoryKey];
            return (
              <SwiperSlide key={index} className="p-1 swiper-auto me-4">
                <div
                  className={`d-flex align-items-center gap-1 popular-card-sm ${categoryKey == selectedCategory && "ms-active"} `}
                  key={index}
                  onClick={() => handleCategoryChange(categoryKey)}
                >
                  <img src={category.img} className="popular-img" />
                  <p className="m-0">{categoryKey}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="popular">
        <div className="popular-cards">
          <div className="popular-cards-lg bg-white" id="firstCard">
            {Object.keys(data).map((categoryKey, index) => {
              const category = data[categoryKey];
              return (
                <div
                  className={`d-flex align-items-center gap-3 popular-card-lg ${categoryKey == selectedCategory && "lg-active"} `}
                  key={index}
                  onClick={() => handleCategoryChange(categoryKey)}
                >
                  <img src={category.img} className="popular-img" />
                  <p className="">{categoryKey}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="popular-swiper">
          <Swiper
            slidesPerView={2}
            onSwiper={(swiper) => {
              propularProductsRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              339: {
                slidesPerView: 2,
              },
              611: {
                slidesPerView: 3,
              },

              1270: {
                slidesPerView: 4,
              },
              1370: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {data[selectedCategory].productsData.map((card, index) => {
              return (
                <>
                  <SwiperSlide key={index} className="p-1">
                    <Card data={card} />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default PopularProductsCard;
