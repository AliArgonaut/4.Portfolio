import { useState } from "react";
import { GameSettings } from "./GameSettings";
import { ProjectModal } from "./ProjectModal";
import { Hero } from "./Hero";
import featuredProjectsArray from './DATA'

export default function App() {

  const [toggle, setToggle] = useState(false)

  function toggleModal() {
    setToggle(!toggle)
  }

  return (
    <>
      <div id="flex-row-cntr-box">
        <Hero toggleModal={toggleModal} />
      </div>
      <GameSettings />
      <ProjectModal toggleModal={toggleModal} toggle={toggle} featuredProjectsArray={featuredProjectsArray} />
    </>
  );
}

