
'use client'
import { Canvas } from "@react-three/fiber"
import { Experience } from "./Experience"
import { Scroll, ScrollControls } from "@react-three/drei"
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Clients from "./Clients"
import Blogs from "./Blogs"
import Contact from "./Contact"
import { Skill } from "../json/get_skills"
import { VelocityText } from "./Text/velocity_scroll_text"
export default function Scene({skills}: {skills: Skill[]}) {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />

      
      

      <ScrollControls pages={6} damping={0.1} >
        {/* <Experience /> */}



        <Scroll html>
          {/* TODO: Make Compatible Velocity Text with ScrollControls */}
        {/* <VelocityText vText="Nothing in this world can take the place of persistence. Talent will
            not; nothing is more common than unsuccessful men with talent. Genius
            will not; unrewarded genius is almost a proverb. Education will not;
            the world is full of educated derelicts. Persistence and determination
            alone are omnipotent. The slogan 'Press On!' has solved and always
            will solve the problems of the human race." /> */}
          <div className="flex flex-col items-center ">
          <Home />
          <About skills={skills}/>
          <Portfolio />
          <Clients/>
          <Blogs />
          <Contact  />
          </div>
        </Scroll>

      </ScrollControls>

      // TODO : make compatible with react-three-fiber 
      
     </Canvas>
  
  )
}
