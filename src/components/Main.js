import React from "react";

import Filter from "./Filter";
import ProductsWrapper from "./ProductsWrapper";

import "../css/main.css";

export default function Main(props) {
  const store = props.store;
  return (
    <div className="row m-0 main-pane" id="main-pane">
      <div className="col-lg-2 col-md-3 side-bar" id="side-bar">
        <div className="card bg-transparent border-0 text-left">
          <div className="card-body pl-0">
            <h6 className="card-title">Categories</h6>
            <ul className="list-group list-group-flush bg-transparent mb-4">
              <li className="list-group-item">All</li>
              <li className="list-group-item">Iphone</li>
              <li className="list-group-item">Samsung</li>
              <li className="list-group-item">Ipad</li>
              <li className="list-group-item">MacBook</li>
              <li className="list-group-item">Airpods</li>
            </ul>
            <h6 className="card-title mb-5">Price Filtter</h6>
            <form>
              <div className="form-group mb-1">
                <input
                  type="text"
                  className="form-control input-sm"
                  id="min"
                  placeholder="Min"
                />
              </div>
              <p className="h6 text-center">|</p>
              <div className="form-group mt-2">
                <input
                  type="text"
                  className="form-control  input-sm"
                  id="max"
                  placeholder="Max"
                />
              </div>
            </form>
            <h6 className="card-title mt-5">Storage</h6>
            <ul className="list-group list-group-flush bg-transparent mb-4">
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label mt-1">32GB</label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label mt-1">64GB</label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck3"
                  />
                  <label className="form-check-label mt-1">128GB</label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck4"
                  />
                  <label className="form-check-label mt-1">256GB</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-10 col-md-9 main-panel" id="main-panel">
        <ProductsWrapper store={store}></ProductsWrapper>

        <a
          className="mobile-filter-button shadow"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i className="fa fa-ellipsis-v mobile-filter-button-icon"></i>
        </a>
      </div>
    </div>
  );
}
