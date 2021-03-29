import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div><img alt={props.last} src={props.image}></img></div>
            <div>{props.title} {props.first} {props.last} </div>
        </div>
    )
}