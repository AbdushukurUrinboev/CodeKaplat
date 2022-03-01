import React from "react";
import '../apply/Apply.css';
import ApplyImg from '../../../assest/Marketing_perspective_matte1.svg';
import Computer from '../../../assest/Computer_perspective_matte1.svg';
import Books from '../../../assest/Books_perspective_matte1.svg';
import Headphones from '../../../assest/Headphones_perspective_matte1.svg';

function Apply() {

    return (
        <div className="apply">
          <div className="applyImg">
            <img className="marketingImg" src={ApplyImg} alt="" />
          </div>
          <p className="applyText">Apply until December 31, 2021 and get one of our benefits!</p>
          <div className="row applyLessonsRow">
            <div className="col-12">
              <div className="videoLesson"> <img src={Computer} alt="" /> Video lessons</div>
              <div className="textLesson"> <img src={Books} alt="" /> Text lessons</div>
              <div className="audioLesson"> <img src={Headphones} alt="" /> Audio lessons</div>
            </div>
          </div>
        </div>
    )
}

export default Apply;
