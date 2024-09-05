import { useState } from "react";

export function ProjectModal({ featuredProjectsArray }) {
  const [displayedProject, setDisplayedProject] = useState(0);

  console.log(featuredProjectsArray[1].name);


  return (
    <>
      <div className="modal-viewport">
      </div>

      <div className="modal-box">
        <div className="project-modal-heading">@featuredprojects</div>
        <div className="project-modal-top4">
          <div className="screenshotContainer">
            <div className="imagePart">image</div>
          </div>
          <div className="descriptionContainer">
            <div className="topHalf">tech</div>
            <div className="title"><p>name</p></div>
          </div>
        </div>
      </div>
    </>
  );
}
