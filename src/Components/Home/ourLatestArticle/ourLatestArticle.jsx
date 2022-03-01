import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import './ourLatestArticle.css';
import img1 from '../../../assest/img1.svg';
import img2 from '../../../assest/img2.svg';
import img3 from '../../../assest/img3.svg';
import { BsReception4 } from 'react-icons/bs';
import glavniImage from '../../../assest/smallGlavniImage.svg'


export default class OurLatestArticle extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
        }
      ]
    };

    return (

        <div className="ourLatestArticleWrapper">
        <Container>
      <div>
        <h2> Our Latest Articles </h2>

        <p className="ourLatestArticleSmallText">Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
        <Slider {...settings}>
          <div className="basicWrraper">
          <div className="wrapperForImages">
            <img className="popularCoursesImages" src={img1} alt="There is a image" />
            <p className="ourLatestArticleDate">JULY 4, 2021</p>
            <p className="popularCourseSmalBoldText">
            Coding challenge
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
            <Row xs={2} md={4} lg={6}>
                <Col>
                <img className="popularCourseSignal" src={glavniImage} alt="" />
                </Col>
                <Col>
                <div className="beginnerPopularCourse">Admin</div>
                </Col>
            </Row>                
            <div className="ourLatestArticle45AndMonth">
                <div className="ourLatestArticleMore">Read More</div>
                </div>
            </div>
          </div>
          </div>
          <div  className="wrapperForImages basicWrraper">
          <img className="popularCoursesImages" src={img2} alt="There is a image" />

          <p className="ourLatestArticleDate">DECEMBER 12, 2016</p>

          <p className="popularCourseSmalBoldText">
          Futuristic coding school
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">

            <Row xs={2} md={4} lg={6}>
                <Col>
                <img className="popularCourseSignal" src={glavniImage} alt="" />
                </Col>
                <Col>
                <div className="beginnerPopularCourse">Admin</div>
                </Col>
            </Row>
                <div className="ourLatestArticle45AndMonth">
                <div className="ourLatestArticleMore">Read More</div>
                </div>
            </div>
          </div>
          <div className="wrapperForImages basicWrraper">
          <img className="popularCoursesImages" src={img3} alt="There is a image" />

          <p className="ourLatestArticleDate">JULY 4, 2021</p>

          <p className="popularCourseSmalBoldText">
          UI Design
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
            <Row xs={2} md={4} lg={6}>
                <Col>
                <img className="popularCourseSignal" src={glavniImage} alt="" />
                </Col>
                <Col>
                <div className="beginnerPopularCourse">Admin</div>
                </Col>
            </Row>               
                <div className="ourLatestArticle45AndMonth">
                <div className="ourLatestArticleMore">Read More</div>
                </div>
            </div>
          </div>


         
          
        </Slider>
      </div>
      </Container>
      </div>
    );
  }
}