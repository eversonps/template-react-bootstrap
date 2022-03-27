import React from "react";
import "./card.css"

export default props => {
    return (
        <>
            <div className="height-card bg-black card-item">
                <p className="position-absolute text-white p-3 h1">{props.number}</p>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <h2 className="text-white text-center">{props.title}</h2>
                </div>
            </div>
            <div className="py-5">
                <p>{props.description}</p>
            </div>
        </>       
    )
}