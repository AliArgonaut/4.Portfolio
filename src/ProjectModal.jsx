import { useState } from "react";

export function ProjectModal({ featuredProjectsArray, toggle, toggleModal }) {
  const [currentTab, setCurrentTab] = useState(featuredProjectsArray[0]);

  console.log(currentTab.name);

  return (
    <>
      <div className={toggle ? "hello" : "modalToggledOff"}>
        <div className="modal-viewport" onClick={toggleModal}></div>

        <div className="modal-box">
          <div className="project-modal-heading">@featuredprojects</div>
          <div className="project-modal-top4">
            <div className="pic">
              <img className="stockimage" src={currentTab.screencap} alt="" />
            </div>
            <p className="text">{currentTab.body}</p>
          </div>
          <div className="tabs">
            {featuredProjectsArray.map((e) => {
              return (
                <div
                  onClick={() => {
                    setCurrentTab(e);
                  }}
                  className="tabBox"
                  key={e.id}
                >
                  {e.id}
                </div>
              );
            })}
          </div>
          <div className="names">{currentTab.name}</div>
          <div className="tech">
            {currentTab.techs.map((tech, index) => (
              <img key={`key${index}`} src={tech} className="box"></img>
            ))}
          </div>
          <div className="more">{currentTab.more}</div>
        </div>
      </div>
    </>
  );
}
