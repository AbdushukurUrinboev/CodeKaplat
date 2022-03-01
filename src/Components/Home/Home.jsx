import React from "react";
import MultipleItems from "./cardCarousel/cardCarousel";
import AboutUs from "./aboutUs/aboutUs";
import OurLatestArticle from "./ourLatestArticle/ourLatestArticle";
import OurTestimonials from "./OurTestimonials/OurTestimonials";
import './Home.css';

function Home() {

    return (
        <div className="home">
            <MultipleItems />
            <AboutUs />
            <OurLatestArticle />
            <OurTestimonials />
        </div>
    )
}

export default Home;
