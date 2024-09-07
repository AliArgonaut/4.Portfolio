import { useState } from "react";

export function About({ aboutMeData, isToggle, toggleAboutModal }) {


  return (
    <>
       <div className={isToggle ? "hello" : "aboutModalToggledOff"}>
        <div className="modal-viewport" onClick={toggleAboutModal}></div>
        <div className="modal-box">
          <div className="project-modal-top4">
            <div className="pic">
              <img className="stockimage" src="../src/assets/gif.gif" alt="" />
            </div>
            <p className="text">I'm a software engineering student at St. Leo University with a passion for full-stack development and a growing interest in embedded systems. I believe that great developers are defined by their ability to create functional, engaging experiences that users genuinely enjoy. In addition to coding, I love standup comedy and think we should all let ourselves laugh at the little, corny moments in life—because, sometimes, those are the best. One day, I would love to be on Kill Tony and see if I am actually funny.</p>
          </div>
          <div className="names">Get to know me</div>
         
        </div>
      </div>
    </>
  );
}
