import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

import "./SideBar.css";

function SideBar(props) {
  const filters = props.filters;

  const [rate, setRate] = useState(filters.rate);
  const [stock, setStock] = useState(filters.stock);
  const [selectedBrands, setSelectedBrands] = useState(filters.brand);
  const [minMax, setMinMax] = useState(filters.price);
  const [selectedCategories, setSelectedCategories] = useState(filters.categories);
  const [submitedMinMax, setSubmitedMinMax] = useState(filters.price);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      setRate(filters.rate);
      setStock(filters.stock);
      setSelectedBrands(filters.brand);
      setMinMax(filters.price);
      setSelectedCategories(filters.categories);
      setSubmitedMinMax(filters.price);
    } else {
      isFirstRender.current = false;
    }
  }, [filters]);

  function handleCategories(e) {
    const category = e.target.value;
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((item) => item !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  }

  function handleBrands(e) {
    const brand = e.target.value;
    setSelectedBrands((prevBrands) => {
      if (prevBrands.includes(brand)) {
        return prevBrands.filter((item) => item !== brand);
      } else {
        return [...prevBrands, brand];
      }
    });
  }

  useEffect(() => {
    props.setFilters({
      stock,
      rate,
      price: submitedMinMax,
      categories: selectedCategories,
      brand: selectedBrands,
    });
  }, [stock, rate, submitedMinMax, selectedCategories, selectedBrands]);

  return (
    <>
      <div className="filter-box">
        <h3 className="filter-box-title">Filter By Categories</h3>
        <div className="filter-box-body d-flex flex-column">
          {props.data.categories.map((category, index) => {
            return (
              <div key={index} className="category gap-12 d-flex">
                <input value={category} id={category} type="checkbox" checked={selectedCategories.includes(category)} onChange={handleCategories} />
                <label htmlFor={category}> {category} </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="filter-box">
        <h3 className="filter-box-title">Price</h3>
        <div className="filter-box-body ">
          <div className="price d-flex align-items-center">
            <input
              type="number"
              name="min"
              onChange={(e) => setMinMax({ ...minMax, min: e.target.value })}
              className="textInput"
              aria-label="min"
              value={minMax.min}
            />
            <span className="to">To</span>
            <input
              type="number"
              name="max"
              className="textInput"
              aria-label="max"
              onChange={(e) => setMinMax({ ...minMax, max: e.target.value })}
              value={minMax.max}
            />
            <button
              onClick={() => {
                setSubmitedMinMax(minMax);
              }}
              className={`go ${(minMax.min > 0 || minMax.max > 0) && "go-active"}`}
              type="button"
            >
              go
            </button>
          </div>
        </div>
        <h3 className="filter-box-title mt-4 mb-2">Availability</h3>
        <div className="filter-box-body ">
          <form>
            <div onClick={() => setStock(true)} className="d-flex gap-12 align-items-center">
              <input type="radio" name="stock" id="in-stock" onChange={() => setStock(true)} />
              <label className="category stock" htmlFor="in-stock">
                in stock ({props.data.inStock})
              </label>
            </div>
            <div onClick={() => setStock(false)} className="d-flex gap-12 align-items-center">
              <input type="radio" name="stock" id="out-stock" disabled={props.data.outOfStock <= 0 ? true : false} onChange={() => setStock(false)} />
              <label className="category stock" htmlFor="out-stock">
                out of stock ({props.data.outOfStock})
              </label>
            </div>
          </form>
        </div>
        <h3 className="rate-clear filter-box-title mt-4 mb-3">
          Product Rating
          <span onClick={() => setRate(0)} className=" ms-2 range-label clear">
            clear
          </span>
        </h3>
        <div className="filter-box-body">
          <Form.Group className="rate">
            <p className="m-0 range-label">
              {rate} {rate < 5 ? "Stars or more" : "Star Only"}
            </p>
            <Form.Control
              value={rate}
              type="range"
              min={0}
              max={5}
              step={1}
              onChange={(e) => setRate(e.target.value)}
              name="rate"
              className="p-0 form-range border-0 shadow-none"
            />
          </Form.Group>
        </div>
      </div>
      <div className="filter-box">
        <h3 className="filter-box-title">Brand</h3>
        <div className="filter-box-body ">
          <div className="filter-box-body d-flex flex-column">
            {props.data.brands.map((brand, index) => {
              return (
                <div key={index} className="category gap-12 d-flex">
                  <input onChange={handleBrands} value={brand} id={brand} type="checkbox" checked={selectedBrands.includes(brand)} />
                  <label htmlFor={brand}> {brand} </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
