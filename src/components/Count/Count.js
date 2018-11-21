import React from "react";
import "./Count.css"

const Count = props  => (
    <div className="gameCount">
        <h2 className="count">Correct Guesses: {props.total}</h2>
        <h2 className="gameStatus">{props.status}</h2>
    </div>
);

export default Count;