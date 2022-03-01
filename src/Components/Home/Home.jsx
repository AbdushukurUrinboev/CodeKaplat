import React from "react";
import Header from './header/Header.jsx';
import Obstecles from './obstecles/Obstecles.jsx';
import Apply from './apply/Apply.jsx';
import Footer from './footer/footer.jsx';
import MultipleItems from "./cardCarousel/cardCarousel";
import AboutUs from "./aboutUs/aboutUs";
import OurLatestArticle from "./ourLatestArticle/ourLatestArticle";
import OurTestimonials from "./OurTestimonials/OurTestimonials";
import './Home.css';

function Home() {

    return (
        <div className="home">
            <Header/>
            <MultipleItems />
            <Obstecles/>
            <AboutUs />
            <Apply/>
            <OurLatestArticle />
            <OurTestimonials />
            <Footer/>
        </div>
    )
}

export default Home;
