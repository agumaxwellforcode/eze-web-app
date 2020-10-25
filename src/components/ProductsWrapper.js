import React, { useState , useEffect } from 'react'

import '../css/products_wrapper.css'

import axios from 'axios'
import StoreItem from './StoreItem'
import Navbar from './Navbar'

export default function ProductsWrapper () {

    const [products, setProducts] = useState([])

    // const [loading, setLoading] = useState(false)
    useEffect(() => 
    getProducts(), []);

    async function getProducts() {
        console.log('mounted')
      
        // setLoading(true)
       
        let page = 1;                                                       // set default pagination to one
        let limit = 12;                                                     // set default number of elements to twelve
        
        let priceParameters = {max:'900', min:'100'}                        //declare payload of price query parameters
        let queryParameters = "iphone xs,a1,64gb"

        let query = []                                                      //declare payload of query parameters
        let priceQuery = []                                                 //declare payload of query parameters

        let cleanParams =''                                                 // formated parameters ready to be passed to the query
        let cleanPriceParams =''                                             // formated price range ready to be passed to the query
        if (queryParameters !== "") {                                       // check if there are query parameters
            queryParameters = queryParameters.split(',');                   // Break query parameters into elements
            var i;
            for (i = 0; i < queryParameters.length; i++) {                  // loop through elements to determine the key for each parameter

                // Determine and map query strings to matching parameters if they match expectations
                // Convert all strings to lower case to narrow the mapping

                if ((queryParameters[i].toLowerCase()).includes('phone')) {
                    query.push('&name='+queryParameters[i])
                } else if((queryParameters[i].toLowerCase()).includes('a1') || 
                    (queryParameters[i].toLowerCase()).includes('a2') || 
                    (queryParameters[i].toLowerCase()).includes('b1') || 
                    (queryParameters[i].toLowerCase()).includes('b2') || 
                    (queryParameters[i].toLowerCase()).includes('c') || 
                    (queryParameters[i].toLowerCase()).includes('c/b') || 
                    (queryParameters[i].toLowerCase()).includes('c/d')) {

                    query.push('&condition='+queryParameters[i])
                }
                    else if((queryParameters[i].toLowerCase()).includes('64gb') || 
                    (queryParameters[i].toLowerCase()).includes('256gb') || 
                    (queryParameters[i].toLowerCase()).includes('512gb')) {

                    query.push('&storage='+queryParameters[i])
                }
            }
             cleanParams = query.toString().replace("[", "").replace(",", "").replace(",", "").replace("]", "") // format list (remove brackets and comas)
            console.log(cleanParams)
        } else {
            query = "" // empty query if parameters are not available
        }

        //check for price parameters

        if (priceParameters !=="") { // check if there are price query parameters
           
                if ((priceParameters.max !=="") && (priceParameters.min !=="") ) { 
                    
                    // if both parameters are present then add them to the query string
                    priceQuery.push('&max='+ priceParameters.max)
                    priceQuery.push('&min='+ priceParameters.min)

                     // if either parameters is empty then assign a default to them

                } else if((priceParameters.max ==="") && (priceParameters.min !=="")) {
                    priceQuery.push('&max=1000000') // Assigned $1000000 as none of the products is up to a $1000000, preferably, the highest price in the table can be returned and used instead but i am short of time
                    priceQuery.push('&min='+ priceParameters.min)
                }else if((priceParameters.max ==!"") && (priceParameters.min ==="")) {
                    priceQuery.push('&max='+ priceParameters.max)
                    priceQuery.push('&max=1') // Assigned $1 as none of the products is less than $1, preferably, the lowest price in the table can be returned and used instead
                }else { 
                    // If both are null/empty
                    priceQuery = ""
                    
                }
                cleanPriceParams = priceQuery.toString().replace("[", "").replace(",", "").replace(",", "").replace("]", "") // format list (remove brackets and comas)
                console.log(cleanPriceParams)
         
        } else {
            priceQuery = "" // empty query if parameters are not available
        }
        console.log('http://eze-backend-api.herokuapp.com/api/iphones/buy2?page='+page+'&limit='+limit+''+cleanParams+''+cleanPriceParams)

        try {
            await axios.get('http://eze-backend-api.herokuapp.com/api/iphones/buy2?page='+page+'&limit='+limit+''+cleanParams+''+cleanPriceParams)  //String list = Arrays.toString(customers.toArray()).replace("[", "").replace("]", "");

            .then(res => {
                console.log(res)
                if (res.data.data.results === "") {
                    
                } else {
                    // setLoading(false)
                    setProducts(res.data.data.results) // might be res.data.phones or whatever, depending on the structure of the data returned from the api.
                }
               
              })
           
        } catch (error) {
            // setLoading(false)
            console.log(error)
        }
    }
if (products.length !== 0) {
    return (
        <div className='row m-0 justify-content-start '>
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
    )
} else {
    return (
        <div className="alert  bg-dark col-12">    
            <strong>Oops!</strong> No product matches your search
        </div>
        
    )
}

    
}