import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import './ourLestProps.css'
import Aos from "aos";

function SimpleCard2(props) {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
      <>
      <div className="basicWrapper">
          <div className="wrapperForPopularCourses"  data-aos="fade-up">
              <div className="wrapperForImages">
                  <img className="popularCoursesImages" src={props.image} alt="There is a image!" />
                  <p className="ourLatestArticleDate">{props.date}</p>
                  <p className="popularCourseSmalBoldText popularCourseSmalBoldText">{props.challange}</p>
                  <p className="popularCourseSmalBoldText popularCourseSmalText">{props.title}</p>
                  <p className="popularCourseSmalText">{props.substitle}</p>
                  <hr className="widthForHr" />
                  <div className="rectangleFull">
                    <Row>
                      <Col>
                        <img src={props.bottomIcon} alt="There is a image" />
                        <div className="beginnerPopularCourse2">{props.bottomLevel}</div>
                        </Col>
                        <Col>
                        <div className="popularCourseMonth2">{props.bottomDate}</div>
                        </Col>
                    </Row> 
 
                    {/* <span className="popularCourse45AndMonth">
                    </span> */}
                  </div>
              </div>
              </div>
        </div>
      </>
  )
}

export default SimpleCard2;