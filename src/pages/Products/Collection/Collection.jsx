import React, { useState } from "react";
import Card from "../../../components/card/Card";

import "./Collection.css";

function Collection(props) {
  const [grid, setGrid] = useState(1);

  const gridWidth = {
    1: "25%",
    2: "33.333%",
    3: "50%",
    4: "100%",
  };

  

  return (
    <>
      <div className="collection-filters bg-white d-flex align-items-center justify-content-between">
        <div className="collection-sort d-flex">
          <h2>
            <label for="SortBy">Sort by:</label>
          </h2>
          <select name="sort_by" className="select" id="SortBy">
            <option value="Featured">Featured</option>
            <option value="best-selling">Best selling</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="title-descending" selected="selected">
              Alphabetically, Z-A
            </option>
            <option value="price-ascending">Price, low to high</option>
            <option value="price-descending">Price, high to low</option>
            <option value="created-ascending">Date, old to new</option>
            <option value="created-descending">Date, new to old</option>
          </select>
        </div>

        <div className="collection-grid d-flex align-items-center gap-3">
          <div className="product-count">{props.products.length} products</div>
          <div className="grid-btn-group d-flex align-items-center">
            <div className={`grid-btn ${grid == 1 && "active"}`} onClick={() => setGrid(1)}>
              <svg className="icon icon-col-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 12.5">
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g id="shop_page" data-name="shop page">
                      <g id="_4_col" data-name="4_col">
                        <path id="Rectangle" d="M.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 01.75 0z"></path>
                        <path
                          id="Rectangle-2"
                          d="M4.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 014.75 0z"
                          data-name="Rectangle"
                        ></path>
                        <path
                          id="Rectangle-3"
                          d="M8.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 018.75 0z"
                          data-name="Rectangle"
                        ></path>
                        <path
                          id="Rectangle-4"
                          d="M12.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11a.76.76 0 01.75-.75z"
                          data-name="Rectangle"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className={`grid-btn ${grid == 2 && "active"}`} onClick={() => setGrid(2)}>
              <svg className="icon icon-col-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.5 12.5">
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g id="shop_page" data-name="shop page">
                      <g id="Group-16">
                        <path id="Rectangle" d="M.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 01.75 0z"></path>
                        <path
                          id="Rectangle-2"
                          d="M4.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 014.75 0z"
                          data-name="Rectangle"
                        ></path>
                        <path
                          id="Rectangle-3"
                          d="M8.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 018.75 0z"
                          data-name="Rectangle"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className={`grid-btn ${grid == 3 && "active"}`} onClick={() => setGrid(3)}>
              <svg className="icon icon-col-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.5 12.5">
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g id="shop_page" data-name="shop page">
                      <g id="Group-10">
                        <path id="Rectangle" d="M.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 01.75 0z"></path>
                        <path
                          id="Rectangle-2"
                          d="M4.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 014.75 0z"
                          data-name="Rectangle"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className={`grid-btn ${grid == 4 && "active"}`} onClick={() => setGrid(4)}>
              <svg className="icon icon-list" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.5 9.5">
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g id="shop_page" data-name="shop page">
                      <g id="Group-16">
                        <path id="Rectangle" d="M12.5.75a.76.76 0 01-.75.75h-11A.76.76 0 010 .75.76.76 0 01.75 0h11a.76.76 0 01.75.75z"></path>
                        <path
                          id="Rectangle-2"
                          d="M12.5 4.75a.76.76 0 01-.75.75h-11A.76.76 0 010 4.75.76.76 0 01.75 4h11a.76.76 0 01.75.75z"
                          data-name="Rectangle"
                        ></path>
                        <path
                          id="Rectangle-3"
                          d="M12.5 8.75a.76.76 0 01-.75.75h-11A.76.76 0 010 8.75.76.76 0 01.75 8h11a.76.76 0 01.75.75z"
                          data-name="Rectangle"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="collection-products mt-4">
        <div className="row">
          {props.products.map((card) => (
            <>
              <div className="collection-card mb-2 px-2" style={{ maxWidth: gridWidth[grid] }}>
                <Card data={card} grid={grid} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Collection;
