import React from "react";

export default props => {
    return (
        <div className="d-flex align-items-center h-100 logo">
            <h1 className={`text-${props.color}`}>Logo</h1>
        </div>
    )
}