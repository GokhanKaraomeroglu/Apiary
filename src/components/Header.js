import React from 'react'
import Image from '../images/apiary.jpg'

export default function Header() {
	return (
		<div>
			<h1>ApiaryBee</h1>
      <h2>The Best Apiary App</h2>
			<img className="img-fluid"  src={Image} alt="Apiary Pic"/>
		</div>
	);
};
