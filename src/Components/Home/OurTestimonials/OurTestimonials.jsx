import React, { useEffect } from "react";
import { Container, Carousel } from "react-bootstrap";
import "./OurTestimonials.css";
import ourTestimonialsImage from "../../../assest/testimonialImage.svg";
import starsTestimonial from "../../../assest/Vector.svg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Aos from "aos";

function OurTestimonials() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, []);
  return (
    <>
      <div className="OurTestimonialWrapper"  data-aos="fade-up">
        <Container>
          <div className="basicTextOurTestimonial">Our Testimonials</div>

          <p className="ourTestimonial">
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus.
          </p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 ourTestimonialsImage"
                src={ourTestimonialsImage}
                alt="First slide"
              />

              <div className="ourTestimonialsInsideOfImageText">
                <h2>Mr Jackson</h2>
                <p>He is a frontend developer!</p>
              </div>

              <div className="textForOurTestimonials">
                <p>
                  <span>
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                </p>
                It is a long established fact that a reader will be distracted
                by the <br /> readable content of a page when looking at its
                layout. The point of <br /> using Lorem Ipsum is that it has a
                more-or-less normal distribution of <br /> letters, as opposed
                to using 'Content here, content here', making it <br />
                look like readable English.
                <div className="arrowTestimonials">
                  <BsFillArrowLeftCircleFill /> <BsFillArrowRightCircleFill />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 ourTestimonialsImage"
                src={ourTestimonialsImage}
                alt="Second slide"
              />

              
              <div className="ourTestimonialsInsideOfImageText">
                <h2>Mr Jackson</h2>
                <p>He is a frontend developer!</p>
              </div>

              <div className="textForOurTestimonials">
                <p>
                  <span>
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                </p>
                It is a long established fact that a reader will be distracted
                by the <br /> readable content of a page when looking at its
                layout. The point of <br /> using Lorem Ipsum is that it has a
                more-or-less normal distribution of <br /> letters, as opposed
                to using 'Content here, content here', making it <br />
                look like readable English.
                <div className="arrowTestimonials">
                  <BsFillArrowLeftCircleFill /> <BsFillArrowRightCircleFill />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 ourTestimonialsImage"
                src={ourTestimonialsImage}
                alt="Third slide"
              />

              
              <div className="ourTestimonialsInsideOfImageText">
                <h2>Mr Jackson</h2>
                <p>He is a frontend developer!</p>
              </div>

              <div className="textForOurTestimonials">
                <p>
                  <span>
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                  <span className="starsTestimonials">
                    <img src={starsTestimonial} alt="" />
                  </span>
                </p>
                It is a long established fact that a reader will be distracted
                by the <br /> readable content of a page when looking at its
                layout. The point of <br /> using Lorem Ipsum is that it has a
                more-or-less normal distribution of <br /> letters, as opposed
                to using 'Content here, content here', making it <br />
                look like readable English.
                <div className="arrowTestimonials">
                  <BsFillArrowLeftCircleFill /> <BsFillArrowRightCircleFill />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default OurTestimonials;
