import { useState } from "react";
import { GameSettings } from "./GameSettings";
import { ProjectModal } from "./ProjectModal";
import { Hero } from "./Hero";
import { Resume } from "./Resume";
import featuredProjectsArray from "./DATA";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [resumeToggle, setResumeToggle] = useState(false);

  function toggleModal() {
    setToggle(!toggle);
  }

  function toggleResume() {
    setResumeToggle(!resumeToggle);
  }

  return (
    <>
      <div id="flex-row-cntr-box">
        <Hero toggleModal={toggleModal} toggleResume={toggleResume} />
      </div>
      <GameSettings />
      <ProjectModal
        toggleModal={toggleModal}
        toggle={toggle}
        featuredProjectsArray={featuredProjectsArray}
      />

      <Resume toggleResume={toggleResume} resumeToggle={resumeToggle} />
    </>
  );
}
