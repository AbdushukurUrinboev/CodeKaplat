import React from "react";
import '../apply/Apply.css';
import ApplyImg from '../../../assest/Marketing_perspective_matte1.svg';
import Computer from '../../../assest/Computer_perspective_matte1.svg';
import Books from '../../../assest/Books_perspective_matte1.svg';
import Headphones from '../../../assest/Headphones_perspective_matte1.svg';
import { Col, Container, Row } from "react-bootstrap";

function Apply() {

    return (
        <div className="apply">
          <Container>
          
          <div className="applyImg">
            <img className="marketingImg" src={ApplyImg} alt="" />
          </div>
          <p className="applyText">Apply until December 31, 2021 and get one of our benefits!</p>
          <div className="row applyLessonsRow">
            <div className="applyTextInside">
              <Row className="socialMediaAll">
                <Col>
                <div> <img src={Computer} alt="" /> Video lessons</div>
                </Col>
                <Col>
                <div> <img src={Books} alt="" /> Text lessons</div>
                </Col>
                <Col>
                <div> <img src={Headphones} alt="" /> Audio lessons</div>
                </Col>
              </Row>
            </div>
          </div>
          </Container>
        </div>
    )
}

export default Apply;
