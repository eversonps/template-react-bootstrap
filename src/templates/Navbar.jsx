import React from "react";
import NavItem from "./NavItem";

export default props => {
    return (
        <nav className="navbar navbar-light align-items-center justify-content-center">
            {props.children}
        </nav>
    )
}