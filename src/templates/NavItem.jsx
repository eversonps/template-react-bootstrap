import React from "react";

export default props => (
    <a className={`nav-link text-${props.color}`} href={`${props.link}`}>{props.text}</a>
)