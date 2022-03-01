import React from "react";
import MultipleItems from "./cardCarousel/cardCarousel";
import AboutUs from "./aboutUs/aboutUs";
import './Home.css';

function Home() {

    return (
        <div className="home">
            <MultipleItems />
            <AboutUs />
        </div>
    )
}

export default Home;
