import React, { Component } from "react";
import Slider from "react-slick";
import SimpleCard from "../../props";
import array from "../../dataBase/info";
import { Container } from "react-bootstrap";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,

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
      <div>
        <Container>
        <wrapperForPopularCourses>
        <h2> Popular Courses </h2>

             <p className="popularCoursesmalTextFirst">
                The most popular courses our students choose to study
              </p>
        <Slider {...settings}>
        {
                    array.map((item) => {
                        return(
                            <div>
                                <SimpleCard 
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                substitle={item.substitle}
                                bottomIcon={item.bottomIcon}
                                bottomLevel={item.bottomLevel}
                                bottomPrice={item.bottomPrice}
                                bottomDate={item.bottomDate}
                            />
                            </div>
                        )
                    })
          }          
        </Slider>
        </wrapperForPopularCourses>
        </Container>
      </div>
    );
  }
}





// import React, { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Slider from "react-slick";
// import './cardCarousel.css';
// // import img1 from '../../../assest/img1.svg';
// // import img2 from '../../../assest/img2.svg';
// // import img3 from '../../../assest/img3.svg';
// // import { BsReception4 } from 'react-icons/bs';
// import data from "../../dataBase/info.js";
// import CardProps from "../../props";

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3,


//     };

//     return (
//         <div className="wrapperForPopularCourses">
//             <Container>
//                 <div>
    
//                   <p className="popularCoursesmalTextFirst">
//                     The most popular courses our students choose to study
//                   </p>
//                       <Slider {...settings}>
//                         {/* <div className="basicWrapper">
//                           <div> */}
//                            <Row>
//                                 {
//                                   data.map((dataJS) => {
//                                     return(
//                                       <div>
//                                       <CardProps 
//                                         key={dataJS.key}
//                                         image={dataJS.image}
//                                         titleName={dataJS.titleName}
//                                         titleSmallText={dataJS.titleSmallText}
//                                         bottomIcon={dataJS.bottomIcon}
//                                         bottomLevel={dataJS.bottomLevel}
//                                         bottomPrice={dataJS.bottomPrice}
//                                         bottomDate={dataJS.bottomDate}
//                                       />
//                                       </div>
//                                     )
//                                   })
//                                 }
//                            </Row>
//                            {/* </div>
//                         </div>    */}
//                       </Slider>
//                 </div>
//             </Container>
//         </div>
//     );
//   }
// }