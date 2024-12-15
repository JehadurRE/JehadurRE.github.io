
import Scene from "./components/Scene";
import getSkills from "./json/get_skills";
import { Skill } from "./json/get_skills";

export default async function Home() {
  const skills = (await getSkills());
  return (
      <main className="w-screen h-screen">
       <Scene skills={skills}/>
       </main>
  )
}
