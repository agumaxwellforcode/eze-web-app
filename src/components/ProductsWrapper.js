import React, { useState , useEffect } from 'react'

import '../css/products_wrapper.css'

import axios from 'axios'
import StoreItem from './StoreItem'

export default function ProductsWrapper () {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => 
    getProducts(), []);

    async function getProducts() {
        console.log('mounted')
        setLoading(true)
        let res;
        let page = 1; // set default pagination to one
        let limit = 12; // set default number of elements to twelve


        try {
            await axios.get('http://eze-backend-api.herokuapp.com/api/iphones/buy2?page='+page+'&limit='+limit+'') 

            .then(res => {
                setLoading(false)
                setProducts(res.data.data.results) // might be res.data.phones or whatever, depending on the structure of the data returned from the api.
              })
           
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    function paginateNext(){

    }

    return (
        <div className='row m-0 justify-content-end '>
            {products.map((product, index) => {
                return (
                    <div key={index} className='col-xl-2 col-lg-3 col-md-3 pt-0 mb-5'>
                        <StoreItem 
                            name={product.name}
                            condition={product.condition}
                            storage={product.storage}
                            price={product.price}
                            status={product.status}
                            img={product.image}
                        /> 
                        {/* add the necessary props */}
                    </div>
                )
            })}
            <nav aria-label="Page navigation example  ">
                <ul className="pagination bg-dark border-dark mr-lg-3 ">
                    <li className="page-item " >
                    <a className="page-link bg-dark border-dark text-white small" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                    </li>
                  
                    <li className="page-item" onClick={paginateNext}>
                    <a className="page-link bg-dark border-dark text-white small" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                    </li>
                </ul>
                </nav>
        </div>
    )
}