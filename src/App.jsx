import { GameSettings } from "./GameSettings";
import { ProjectModal } from "./ProjectModal";
import { Hero } from "./Hero";
import featuredProjectsArray from './DATA'

export default function App() {

  return (
    <>
      <div id="flex-row-cntr-box">
        <Hero />
      </div>
      <GameSettings />
      <ProjectModal featuredProjectsArray={featuredProjectsArray} />
    </>
  );
}

