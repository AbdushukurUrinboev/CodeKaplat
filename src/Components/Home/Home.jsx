import React from "react";
import MultipleItems from "./cardCarousel/cardCarousel";
import AboutUs from "./aboutUs/aboutUs";
import OurLatestArticle from "./ourLatestArticle/ourLatestArticle";
import './Home.css';

function Home() {

    return (
        <div className="home">
            <MultipleItems />
            <AboutUs />
            <OurLatestArticle />
        </div>
    )
}

export default Home;
