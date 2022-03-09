import React, { useEffect } from "react";
import '../obstecles/Obstecles.css';
import Emoji1 from '../../../assest/em-271.svg';
import Emoji2 from '../../../assest/em-81.svg';
import { Col, Row } from "react-bootstrap";
import Aos from "aos";


function Obstecles() {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

    return (
      <div className="container">
        <div className="obstecles">
          <p className="obsteclesCenterText">You should not let obstecles stop to change your <br /> future!</p>

          <div className="row obsteclesRow">

            <Row  data-aos="fade-up">
              <Col data-aos-duration="3000" sm={6}>
                <p className="obsteclesText"><img className="obsteclesEmoji" src={Emoji1} alt="There is a image!" /> 
                But I don't have It background or <br /> <span className="obsteclesTextIntoText">computer skill</span> </p>
              </Col>
              <Col data-aos-duration="3000" sm={6}>
                <p className="obsteclesText" > <img className="obsteclesEmoji" src={Emoji1} alt="There is a image!" /> 
                But I don't have that much money to pay <br /> <span className="obsteclesTextIntoText">at the beginning</span></p>
              </Col>
              <Col data-aos-duration="3000" sm={6}>
                <p className="obsteclesText"> <img className="obsteclesEmoji" src={Emoji1} alt="There is a image!" /> 
                But I don't have know English language <br /> <span className="obsteclesTextIntoText">very well</span></p>
              </Col>
              <Col data-aos-duration="3000" sm={6}>
                <p className="obsteclesText"> <img className="obsteclesEmoji" src={Emoji2} alt="There is a image!" />  
                But I don't have It background or <br /> <span className="obsteclesTextIntoText">>computer skill</span> </p>
              </Col>
              <Col data-aos-duration="3000" sm={6}>
                <p className="obsteclesText"> <img className="obsteclesEmoji" src={Emoji2} alt="There is a image!" />  
                But I don't have that much money to pay <br /> <span className="obsteclesTextIntoText">at the beginning</span></p>
              </Col>
              <Col data-aos-duration="3000" sm={6}>
                <p className="obsteclesText"> <img className="obsteclesEmoji" src={Emoji2} alt="There is a image!" />  
                But I don't have know English language <br /> <span className="obsteclesTextIntoText">very well</span> </p>
              </Col>
            </Row>

            {/* <div className="col sadEmojiCol">

              <br />

              <br />

            </div>
            <div className="col happyEmojiCol">
              <br />

              <br />

            </div> */}
          </div>
      </div>
      </div>
    )
}

export default Obstecles;
