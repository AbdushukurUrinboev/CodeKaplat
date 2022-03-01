import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import './cardCarousel.css';
import img1 from '../../../assest/img1.svg';
import img2 from '../../../assest/img2.svg';
import img3 from '../../../assest/img3.svg';
import { BsReception4 } from 'react-icons/bs';


export default class MultipleItems extends Component {
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
      <div className="wrapperForPopularCourses">
      <Container>
      <div>
        <h2> Popular Courses </h2>

        <p className="popularCoursesmalTextFirst">The most popular courses our students choose to study</p>
        <Slider {...settings}>
          <div className="basicWrapper">
          <div className="wrapperForImages">
            <img className="popularCoursesImages" src={img1} alt="There is a image" />
            <p className="popularCourseSmalBoldText">
            Brand & Identity Design for <br /> Marketers
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
                <BsReception4  className="popularCourseSignal"/> <span className="beginnerPopularCourse">Beginner</span>
                <span className="popularCourse45AndMonth">
                    <span className="poularCourse45">$45</span><span className="popularCourseMonth">/ month</span>
                </span>
            </div>
          </div>
          </div>
          
          <div  className="wrapperForImages basicWrapper">
          <img className="popularCoursesImages" src={img2} alt="There is a image" />

          <p className="popularCourseSmalBoldText">
            Advanced Funnels with <br /> Google Analytics
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
                <BsReception4  className="popularCourseSignal"/> <span className="beginnerPopularCourse">Advanced</span>
                <span className="popularCourse45AndMonth">
                    <span className="poularCourse45">$45</span><span className="popularCourseMonth">/ month</span>
                </span>
            </div>
          </div>
          <div className="wrapperForImages basicWrapper">
          <img className="popularCoursesImages" src={img3} alt="There is a image" />
          <p className="popularCourseSmalBoldText">
          Landing Page A/B Testing & <br /> Conversion Optimization
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
                <BsReception4  className="popularCourseSignal"/> <span className="beginnerPopularCourse">Intermediate</span>
                <span className="popularCourse45AndMonth">
                    <span className="poularCourse45">$45</span><span className="popularCourseMonth">/ month</span>
                </span>
            </div>
          </div>


          <div className="wrapperForImages basicWrapper">
            <img className="popularCoursesImages" src={img1} alt="There is a image" />
            <p className="popularCourseSmalBoldText">
            Brand & Identity Design for <br /> Marketers
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
                <BsReception4  className="popularCourseSignal"/> <span className="beginnerPopularCourse">Beginner</span>
                <span className="popularCourse45AndMonth">
                    <span className="poularCourse45">$45</span><span className="popularCourseMonth">/ month</span>
                </span>
            </div>
          </div>
          <div className="wrapperForImages basicWrapper">
          <img className="popularCoursesImages" src={img2} alt="There is a image" />

          <p className="popularCourseSmalBoldText">
            Advanced Funnels with <br /> Google Analytics
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
                <BsReception4  className="popularCourseSignal"/> <span className="beginnerPopularCourse">Advanced</span>
                <span className="popularCourse45AndMonth">
                    <span className="poularCourse45">$45</span><span className="popularCourseMonth">/ month</span>
                </span>
            </div>
          </div>
          <div className="wrapperForImages basicWrapper">
          <img className="popularCoursesImages" src={img3} alt="There is a image" />
          <p className="popularCourseSmalBoldText">
          Landing Page A/B Testing & <br /> Conversion Optimization
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
                <BsReception4  className="popularCourseSignal"/> <span className="beginnerPopularCourse">Intermediate</span>
                <span className="popularCourse45AndMonth">
                    <span className="poularCourse45">$45</span><span className="popularCourseMonth">/ month</span>
                </span>
            </div>
          </div>

          <div className="wrapperForImages basicWrapper">
            <img className="popularCoursesImages" src={img1} alt="There is a image" />
            <p className="popularCourseSmalBoldText">
            Brand & Identity Design for <br /> Marketers
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
                <BsReception4  className="popularCourseSignal"/> <span className="beginnerPopularCourse">Beginner</span>
                <span className="popularCourse45AndMonth">
                    <span className="poularCourse45">$45</span><span className="popularCourseMonth">/ month</span>
                </span>
            </div>
          </div>
          <div className="wrapperForImages basicWrapper">
          <img className="popularCoursesImages" src={img2} alt="There is a image" />

          <p className="popularCourseSmalBoldText">
            Advanced Funnels with <br /> Google Analytics
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
                <BsReception4  className="popularCourseSignal"/> <span className="beginnerPopularCourse">Advanced</span>
                <span className="popularCourse45AndMonth">
                    <span className="poularCourse45">$45</span><span className="popularCourseMonth">/ month</span>
                </span>
            </div>
          </div>
          <div className="wrapperForImages basicWrapper">
          <img className="popularCoursesImages" src={img3} alt="There is a image" />
          <p className="popularCourseSmalBoldText">
          Landing Page A/B Testing & <br /> Conversion Optimization
            </p>
            <p className="popularCourseSmalText">
            Lorem ipsum dolor sit amet, consectere <br /> adipiscing elit. Feugiat feugiat congue viverra <br /> facilisis.
            </p>
            <hr className="widthForHr" />
            <div className="rectangleFull">
                <BsReception4  className="popularCourseSignal"/> <span className="beginnerPopularCourse">Intermediate</span>
                <span className="popularCourse45AndMonth">
                    <span className="poularCourse45">$45</span><span className="popularCourseMonth">/ month</span>
                </span>
            </div>
          </div>

          
        </Slider>
      </div>
      </Container>
      </div>
    );
  }
}