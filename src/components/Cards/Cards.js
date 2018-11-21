import React from "react";
import "./Cards.css"

const Cards = props => (
    <div className="card img-container hover">
        <img alt={props.name} src={props.image} id={props.id}
            onClick={() => props.shuffleCards(props.id)} className='shuffle' />
    </div>
);

export default Cards;