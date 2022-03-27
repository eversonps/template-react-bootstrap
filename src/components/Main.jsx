import React from "react";
import CardItem from "../templates/CardItem";
import Row from "../layouts/Row"
import Grid from "../layouts/Grid"

export default props => (
    <main>
        <section className="bg-black">
            <div className="container">
                <Row>
                    <Grid cols="10 10 6 4">
                        <div className="sec1">
                            <h1 className="text-white">Serving you since 1989</h1>
                            <p className="text-white mt-3 h5">Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
                            <button type="button" className="btn btn-outline-light mt-3">Shop Merch</button>
                        </div>
                    </Grid>
                </Row>
            </div>
        </section>
        
        <section className="container">
            <div className="sec2-description-support">
                <Row>
                    <Grid cols="11 6 6 6">
                        <div>
                            <h1 className="h5">Ways to support</h1>
                            <h2 className="h1">Support Acme Outdoors.</h2>
                        </div>
                    </Grid>

                    <Grid cols="11 6 6 6">
                        <div className="mb-5">
                            <p>COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more than ever. Below, we’ve listed the best ways to help us through this season.</p>
                        </div>
                    </Grid>
                </Row>
            </div>   
            
            <Row>
                <Grid cols="11 12 4 4">
                    <CardItem number="01" title="SHOP PRODUCTS" description="Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!"></CardItem>
                </Grid>
                <Grid cols="11 12 4 4">
                    <CardItem number="02" title="DONATE" description="Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat."></CardItem>
                </Grid>
                <Grid cols="11 12 4 4">
                    <CardItem number="03" title="BUY GIFT CARDS" description="Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family."></CardItem>
                </Grid>
            </Row>
        </section>
    </main>
)