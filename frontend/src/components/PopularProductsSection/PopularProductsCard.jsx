import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

import "./PopularProductsCard.css";
import Card from "../card/Card";

function PopularProductsCard(props) {
  const data = props.products.reduce((acc, product) => {
    const { id, categorie, mainImage, brand, title, rating, price, sale } = product;

    const productData = {
      id,
      mainImage: mainImage,
      brand,
      title,
      rating: rating || 0,
      price: `$${price.toFixed(2)}`,
      sale: sale || 0,
    };

    acc[categorie] = acc[categorie] || {
      img: mainImage,
      productsData: [],
    };

    acc[categorie].productsData.push(productData);

    return acc;
  }, {});

  const [selectedCategory, setSelectedCategory] = useState();
  const popularProductsRef = useRef();

  useEffect(() => {
    const categories = Object.keys(data);

    if (categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, []);

  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3>Our Popular Products</h3>
        <div>
          <MdArrowBackIosNew onClick={() => popularProductsRef.current.slidePrev()} className="swiper-arrow me-2" size={23} />
          <MdArrowForwardIos onClick={() => popularProductsRef.current.slideNext()} className="swiper-arrow" size={23} />
        </div>
      </div>
      <div className="popular-cards-sm mb-3">
        <Swiper spaceBetween={10} slidesPerView={"auto"} className="popular-cards-swiper">
          {Object.keys(data)
            .slice(0, 6)
            .map((categoryKey, index) => {
              const category = data[categoryKey];
              return (
                <SwiperSlide className="p-1 swiper-auto me-4" key={index}>
                  <div
                    {...(selectedCategory ? selectedCategory : setSelectedCategory(Object.keys(data)[0]))}
                    className={`d-flex align-items-center gap-1 popular-card-sm ${categoryKey == selectedCategory && "ms-active"} `}
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
            {Object.keys(data)
              .slice(0, 6)
              .map((categoryKey, index) => {
                const category = data[categoryKey];
                return (
                  <div
                    key={index}
                    className={`d-flex align-items-center gap-3 popular-card-lg ${categoryKey == selectedCategory && "lg-active"} `}
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
              popularProductsRef.current = swiper;
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
            {data[selectedCategory]?.productsData.map((card) => {
              return (
                <SwiperSlide className="p-1" key={card.id}>
                  <Card id={card.id} data={card} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default PopularProductsCard;
