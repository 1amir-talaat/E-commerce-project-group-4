import React from "react";
import products from "./data.json";
import SideBar from "./SideBar/SideBar";

import "./prodects.css";
import Collection from "./Collection/Collection";

function Products() {
  console.log(products);
  return (
    <>
      <div className="home-wrapper-2">
        <div className="container">
          <div className="d-flex">
            <div className="side-bar">
              <SideBar />
            </div>
            <div className="collection">
              <Collection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
