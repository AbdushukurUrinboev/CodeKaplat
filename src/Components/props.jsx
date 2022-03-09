import React, { useEffect } from "react";
import Aos from "aos";
import './props.css'

function SimpleCard(props) {
  useEffect(() => {
    Aos.init({duration:2000})
  }, []);
  return (
      <>
      <div className="basicWrapper">
          <div className="wrapperForPopularCourses"  data-aos="fade-up">
              <div data-aos-duration="3000" className="wrapperForImages">
                  <img className="popularCoursesImages" src={props.image} alt="There is a image!" />
                  <p className="popularCourseSmalBoldText">{props.title}</p>
                  <p className="popularCourseSmalText">{props.substitle}</p>
                  <hr className="widthForHr" />
                  <div className="rectangleFull">
                    {props.bottomIcon } <span className="beginnerPopularCourse">{props.bottomLevel}</span>
                    <span className="popularCourse45AndMonth">
                      <span className="poularCourse45">{props.bottomPrice}</span> <span className="popularCourseMonth">{props.bottomDate}</span>
                    </span>
                  </div>
              </div>
              </div>
        </div>
      </>
  )
}

export default SimpleCard;