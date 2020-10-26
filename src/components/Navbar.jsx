import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "../css/Navbar.css";

async function loadIphone() {
  await axios
    .get(`https://***.herokuapp.com:443/api/iphones/data/trigger`)
    .then((res) => {
      console.log(res);
    });
}

export default class Navbar extends Component {
  state = {
    search_value: "",
      min: "",
      max: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchPhones } = this.props.store;
    searchPhones(this.state.search_value, this.state.min, this.state.max);
  };
  handleChange(e) {
    this.setState({ search_value: e.target.value });
  }

  handleMinChange(e) {
    this.setState({ min: e.target.value });
  }
  handleMaxChange(e) {
    this.setState({ max: e.target.value });
  }

  render() {
    const { searchParams } = this.props.store;
    return (
      <div className="header-container row m-0 p-0 mb-lg-5" style={{  
        backgroundImage: 'url(/src/image/screens-Image.png)',
        backgroundPosition: 'right top',
        backgroundSize: '20em 15em',
        backgroundRepeat: 'no-repeat'
      }}>
        <nav className="col-12 p-0 mb-4">
          <div className="row justify-content-center m-0">
            <div className="col-lg-6 col-md-6">
              <div className="row m-0">
                <header className="col-lg-9 mb-3 mt-2">
                  <p className="text-left h2 text-uppercase font-weight-bold intro">
                    Shop our latest <br /> available stock here
                  </p>
                  <p className="text-white">{searchParams}</p>
                </header>
                <div className="col-12 pl-0">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                      <div className="col-sm-8 pr-lg-0">
                        <input
                          type="text"
                          className="form-control small search"
                          name="searchParams"
                          id="search"
                          placeholder="Enter search term (e.g iphone x, 128Gb or A1)"
                          required
                          value={this.state.search_value}
                          onChange={this.handleChange.bind(this)}
                        ></input>
                      </div>
                      <div className="col-sm-4 pl-lg-0 ">
                        <button
                          className="btn btn-outline-white btn-md my-0 ml-sm-2 btnsearch small  float-lg-left "
                          type="submit"
                        >
                          {" "}
                          Search{" "}
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <div className="row m-0 justify-content-lg-end">
                <div
                  className="collapse mt-3 col-sm-12 col-lg-6 col-md-6"
                  id="collapseExample"
                >
                  <div className="card card-body more-options">
                    <form className="mobile-filter mb-3">
                      <h6 className="card-title mb-3">Price Filtter</h6>
                      <div className="form-group mb-1">
                        <input
                          type="text"
                          className="form-control input-sm"
                          name="min"
                          id="minPrice"
                          placeholder="Min"
                          value={this.state.min}
                          onChange={this.handleMinChange.bind(this)}
                        />
                      </div>
                      <p className="h6 text-center">|</p>
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-control  input-sm"
                          name="max"
                          id="maxPrice"
                          placeholder="Max"
                          value={this.state.max}
                          onChange={this.handleMaxChange.bind(this)}
                        />
                      </div>
                    </form>
                    <h6 className="card-title small ">More Options</h6>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      name="loadData"
                      onClick={loadIphone}
                    >
                      Load iPhones
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
