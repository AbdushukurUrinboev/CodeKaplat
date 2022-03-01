import React from "react";
import { Button, Container } from "react-bootstrap";
import './Home.css';

function Home() {

    return (
        <div className="home">
            <div className="popularCoursesWrapper">
                <Container>
                    <h1 className="popularCourseText">Popular Courses</h1>
                    <Button variant="outline-primary popularCourseButton">Show All</Button>{' '}
                    <p className="popularCoourseSmallText">The most popular courses our students choose to study</p>
                </Container>
            </div>
        </div>
    )
}

export default Home;
