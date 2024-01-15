import React from "react";
import "./BannerCard.css";

function BannerCard({ data }) {
  return (
    <>
      <div className=" product-card position-relative">
        <img src={data.img} className="w-100" alt="" />
      </div>
      <div className={`banner-card-info position-absolute text-${data.text}`}>
        <div class="banner-label">{data.label}</div>
        <div class="banner-subtitle">{data.subTitle}</div>
        <div class="banner-title">{data.title}</div>
      </div>
    </>
  );
}

export default BannerCard;
