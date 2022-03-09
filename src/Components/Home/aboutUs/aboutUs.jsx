import React, { useEffect } from "react";
import { Container, Row, Col, Button, video } from "react-bootstrap";
import './aboutUs.css';
import Aos from "aos";

// image start//
import aboutUsFirst from '../../../assest/aboutusFirstImg.svg';
import videosFirst from '../../../assest/aboutUsVideo.mp4'


function AboutUs () {
    useEffect(() => {
        Aos.init({duration:2000})
      }, [])
    return (
        <>
            <div className="wrapperForAboutUs" data-aos="flip-left">
                <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <img className="aboutUsFirst" src={aboutUsFirst} alt="" />
                    </Col>
                    <Col>
                        <span className="aboutUsAbout">About</span> <span className="aboutUsUs">Us</span>

                        <p className="aboutUsSmallText">
                        Programming will be must to know knowledge in the future! It <br /> doesn’t matter whether 
                        you are in sales, finance or operations, <br /> you will be required to write some instructions 
                        computers can <br /> run—and that once required coding skills and we will prepare <br /> you for that time!
                        </p>

                        <Button className="aboutUsButton" variant="primary" size="lg">Read More</Button>{' '}

                    </Col>

                    <div className="videoTagAboutUs">
                    <video width="574" height="390" border-radius="10" controls >
                            <source className="videooos" src={videosFirst} type="video/mp4"/>
                        </video>
                    </div>
                </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutUs;