import React from 'react'

import '../css/store_item.css'

export default function StoreItem(props) {

    // fetch phone images from local folder to minimize load time 
    // Also convert phone names to lower case and replace spaces with underscores to correspond with image names using phone names 
    const img = '/phones/'+ (props.name.toLowerCase()).replace(/ /g,"_")+'.png' 


    return (
            <div className="card product-card" >
                <div className="card-body  p-2">
                <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >{props.condition}</span>
                    <img src={img} className="img-fluid product-image justify" alt=""/>
                    <p className=" text-lg-left phone-name mb-0">{props.name}</p>
                    <p className="text-lg-left phone-status-storage mb-1">{props.status} | {props.storage}</p>
                    <p className=" text-lg-left unit-price-label mb-0">Unit price</p>
                    <p className=" text-lg-left price mb-0">${props.price}</p>
                    <p className="small text-lg-left availability-label">1500 Available</p>
                    <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                </div>
            </div>
     
    )
}