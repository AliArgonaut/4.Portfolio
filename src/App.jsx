import { useState } from "react";
import { GameSettings } from "./GameSettings";
import { ProjectModal } from "./ProjectModal";
import { Hero } from "./Hero";
import { About } from "./About";
import featuredProjectsArray from "./DATA";
import aboutMeData from "./AboutMeData.js"

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [isToggle, setIsToggle] = useState(false)

  function toggleModal() {
    setToggle(!toggle);
  }

  function toggleAboutModal() {
    setIsToggle(!isToggle)
  }



  return (
    <>
    <div className="wrap">
      <div id="flex-row-cntr-box">
        <Hero toggleModal={toggleModal} toggleAboutModal={toggleAboutModal} />
      </div>
      <GameSettings />
      <ProjectModal
        toggleModal={toggleModal}
        toggle={toggle}
        featuredProjectsArray={featuredProjectsArray}
      />

      <About toggleAboutModal = {toggleAboutModal} isToggle={isToggle} aboutMeData={aboutMeData} />
    </div>
    </>
  );
}
