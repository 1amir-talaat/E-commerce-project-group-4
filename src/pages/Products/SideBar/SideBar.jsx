import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import "./SideBar.css";

function SideBar(props) {
  const [rate, setRate] = useState(0);
  const [stock, setStoke] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minMax, setMinMax] = useState({ min: 0, max: 0 });
  const [selectedCategoties, setSelectedCategoties] = useState([]);
  const [submitedMinMax, setSubmitedMinMax] = useState({ min: 0, max: 0 });

  function handleCategoties(e) {
    if (e.target.checked) {
      setSelectedCategoties([...selectedCategoties, e.target.value]);
    } else {
      setSelectedCategoties(selectedCategoties.filter((item) => item !== e.target.value));
    }
  }

  function handleBrands(e) {
    if (e.target.checked) {
      setSelectedBrands([...selectedBrands, e.target.value]);
    } else {
      setSelectedBrands(selectedBrands.filter((item) => item !== e.target.value));
    }
  }

  useEffect(() => {
    props.setFilters({
      stock,
      rate,
      price: submitedMinMax,
      categories: selectedCategoties,
      brand: selectedBrands,
    });
  }, [stock, rate, submitedMinMax, selectedCategoties, selectedBrands]);

  return (
    <>
      <div className="filter-box">
        <h3 className="filter-box-title">Filter By Categories</h3>
        <div className="filter-box-body d-flex flex-column">
          {props.data.categories.map((categorie, index) => {
            return (
              <div key={index} className="categorie gap-12 d-flex">
                <input value={categorie} id={categorie} type="checkbox" onChange={handleCategoties} />
                <label for={categorie}> {categorie} </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="filter-box">
        <h3 className="filter-box-title">Price</h3>
        <div className="filter-box-body ">
          <div className="price d-flex align-items-center">
            <input type="number" name="min" onChange={(e) => setMinMax({ ...minMax, min: e.target.value })} className="textInput" aria-label="min" />
            <span className="to">To</span>

            <input type="number" name="max" className="textInput" aria-label="max" onChange={(e) => setMinMax({ ...minMax, max: e.target.value })} />
            <button onClick={() => setSubmitedMinMax(minMax)} className={`go ${(minMax.min > 0 || minMax.max > 0) && "go-active"}`} type="button">
              go
            </button>
          </div>
        </div>
        <h3 className="filter-box-title mt-4 mb-2">Availability</h3>
        <div className="filter-box-body ">
          <form>
            <div onClick={() => setStoke(true)} className="d-flex gap-12 align-items-center">
              <input type="radio" name="stock" id="in-stock" />
              <label className="categorie stock" for="in-stock">
                in stock ({props.data.inStock})
              </label>
            </div>
            <div onClick={() => setStoke(false)} className="d-flex gap-12 align-items-center">
              <input type="radio" name="stock" id="out-stock" disabled={props.data.outOfStock <= 0 ? true : false} />
              <label className="categorie stock" for="out-stock">
                out of stock ({props.data.outOfStock})
              </label>
            </div>
          </form>
        </div>
        <h3 className="rate-clear filter-box-title mt-4 mb-3">
          Product Rating
          <span onClick={() => setRate(0)} className=" ms-2 rang-lable clear">
            clear
          </span>
        </h3>
        <div className="filter-box-body">
          <Form.Group className="rate">
            <p className="m-0 rang-lable">
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
                <div key={index} className="categorie gap-12 d-flex">
                  <input onChange={handleBrands} value={brand} id={brand} type="checkbox" />
                  <label for={brand}> {brand} </label>
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
