import React from "react";
import '../obstecles/Obstecles.css';
import Emoji1 from '../../../assest/em-271.svg';
import Emoji2 from '../../../assest/em-81.svg';

function Obstecles() {

    return (
      <div className="container">
        <div className="obstecles">
          <p className="obsteclesCenterText">You should not let obstecles stop to change your <br /> future!</p>

          <div className="row obsteclesRow">

            <div className="col sadEmojiCol">
                <p className="obsteclesText"><img className="obsteclesEmoji" src={Emoji1} alt="" />  But I don't have It background or </p>
                <p className="textObstecles">computer skill</p>
              <br />
                <p className="obsteclesText" > <img className="obsteclesEmoji" src={Emoji1} alt="" /> But I don't have that much money to pay</p>
                <p className="textObstecles1"> at the beginning</p>
              <br />
                <p className="obsteclesText"> <img className="obsteclesEmoji" src={Emoji1} alt="" /> But I don't have know English language </p>
                <p className="textObstecles2"> very well</p>
            </div>
            <div className="col happyEmojiCol">
                <p className="obsteclesText"> <img className="obsteclesEmoji" src={Emoji2} alt="" />  But I don't have It background or </p>
                <p className="textObstecles3">computer skill</p>
              <br />
                <p className="obsteclesText"> <img className="obsteclesEmoji" src={Emoji2} alt="" />  But I don't have that much money to pay</p>
                <p className="textObstecles4">at the beginning</p>
              <br />
                <p className="obsteclesText"> <img className="obsteclesEmoji" src={Emoji2} alt="" />  But I don't have know English language </p>
                <p className="textObstecles5"> very well</p>
            </div>
          </div>
      </div>
      </div>
    )
}

export default Obstecles;
