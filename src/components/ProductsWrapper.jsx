import React, { useEffect } from "react";
import { observer } from "mobx-react";

import StoreItem from "./StoreItem";

import "../css/products_wrapper.css";

function ProductsWrapper(props) {
  const { retrievePhones, startcall, dataRetrieved } = props.store;
  useEffect(() => {
    if (!dataRetrieved) {
      console.log(dataRetrieved);
      startcall(
        "https://eze-api-2.herokuapp.com/api/iphones/buy?page=1&limit=30"
      );
    }
  });
  if (retrievePhones.length !== 0) {
    return (
      <div className="row m-0 justify-content-start ">
        {retrievePhones.map((product, index) => {
          return (
            <div key={index} className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
              <StoreItem
                name={product.name}
                condition={product.condition}
                storage={product.storage}
                price={product.price}
                status={product.status}
                img={product.image}
              />
            </div>
          );
        })}

        {/* <div className='row m-0 justify-content-start '>
                <nav aria-label="Page navigation example  ">
                    <ul className="pagination bg-dark border-dark mr-lg-3 ">
                        <li className="page-item " >
                        <a className="page-link bg-dark border-dark text-white small" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                        </li>
                    
                        <li className="page-item" >
                        <a className="page-link bg-dark border-dark text-white small" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div> */}
      </div>
    );
  } else {
    return (
      <div className="alert  bg-dark col-12">
        <strong>Oops!</strong> No product matches your search
      </div>
    );
  }
}
export default observer(ProductsWrapper);
