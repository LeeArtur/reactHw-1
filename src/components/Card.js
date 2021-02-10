import React from 'react';
import "./Card.css"

const Card = (props) => {
	return (
		<div className="movie">
			<img src={props.poster} alt=""/>
			<a href=""><h1>{props.name}</h1></a>
			<p>{props.date}</p>
		</div>
	);
};
export default Card;