import React from 'react'

import '../css/filter.css'

export default function Filter() {
    return (
        <div classNameName='filter-category'>
           <div className ="title">
               <h2>category</h2>
           </div>
           <div id="myBtn">
                <button className="btn-text active" onclick="filterSelection('all')"> All</button>
                <button className="btn-text" onclick="filterSelection('cars')"> Iphone</button>
                <button className="btn-text" onclick="filterSelection('Samsung')"> Samsung</button>
                <button className="btn-text" onclick="filterSelection('Ipad')"> Ipad</button>
                <button className="btn-text" onclick="filterSelection(' MacBook')"> MacBook</button>
                <button className="btn-text" onclick="filterSelection(' Airpods')"> Airpods</button>
           </div>
        </div>
    )
}