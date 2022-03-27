import React from "react";
import Logo from "../templates/Logo";
import Navbar from "../templates/Navbar";
import Row from "../layouts/Row";
import Grid from "../layouts/Grid";
import NavItem from "../templates/NavItem"

export default props => {
    return (
        <header className="bg-danger bg-gradient">
            <div className="container">
                <Row>
                    <Grid cols="12 6 6 6">
                        <Logo color="white"></Logo>
                    </Grid>

                    <Grid cols="12 6 6 6">
                        <Navbar>
                            <NavItem color="light" text="Home" link="#"></NavItem>
                            <NavItem color="light" text="About" link="#"></NavItem>
                            <NavItem color="light" text="Shop" link="#"></NavItem>
                            <NavItem color="light" text="Donate" link="#"></NavItem>
                            <NavItem color="light" text="Contact" link="#"></NavItem>
                        </Navbar>
                    </Grid>  
                </Row>  
            </div>
        </header>
    )
}