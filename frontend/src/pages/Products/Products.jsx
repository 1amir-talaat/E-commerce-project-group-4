import React, { useEffect, useState } from "react";
import products from "../data.json";
import SideBar from "./SideBar/SideBar";

import "./prodects.css";
import Collection from "./Collection/Collection";
import { useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";

function Products(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const comingData = JSON.parse(queryParams.get("data"));

  const defaultFilters = {
    stock: null,
    rate: 0,
    price: {
      min: 0,
      max: 0,
    },
    categories: [],
    brand: [],
    sale: 0,
  };

  console.log(comingData);

  const [filters, setFilters] = useState({
    ...defaultFilters,
    ...comingData,
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newComingData = JSON.parse(queryParams.get("data"));

    setFilters({
      ...defaultFilters,
      ...newComingData,
    });
  }, [location.search]);

  console.log(filters);

  let categories = [];
  let brands = [];
  let inStock = 0;
  let outOfStock = 0;

  products.map((item) => {
    if (!categories.includes(item.categorie)) {
      categories.push(item.categorie);
    }

    if (item.stock >= 1) {
      inStock += 1;
    } else {
      outOfStock += 1;
    }

    if (!brands.includes(item.brand)) {
      brands.push(item.brand);
    }
  });

  let data = {
    categories,
    brands,
    inStock,
    outOfStock,
  };

  console.log(filters);

  const categoriesFilter = products.filter((product) => {
    return filters.categories.length == 0 || filters.categories.includes(product.categorie);
  });

  const brandFilter = products.filter((product) => {
    return filters.brand.length == 0 || filters.brand.includes(product.brand);
  });

  const stockFilter = products.filter((product) => {
    if (filters.stock == null) {
      return true;
    } else if (filters.stock) {
      if (product.stock >= 1) {
        return true;
      }
      return false;
    } else if (!filters.stock) {
      if (product.stock <= 0) {
        return true;
      }
      return false;
    }
  });

  const priceFilter = products.filter((product) => {
    if (filters.price.min == 0 && filters.price.max == 0) {
      return true;
    }

    if (filters.price.min > filters.price.max) {
      return true;
    }

    const price = +product.price.replace("$", "").split(".")[0];

    if (price >= +filters.price.min && price <= +filters.price.max) {
      return true;
    }

    return false;
  });

  const rateFilter = products.filter((product) => {
    if (product.rate == "") {
      product.rate = 0;
    }

    if (product.rate >= filters.rate) {
      return true;
    }

    return false;
  });

  const filteredProducts = categoriesFilter.filter(
    (value) => rateFilter.includes(value) && brandFilter.includes(value) && priceFilter.includes(value) && stockFilter.includes(value)
  );

  return (
    <>
      <div className="home-wrapper-2">
        <div className="container pt-5">
          <div className="d-flex gap-4">
            <div className="side-bar">
              <SideBar data={data} setFilters={setFilters} filters={filters} defaultFilters={defaultFilters} />
            </div>
            <div className="collection">
              <Collection products={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
