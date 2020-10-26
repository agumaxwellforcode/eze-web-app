import React from 'react';

import '../css/filter.css';

export default function Filter() {
	return (
		<div className='filter-category'>
			<div className ="title">
				<h2>category</h2>
			</div>
			<div id="myBtn">
				<button className="btn-text active" onClick="filterSelection('all')"> All</button>
				<button className="btn-text" onClick="filterSelection('cars')"> Iphone</button>
				<button className="btn-text" onClick="filterSelection('Samsung')"> Samsung</button>
				<button className="btn-text" onClick="filterSelection('Ipad')"> Ipad</button>
				<button className="btn-text" onClick="filterSelection(' MacBook')"> MacBook</button>
				<button className="btn-text" onClick="filterSelection(' Airpods')"> Airpods</button>
			</div>
		</div>
	);
}